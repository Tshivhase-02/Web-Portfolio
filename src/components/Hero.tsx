import React from 'react';
import { FileDown, ArrowRight, Github, Linkedin, Mail, Phone, CheckCircle2, MapPin } from 'lucide-react';
import { USER_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onExploreProjects }) => {
  const profilePhoto = USER_PROFILE.avatarUrl || '/profile.jpg';

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Professional Introduction */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill & Location Pin */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Available for Junior Software Engineering & Graduate Roles</span>
              </div>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {USER_PROFILE.fullName}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                {USER_PROFILE.professionalTitle}
              </p>
              {/* Highlight Location with Location Pin */}
              <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 mt-2.5">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{USER_PROFILE.location}</span>
              </div>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Computer Science graduate passionate about <span className="text-slate-900 dark:text-white font-medium">software engineering</span>,{' '}
              <span className="text-slate-900 dark:text-white font-medium">Java & Spring Boot backend development</span>,{' '}
              <span className="text-slate-900 dark:text-white font-medium">Robotic Process Automation (RPA)</span>, and{' '}
              <span className="text-slate-900 dark:text-white font-medium">AI-assisted modern development</span>. Dedicated to writing clean, maintainable code and building practical software that solves real-world challenges.
            </p>

            {/* Core Interest Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Java & Spring Boot',
                'REST APIs & JPA',
                'Spring Security & JWT',
                'CI/CD & Vercel',
                'SQL & MySQL',
                'Blue Prism & RPA'
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-md"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects & Download CV */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium text-sm transition-colors shadow-xs"
              >
                <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download CV</span>
              </button>

              {/* LinkedIn, GitHub, Email & Phone Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={USER_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-xs"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={USER_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-xs"
                  aria-label="GitHub Profile"
                  title="View GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${USER_PROFILE.email}`}
                  className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-xs"
                  aria-label={`Send Email to ${USER_PROFILE.email}`}
                  title={`Email ${USER_PROFILE.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${USER_PROFILE.phone.replace(/\s+/g, '')}`}
                  className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-xs"
                  aria-label={`Call ${USER_PROFILE.phone}`}
                  title={`Call ${USER_PROFILE.phone}`}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Professional Photograph Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="relative bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md transition-colors">
                {/* Photo Frame Container - Fixed, Permanent & Responsive */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
                  <img
                    src={profilePhoto}
                    alt={`${USER_PROFILE.fullName} - ${USER_PROFILE.professionalTitle}`}
                    className="w-full h-full object-cover object-center select-none"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Professional caption card below photo */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">University of Venda</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400" title={USER_PROFILE.location}>
                    <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Randburg, South Africa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
