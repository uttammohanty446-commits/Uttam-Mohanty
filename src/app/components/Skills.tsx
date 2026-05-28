import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Category {
  title: string;
  emoji: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'HTML', level: 90, icon: '🌐' },
      { name: 'CSS', level: 85, icon: '🎨' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
      { name: 'React', level: 75, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 80, icon: '💨' },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js', level: 70, icon: '🟢' },
      { name: 'Express.js', level: 70, icon: '🚀' },
      { name: 'MongoDB', level: 65, icon: '🍃' },
    ],
  },
  {
    title: 'Cybersecurity',
    emoji: '🛡️',
    skills: [
      { name: 'Network Security', level: 60, icon: '🔐' },
      { name: 'Ethical Hacking', level: 55, icon: '🕵️' },
      { name: 'Linux', level: 70, icon: '🐧' },
      { name: 'Wireshark', level: 60, icon: '🦈' },
    ],
  },
  {
    title: 'Tools',
    emoji: '🔧',
    skills: [
      { name: 'Git', level: 80, icon: '🔀' },
      { name: 'GitHub', level: 85, icon: '🐙' },
      { name: 'VS Code', level: 90, icon: '📝' },
      { name: 'Postman', level: 70, icon: '📮' },
    ],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const getBarColor = (level: number) => {
    if (level >= 85) return 'from-emerald-400 to-green-500';
    if (level >= 70) return 'from-emerald-500 to-teal-500';
    if (level >= 60) return 'from-teal-500 to-cyan-600';
    return 'from-cyan-600 to-blue-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 hover:bg-white/[0.06] hover:border-accent-cyan/30 transition-all duration-400 cursor-default"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl">{skill.icon}</span>
          <div className="flex-1 min-w-0">
            <h5 className="text-white text-sm font-semibold tracking-wide truncate">{skill.name}</h5>
          </div>
          <span className="text-accent-cyan text-xs font-mono font-bold">{skill.level}%</span>
        </div>

        {/* Slim progress bar */}
        <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className={`h-full rounded-full bg-gradient-to-r ${getBarColor(skill.level)}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="min-h-screen w-full flex flex-col items-center justify-center snap-center px-4 sm:px-6 py-20 md:py-0 section-glass">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-accent-cyan text-sm mb-3 md:mb-4 uppercase tracking-wider font-bold text-glow"
        >
          ////// 02 SKILLS
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-10 uppercase gradient-text"
        >
          Technical Arsenal
        </motion.h3>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8 md:mb-10"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === i
                  ? 'text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 shadow-[0_0_15px_rgba(52,211,153,0.1)]'
                  : 'text-white/40 bg-white/[0.03] border border-white/[0.06] hover:text-white/70 hover:bg-white/[0.06]'
              }`}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.title}
              {activeTab === i && (
                <motion.div
                  layoutId="skillTabIndicator"
                  className="absolute -bottom-px left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          >
            {categories[activeTab].skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-10 grid grid-cols-3 gap-3 md:gap-4"
        >
          {[
            { label: 'Technologies', value: categories.reduce((a, c) => a + c.skills.length, 0).toString() },
            { label: 'Categories', value: categories.length.toString() },
            { label: 'Avg Proficiency', value: `${Math.round(categories.flatMap(c => c.skills).reduce((a, s) => a + s.level, 0) / categories.flatMap(c => c.skills).length)}%` },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-3 md:py-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
              <div className="text-accent-cyan text-lg md:text-2xl font-bold font-mono">{stat.value}</div>
              <div className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
