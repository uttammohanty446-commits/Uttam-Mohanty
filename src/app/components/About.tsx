import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="h-screen w-full flex flex-col items-center justify-center snap-center px-6 section-glass">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-accent-cyan text-sm mb-12 uppercase tracking-wider font-bold text-glow"
        >
          ////// 01 ABOUT
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative w-full h-full bg-black/40 backdrop-blur-md rounded-full border-2 border-accent-cyan/60 flex items-center justify-center shadow-[0_0_40px_rgba(96,165,250,0.3)]">
                <svg className="w-32 h-32 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              I'm a Computer Science MCA student from Bhubaneswar, India, with a strong foundation in software development and cybersecurity. Currently pursuing my Master's degree at Regional College of Management, I'm passionate about building innovative solutions and exploring the depths of secure coding practices.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎓", text: "MCA Student" },
                { icon: "📍", text: "Bhubaneswar" },
                { icon: "💻", text: "BCA Graduate" },
                { icon: "🔒", text: "Cybersecurity" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="bg-black/40 backdrop-blur-md p-4 rounded-lg border border-accent-cyan/30 card-glow transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white font-bold text-sm uppercase tracking-wider">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
