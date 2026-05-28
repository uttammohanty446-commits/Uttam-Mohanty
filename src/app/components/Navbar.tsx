import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Track scroll state from the main scroll container
  const updateScrollState = useCallback(() => {
    const scrollContainer = document.querySelector('main');
    if (!scrollContainer) return;

    const scrollTop = scrollContainer.scrollTop;
    setIsScrolled(scrollTop > 50);

    // Find active section
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    let currentSection = 'home';

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          currentSection = sectionId;
        }
      }
    }
    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    // Listen on main scroll container instead of window
    const scrollContainer = document.querySelector('main');
    if (!scrollContainer) return;

    scrollContainer.addEventListener('scroll', updateScrollState, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  return (
    <>
      {/* Desktop Navbar — floating centered pill */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'pt-3' : 'pt-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo — left */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-bold tracking-tighter text-text-primary uppercase z-50"
          >
            UTTAM<span className="text-accent-cyan">.DEV</span>
          </motion.a>

          {/* Center nav links — floating pill (desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
              isScrolled
                ? 'bg-black/60 backdrop-blur-2xl border-accent-cyan/20 shadow-[0_0_30px_rgba(52,211,153,0.08)]'
                : 'bg-white/5 backdrop-blur-md border-white/10'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-accent-cyan bg-accent-cyan/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </motion.div>

          {/* Resume button — right (desktop) */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-1.5 px-5 py-2 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-bold rounded-full text-xs uppercase tracking-wide hover:bg-accent-cyan/20 hover:border-accent-cyan/60 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:scale-105 transition-all duration-300"
            title="Download Resume"
          >
            <Download size={14} />
            Resume
          </motion.a>

          {/* Mobile hamburger */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-text-primary focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-8 py-3 text-lg font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="mt-4 px-8 py-3 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-bold rounded-xl text-lg uppercase tracking-widest hover:bg-accent-cyan/20 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
