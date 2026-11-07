import React, { useState, useRef } from 'react';
import { X, Upload, Link as LinkIcon, FileText, Check, Trash2, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

export interface StoredCertificateConfig {
  [certId: string]: {
    url?: string;
    isPdf?: boolean;
    fileName?: string;
  };
}

interface CertificateManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: CertificationItem[];
  configs: StoredCertificateConfig;
  onSaveConfig: (certId: string, url: string, isPdf: boolean, fileName?: string) => void;
  onRemoveConfig: (certId: string) => void;
}

export const CertificateManagerModal: React.FC<CertificateManagerModalProps> = ({
  isOpen,
  onClose,
  certificates,
  configs,
  onSaveConfig,
  onRemoveConfig,
}) => {
  const [selectedCertId, setSelectedCertId] = useState<string>(certificates[0]?.id || '');
  const [inputUrl, setInputUrl] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'url' | 'upload'>('url');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const currentCert = certificates.find((c) => c.id === selectedCertId) || certificates[0];
  const currentConfig = configs[selectedCertId] || {};

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    let formattedUrl = inputUrl.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://') && !formattedUrl.startsWith('/')) {
      formattedUrl = 'https://' + formattedUrl;
    }

    const isPdf = formattedUrl.toLowerCase().endsWith('.pdf');
    onSaveConfig(selectedCertId, formattedUrl, isPdf);
    setInputUrl('');
    setSuccessMsg('Verification URL saved successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileName = file.name;
    const isPdf = file.type === 'application/pdf' || fileName.toLowerCase().endsWith('.pdf');

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result as string;
      onSaveConfig(selectedCertId, base64Data, isPdf, fileName);
      setSuccessMsg(`Document "${fileName}" attached successfully!`);
      setTimeout(() => setSuccessMsg(''), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleOpenCertificate = (url: string) => {
    if (url.startsWith('data:')) {
      const win = window.open();
      if (win) {
        win.document.write(
          `<html><head><title>${currentCert.title} - Certificate Document</title><style>body{margin:0;display:flex;justify-content:center;align-items:center;background:#1e293b;height:100vh;}iframe,embed{width:100%;height:100%;border:none;}</style></head><body><embed src="${url}" type="application/pdf" width="100%" height="100%" /></body></html>`
        );
      }
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Certificate Document & Link Manager
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Easily attach your certificate PDF files or official verification links without modifying code.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
          {/* Certificate Selection Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Select Certificate to Update
            </label>
            <select
              value={selectedCertId}
              onChange={(e) => {
                setSelectedCertId(e.target.value);
                setInputUrl('');
                setSuccessMsg('');
              }}
              className="w-full h-11 px-3.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-medium focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40 cursor-pointer"
            >
              {certificates.map((cert) => {
                const hasConfig = !!configs[cert.id]?.url;
                return (
                  <option key={cert.id} value={cert.id}>
                    {cert.title} ({cert.issuingOrganization}) {hasConfig ? '✓ Attached' : '— No Link'}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Current Status Banner */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Current Document Status for {currentCert.issuingOrganization}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {currentConfig.url ? (
                  <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      {currentConfig.isPdf ? 'PDF Document Attached' : 'Verification URL Configured'}
                      {currentConfig.fileName && ` (${currentConfig.fileName})`}
                    </span>
                  </span>
                ) : (
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-normal">
                    <AlertCircle className="w-4 h-4 text-slate-400" />
                    <span>No document or verification link currently attached (Link is hidden)</span>
                  </span>
                )}
              </div>
            </div>

            {currentConfig.url && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleOpenCertificate(currentConfig.url!)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-xs font-semibold border border-blue-200 dark:border-blue-900 transition-colors"
                >
                  <span>Test Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onRemoveConfig(selectedCertId);
                    setSuccessMsg('Certificate link removed.');
                    setTimeout(() => setSuccessMsg(''), 3000);
                  }}
                  className="p-1.5 rounded-lg border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                  title="Remove link"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Success Message Banner */}
          {successMsg && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-lg text-emerald-800 dark:text-emerald-300 text-xs font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Action Tabs: Upload PDF or Paste URL */}
          <div className="space-y-4">
            <div className="flex border-b border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('url')}
                className={`flex items-center gap-2 pb-2.5 px-4 text-xs font-semibold border-b-2 transition-colors ${
                  activeTab === 'url'
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <LinkIcon className="w-4 h-4" />
                <span>Verification URL</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                className={`flex items-center gap-2 pb-2.5 px-4 text-xs font-semibold border-b-2 transition-colors ${
                  activeTab === 'upload'
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Upload className="w-4 h-4" />
                <span>Upload PDF Document</span>
              </button>
            </div>

            {/* Tab 1: Verification URL */}
            {activeTab === 'url' && (
              <form onSubmit={handleSaveUrl} className="space-y-3">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Enter Official Verification URL or Public File Path
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="https://udemy.com/certificate/UC-xxxx or /certificates/java-21.pdf"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="flex-1 h-10 px-3.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40"
                  />
                  <button
                    type="submit"
                    className="px-4 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
                  >
                    Save URL
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Tip: You can also place PDF files in the project's <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-slate-700 dark:text-slate-300">/public/certificates/</code> folder and reference them here.
                </p>
              </form>
            )}

            {/* Tab 2: Upload PDF File */}
            {activeTab === 'upload' && (
              <div className="space-y-3">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 rounded-xl p-8 text-center cursor-pointer bg-slate-50/50 dark:bg-slate-800/40 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all"
                >
                  <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Click to select or upload a certificate PDF
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Supports .pdf or image files. Stored safely in your browser for immediate recruiter access.
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf,image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Changes update the "View Certificate" link in real time.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 dark:bg-blue-600 hover:bg-slate-900 dark:hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
