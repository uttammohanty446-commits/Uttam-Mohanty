import { motion } from 'motion/react';
import profileImg from '../../assets/profile.jpg';

export function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center snap-center px-4 sm:px-6 py-20 md:py-0 section-glass">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-accent-cyan text-sm mb-6 md:mb-12 uppercase tracking-wider font-bold text-glow"
        >
          ////// 01 ABOUT
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-accent-cyan/60 overflow-hidden shadow-[0_0_40px_rgba(96,165,250,0.3)]">
                <img 
                  src={profileImg} 
                  alt="Uttam Mohanty" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 gradient-text"
            >
              About Me
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-white/80 text-sm md:text-base mb-4 leading-relaxed font-light"
            >
              I am a passionate and self-driven Full Stack Developer and Cybersecurity Enthusiast from Odisha, India. I enjoy building real-world projects, exploring modern web technologies, and learning cybersecurity concepts.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-white/80 text-sm md:text-base mb-4 leading-relaxed font-light"
            >
              I actively participate in hackathons, collaborative projects, and tech communities to improve my skills and gain practical experience. My goal is to become a skilled software engineer capable of building secure and scalable applications that solve meaningful problems.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-white/80 text-sm md:text-base mb-6 md:mb-8 leading-relaxed font-light"
            >
              I believe in continuous learning, teamwork, and creating impactful technology.
            </motion.p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: "🎓", text: "MCA Student" },
                { icon: "📍", text: "Bhubaneswar" },
                { icon: "💻", text: "BCA Graduate" },
                { icon: "🔒", text: "Learning Cybersecurity" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.25 + (index * 0.05) }}
                  className="glass-card p-3 md:p-4 rounded-lg"
                >
                  <div className="text-xl md:text-2xl mb-1 md:mb-2">{item.icon}</div>
                  <div className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
