import React from 'react';
import { Code, Server, Layout, Database, Cpu, Wrench } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'Backend Development':
        return <Server className="w-5 h-5 text-blue-600" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-blue-600" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'Automation & RPA':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Development Tools & Practices':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      default:
        return <Code className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-1">
            Technical Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Technologies and frameworks acquired through academic coursework at the University of Venda, practical project development, and professional automation training.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="bg-slate-50/70 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white dark:bg-slate-800/80 p-3 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-2xs transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-2 py-0.5 rounded">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
