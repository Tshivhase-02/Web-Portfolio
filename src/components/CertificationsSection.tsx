import React, { useState, useEffect } from 'react';
import { Award, Calendar, Building2, ExternalLink, FileText, Settings, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificateManagerModal, StoredCertificateConfig } from './CertificateManagerModal';

export const CertificationsSection: React.FC = () => {
  const [certConfigs, setCertConfigs] = useState<StoredCertificateConfig>({});
  const [isManagerOpen, setIsManagerOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('zwavhudi_certificates');
      if (stored) {
        setCertConfigs(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleSaveConfig = (certId: string, url: string, isPdf: boolean, fileName?: string) => {
    const updated = {
      ...certConfigs,
      [certId]: { url, isPdf, fileName },
    };
    setCertConfigs(updated);
    try {
      localStorage.setItem('zwavhudi_certificates', JSON.stringify(updated));
    } catch {
      // Local storage quota or security error
    }
  };

  const handleRemoveConfig = (certId: string) => {
    const updated = { ...certConfigs };
    delete updated[certId];
    setCertConfigs(updated);
    try {
      localStorage.setItem('zwavhudi_certificates', JSON.stringify(updated));
    } catch {
      // Local storage quota or security error
    }
  };

  const handleOpenCertificate = (url: string, title: string) => {
    if (url.startsWith('data:')) {
      const win = window.open();
      if (win) {
        win.document.write(
          `<html><head><title>${title} - Certificate Document</title><style>body{margin:0;display:flex;justify-content:center;align-items:center;background:#1e293b;height:100vh;}iframe,embed{width:100%;height:100%;border:none;}</style></head><body><embed src="${url}" type="application/pdf" width="100%" height="100%" /></body></html>`
        );
      }
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="certifications" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-1">
              Verified Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Certifications & Professional Development
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Certifications and structured training programmes completed in workplace readiness, entrepreneurship, digital literacy, Java programming, and generative AI.
            </p>
          </div>

          {/* Easy Certificate Manager Trigger Button */}
          <div className="self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setIsManagerOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-2xs transition-colors"
              title="Add or update certificate PDF files and verification URLs"
            >
              <Settings className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Manage Certificate Links</span>
            </button>
          </div>
        </div>

        {/* Certifications Grid: Simple, consistent card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            // Check if certificate has an attached document or URL in config or in static data
            const config = certConfigs[cert.id];
            const activeUrl = config?.url || cert.certificateUrl;
            const isPdf = config?.isPdf !== undefined ? config.isPdf : (cert.isPdf || activeUrl?.toLowerCase().endsWith('.pdf'));

            return (
              <div
                key={cert.id}
                className="h-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Issuer & Optional Year */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>{cert.issuingOrganization}</span>
                    </span>
                    {cert.year && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          <span>{cert.year}</span>
                        </span>
                      </>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Subtle View Certificate Link (ONLY displayed when a valid PDF or URL is available) */}
                {activeUrl && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenCertificate(activeUrl, cert.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                      title={isPdf ? 'View PDF certificate document in new tab' : 'Open official verification page in new tab'}
                    >
                      {isPdf ? (
                        <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                      )}
                      <span>View Certificate</span>
                    </button>

                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      {isPdf ? 'PDF Document' : 'Official Link'}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Easy Certificate Manager Modal */}
      <CertificateManagerModal
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
        certificates={CERTIFICATIONS}
        configs={certConfigs}
        onSaveConfig={handleSaveConfig}
        onRemoveConfig={handleRemoveConfig}
      />
    </section>
  );
};
