export const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-accent-cyan/20 py-12 snap-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-2xl font-black tracking-tighter text-text-primary uppercase">
            UTTAM<span className="gradient-text">.DEV</span>
          </a>
          <p className="text-white/50 text-sm mt-2">
            // Copyright © 2026 Uttam Mohanty. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-accent-cyan hover:text-white hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.6)] transition-all text-sm uppercase tracking-wider font-bold">
            Twitter
          </a>
          <a href="#" className="text-accent-violet hover:text-white hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.6)] transition-all text-sm uppercase tracking-wider font-bold">
            GitHub
          </a>
          <a href="#" className="text-accent-cyan hover:text-white hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.6)] transition-all text-sm uppercase tracking-wider font-bold">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
