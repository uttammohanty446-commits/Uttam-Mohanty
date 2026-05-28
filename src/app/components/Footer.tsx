import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-accent-cyan/20 py-8 md:py-12 snap-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl md:text-2xl font-black tracking-tighter text-text-primary uppercase">
            UTTAM<span className="gradient-text">.DEV</span>
          </a>
          <p className="text-white/50 text-xs md:text-sm mt-1 md:mt-2">
            // Copyright © 2026 Uttam Mohanty. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-5">
          <a 
            href="https://github.com/uttammohanty446-commits" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 rounded-full border border-white/10 text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300 group"
            title="GitHub"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://linkedin.com/in/uttam-mohanty" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 rounded-full border border-white/10 text-accent-violet hover:bg-accent-violet/20 hover:border-accent-violet/50 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all duration-300 group"
            title="LinkedIn"
          >
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:uttammohanty446@gmail.com" 
            className="p-2.5 bg-white/5 rounded-full border border-white/10 text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300 group"
            title="Email"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};
