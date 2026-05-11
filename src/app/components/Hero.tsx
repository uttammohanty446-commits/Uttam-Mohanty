import { motion } from 'motion/react';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const Hero = () => {
  const name = "Uttam Mohanty";
  
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center snap-center px-6">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={sentence}
          className="mb-6 flex justify-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase flex flex-wrap justify-center text-glow">
            <span className="text-text-primary mr-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Hi, I'm</span>
            <div className="flex">
              {name.split("").map((char, index) => (
                <motion.span 
                  key={char + "-" + index} 
                  variants={letter}
                  className={char === " " ? "w-4 md:w-8" : "gradient-text inline-block drop-shadow-[0_0_25px_rgba(96,165,250,0.6)]"}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Full Stack Developer & Cybersecurity Enthusiast crafting secure and scalable digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] transition-all w-full sm:w-auto uppercase tracking-wide text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium rounded-full hover:bg-white/20 hover:border-white/50 transition-all w-full sm:w-auto uppercase tracking-wide text-sm"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-white/70 tracking-widest uppercase mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Scroll down to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-cyan to-transparent"></div>
      </motion.div>
    </section>
  );
};
