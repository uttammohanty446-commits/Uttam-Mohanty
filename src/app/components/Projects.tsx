import { motion } from 'motion/react';
import resumeAnalyzerImg from '../../assets/resume-analyzer.png';

export function Projects() {
  const projects = [
    {
      title: 'AI Resume Analyzer',
      description: 'An AI-powered Resume Analyzer web application that analyzes resumes, evaluates ATS compatibility, and helps users improve their resumes with smart insights and suggestions.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'AI APIs', 'Tailwind CSS'],
      github: 'https://github.com/uttammohanty446-commits/Resumeanalyzer2',
      live: 'https://resumeanalyzer2.vercel.app/',
      image: resumeAnalyzerImg,
    },
  ];

  return (
    <section id="projects" className="min-h-screen w-full flex flex-col items-center justify-center snap-center px-4 sm:px-6 py-20 md:py-0 section-glass">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-accent-cyan text-sm mb-6 md:mb-12 uppercase tracking-wider font-bold text-glow"
        >
          ////// 03 PROJECTS
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-xl overflow-hidden mb-6"
          >
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 p-4 sm:p-6 md:p-8">
              <div>
                <h3 className="text-xl md:text-2xl text-white font-bold mb-3 md:mb-4 gradient-text">{project.title}</h3>

                <p className="text-white/70 text-sm md:text-base mb-4 md:mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5 md:mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 md:px-3 py-1 bg-accent-violet/15 text-accent-violet border border-accent-violet/30 text-[10px] md:text-xs rounded-full font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold rounded-lg hover:shadow-[0_0_25px_rgba(96,165,250,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 md:px-6 py-2.5 md:py-3 border-2 border-accent-cyan/40 text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 hover:border-accent-cyan hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub Repo
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full h-48 sm:h-56 md:h-64 rounded-lg border border-accent-cyan/20 relative overflow-hidden group cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="mt-4 md:mt-6 text-center">
          <p className="text-accent-violet font-bold text-xs md:text-sm tracking-wider">
            More projects coming soon...
            <span className="animate-pulse ml-1 text-accent-cyan">█</span>
          </p>
        </div>
      </div>
    </section>
  );
}
