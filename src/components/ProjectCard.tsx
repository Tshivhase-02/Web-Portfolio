import React from 'react';
import { ExternalLink, Github, CheckCircle2, ChevronRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  // Generate a clean stylized UI preview graphic based on the project type
  const renderProjectGraphic = () => {
    switch (project.id) {
      case 'smart-register':
        return (
          <div className="w-full h-44 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden shrink-0">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">SmartRegister Portal</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-medium">Session Active</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="h-6 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 flex items-center px-3 justify-between text-[11px] text-slate-700 dark:text-slate-300 shadow-2xs">
                <span>Member Verification: Z. Tshivhase</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified [08:14 AM]</span>
              </div>
              <div className="h-6 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 flex items-center px-3 justify-between text-[11px] text-slate-700 dark:text-slate-300 shadow-2xs">
                <span>Member Verification: T. Baloyi</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified [08:19 AM]</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 flex justify-between">
              <span>Database: MySQL (Normalized)</span>
              <span>Backend: Spring Boot REST</span>
            </div>
          </div>
        );

      case 'home-affairs-citizen-services':
        return (
          <div className="w-full h-44 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden shrink-0">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">Citizen Services System</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 font-medium">Application Portal</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800 text-[11px] space-y-1 shadow-2xs">
                <div className="flex justify-between text-slate-700 dark:text-slate-300">
                  <span>Application Reference: #HA-2024-9402</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Under Review</span>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Service: Identity Document Verification</div>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 flex justify-between">
              <span>Validation: SA ID Algorithm</span>
              <span>Framework: Java / Spring MVC</span>
            </div>
          </div>
        );

      case 'email-processing-rpa':
        return (
          <div className="w-full h-44 bg-slate-900 dark:bg-slate-950 border-b border-slate-800 p-4 flex flex-col justify-between text-slate-200 overflow-hidden font-mono text-[11px] shrink-0">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-white text-xs font-sans font-semibold">RPA Execution Engine</span>
              </div>
              <span className="text-[10px] text-emerald-400">BOT STATUS: IDLE</span>
            </div>
            <div className="space-y-1 my-auto text-[10.5px]">
              <div className="text-slate-400">[1] Inbound mail received: inquiry_dataset.pdf</div>
              <div className="text-blue-300">[2] Blue Prism: Attachment extracted & parsed</div>
              <div className="text-emerald-400">[3] 142 records ingested to target SQL DB</div>
            </div>
            <div className="text-[10px] text-slate-400 font-sans flex justify-between">
              <span>Platform: Blue Prism / Power Automate</span>
              <span>Python Scripting</span>
            </div>
          </div>
        );

      case 'personal-portfolio':
      default:
        return (
          <div className="w-full h-44 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between overflow-hidden shrink-0">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">Corporate Portfolio Showcase</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium">Responsive</span>
            </div>
            <div className="my-auto text-center space-y-1">
              <div className="text-xs font-bold text-slate-900 dark:text-white">Zwavhudi Travor Tshivhase</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">React • TypeScript • Tailwind CSS</div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 flex justify-between">
              <span>Design: Modern Minimalist</span>
              <span>Target: Recruiter Presentation</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
      {/* Visual Project Header Graphic / Screenshot Preview */}
      <div>
        {renderProjectGraphic()}

        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Category & Status */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-md">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {project.status}
            </span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {project.name}
            </h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Role & Contributions Summary */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
              My Role & Key Contributions
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {project.roleAndContributions.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer: Tech stack and Links */}
      <div className="px-6 pb-6 pt-0 space-y-4">
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Row with Safe External Links */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {/* View Live Project (Only when provided) */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-900 transition-colors"
                title="View Live Project in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Live Project</span>
              </a>
            )}

            {/* View GitHub Repository (Only when provided) */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700 transition-colors"
                title="View GitHub Repository in new tab"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Project Details Modal Trigger */}
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline py-1 ml-auto"
          >
            <span>Project Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
