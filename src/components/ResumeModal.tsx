import React, { useState } from 'react';
import { X, FileDown, Copy, Check, Printer, FileText, CheckCircle2 } from 'lucide-react';
import { USER_PROFILE, EDUCATION, CERTIFICATIONS, PROJECTS, SKILL_GROUPS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyMarkdown = () => {
    let md = `# ${USER_PROFILE.fullName}\n`;
    md += `${USER_PROFILE.professionalTitle} | ${USER_PROFILE.location}\n`;
    md += `Email: ${USER_PROFILE.email} | Phone: ${USER_PROFILE.phone}\n`;
    md += `LinkedIn: ${USER_PROFILE.linkedinUrl} | GitHub: ${USER_PROFILE.githubUrl}\n\n`;

    md += `## PROFESSIONAL SUMMARY\n`;
    md += `${USER_PROFILE.shortIntro}\n\n`;

    md += `## EDUCATION\n`;
    EDUCATION.forEach((edu) => {
      md += `### ${edu.qualification} — ${edu.institution}\n`;
      md += `Period: ${edu.period} | Status: ${edu.status} | Location: ${edu.location}\n`;
      md += `${edu.description}\n`;
      md += `Key Modules: ${edu.keyModules.join(', ')}\n\n`;
    });

    md += `## TECHNICAL SKILLS\n`;
    SKILL_GROUPS.forEach((group) => {
      md += `- **${group.category}**: ${group.skills.map((s) => s.name).join(', ')}\n`;
    });
    md += `\n`;

    md += `## FEATURED PROJECTS\n`;
    PROJECTS.forEach((proj) => {
      md += `### ${proj.name} (${proj.tagline})\n`;
      md += `Role: Full-Stack / Backend / RPA Developer | Technologies: ${proj.technologies.join(', ')}\n`;
      md += `${proj.description}\n`;
      proj.roleAndContributions.forEach((rc) => {
        md += `- ${rc}\n`;
      });
      if (proj.githubUrl) md += `Repository: ${proj.githubUrl}\n`;
      if (proj.liveUrl) md += `Live Project: ${proj.liveUrl}\n`;
      md += `\n`;
    });

    md += `## CERTIFICATIONS & TRAINING\n`;
    CERTIFICATIONS.forEach((cert) => {
      const yearStr = cert.year ? ` (${cert.year})` : '';
      md += `- **${cert.title}** — ${cert.issuingOrganization}${yearStr}\n`;
    });

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Curriculum Vitae — Zwavhudi Travor Tshivhase
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              title="Copy Markdown representation"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Executive Dossier */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed text-sm bg-white dark:bg-slate-900">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {USER_PROFILE.fullName}
            </h1>
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
              {USER_PROFILE.professionalTitle}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 mt-2">
              <a
                href={`mailto:${USER_PROFILE.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
                title={`Send email to ${USER_PROFILE.email}`}
              >
                {USER_PROFILE.email}
              </a>
              <span>•</span>
              <a
                href={`tel:${USER_PROFILE.phone.replace(/\s+/g, '')}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
                title={`Call ${USER_PROFILE.phone}`}
              >
                {USER_PROFILE.phone}
              </a>
              <span>•</span>
              <span>{USER_PROFILE.location}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-blue-600 dark:text-blue-400 mt-1">
              <a
                href={USER_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {USER_PROFILE.linkedinUrl}
              </a>
              <span>•</span>
              <a
                href={USER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {USER_PROFILE.githubUrl}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {USER_PROFILE.shortIntro}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="text-xs space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
                    <span>{edu.qualification}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-normal">{edu.period}</span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution} ({edu.location})
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded border border-slate-200 dark:border-slate-700">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{group.category}:</span>{' '}
                  <span className="text-slate-600 dark:text-slate-300">{group.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
              Key Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
                    <span>{proj.name} — <span className="font-normal text-slate-600 dark:text-slate-400">{proj.tagline}</span></span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{proj.category}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                    {proj.description}
                  </p>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-600 dark:text-slate-400 text-[11px]">
                    {proj.roleAndContributions.slice(0, 2).map((rc, i) => (
                      <li key={i}>{rc}</li>
                    ))}
                  </ul>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold">Technologies:</span> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Certifications & Training
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline">
                  <span>• <span className="font-semibold">{cert.title}</span> — {cert.issuingOrganization}</span>
                  {cert.year && <span className="text-slate-500 dark:text-slate-400 shrink-0 ml-2">{cert.year}</span>}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between no-print">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Available for immediate employment & interview discussions.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
