import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const roles = [
  'Full Stack Developer',
  'Cybersecurity Enthusiast',
  'Hackathon Finalist',
  'Open Source Learner',
];

export const Hero = () => {
  const name = "Uttam Mohanty";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center snap-center px-4 sm:px-6">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase mb-3 text-glow"
        >
          Hi, I'm
        </motion.p>

        {/* Name with letter animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={sentence}
          className="mb-4 sm:mb-5"
        >
          <h1 className="text-[1.35rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase text-glow whitespace-nowrap">
            <div className="flex justify-center gap-x-2 sm:gap-x-4 md:gap-x-5">
              {name.split(" ").map((word, wordIndex) => (
                <span key={`word-${wordIndex}`} className="flex flex-nowrap">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${wordIndex}-${charIndex}`}
                      variants={letter}
                      className="gradient-text inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>
          </h1>
        </motion.div>

        {/* Typing animation subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-5 sm:mb-6"
        >
          <h3 className="text-base sm:text-lg md:text-xl text-white/90 font-light tracking-wide">
            <span className="text-accent-violet font-medium">{displayText}</span>
            <span className="typing-cursor"></span>
          </h3>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto px-4 sm:px-2"
        >
          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-10 font-light leading-relaxed">
            Passionate about building secure, scalable, and impactful digital solutions while continuously learning modern technologies and cybersecurity practices.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] hover:scale-105 transition-all duration-300 w-full sm:w-auto uppercase tracking-wide text-xs sm:text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium rounded-full hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto uppercase tracking-wide text-xs sm:text-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] sm:text-xs text-white/80 tracking-widest uppercase mb-2">Scroll down to discover</span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-accent-cyan to-transparent"></div>
      </motion.div>
    </section>
  );
};
