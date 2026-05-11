import { motion } from 'motion/react';

export function Skills() {
  const skills = [
    { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", color: "from-blue-400 to-blue-600" },
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", color: "from-green-400 to-emerald-600" },
    { name: "Python", color: "from-yellow-300 to-blue-500" },
    { name: "Cybersecurity", color: "from-red-400 to-purple-600" },
    { name: "SQL", color: "from-indigo-400 to-purple-500" },
    { name: "Git", color: "from-orange-400 to-red-500" },
  ];

  return (
    <section id="skills" className="h-screen w-full flex flex-col items-center justify-center snap-center px-6 section-glass">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-accent-violet text-sm mb-6 uppercase tracking-wider font-bold text-glow"
        >
          ////// 02 SKILLS
        </motion.h2>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 uppercase gradient-text"
        >
          Technical Arsenal
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-accent-violet/30 p-6 rounded-xl flex flex-col items-center justify-center group card-glow transition-all duration-300"
            >
              <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${skill.color} mb-4 group-hover:w-16 transition-all duration-300`}></div>
              <span className="text-white font-bold text-lg tracking-wider group-hover:text-accent-violet transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
