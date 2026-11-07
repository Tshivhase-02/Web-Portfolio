import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { USER_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#070D18] text-white border-t border-slate-800 dark:border-slate-800/80 pt-12 pb-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-lg font-bold text-white tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span>{USER_PROFILE.fullName}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science graduate and aspiring software developer. Passionate about Java, Spring Boot backend systems, RPA workflows, and modern software engineering.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${USER_PROFILE.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label={`Call ${USER_PROFILE.phone}`}
                title={`Call ${USER_PROFILE.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${USER_PROFILE.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label={`Email ${USER_PROFILE.email}`}
                title={`Email ${USER_PROFILE.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={USER_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={USER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Portfolio Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Education & Qualifications
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Recruiter & Career Notice */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Career Availability
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-semibold text-white">Actively Seeking Opportunities</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Graduate Software Developer, Junior Software Engineer, Java/Spring Boot Backend, and RPA roles. Open to relocation and remote positions.
              </p>
              <div className="pt-1.5 text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Email:</span>
                  <a
                    href={`mailto:${USER_PROFILE.email}`}
                    className="text-white hover:text-blue-400 font-medium transition-colors"
                  >
                    {USER_PROFILE.email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Phone:</span>
                  <a
                    href={`tel:${USER_PROFILE.phone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-blue-400 font-medium transition-colors"
                  >
                    {USER_PROFILE.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {USER_PROFILE.fullName}. Personal Portfolio Website.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
