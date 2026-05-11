import { motion } from 'motion/react';

export function Projects() {
  const techStack = ['Node.js', 'Express.js', 'Groq LLM', 'AI/ML', 'PDF Parser'];

  return (
    <section id="projects" className="h-screen w-full flex flex-col items-center justify-center snap-center px-6 section-glass">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-accent-cyan text-sm mb-12 uppercase tracking-wider font-bold text-glow"
        >
          ////// 03 PROJECTS
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-md rounded-xl border border-accent-cyan/30 overflow-hidden card-glow transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <h3 className="text-2xl text-white font-bold mb-4 gradient-text">Resume Analyzer</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent-violet/20 text-accent-violet border border-accent-violet/40 text-xs rounded-full font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">✦</span>
                  <span className="text-white/90">AI-powered tool that analyzes resumes and provides intelligent feedback for improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">✦</span>
                  <span className="text-white/90">Leverages Groq LLM for natural language processing and semantic analysis</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <a
                  href="https://github.com/uttammohanty446-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold rounded-lg hover:shadow-[0_0_25px_rgba(96,165,250,0.4)] transition-all duration-300 flex items-center gap-2 text-sm"
                >
                  GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button className="px-6 py-3 border-2 border-accent-cyan/50 text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all duration-300 flex items-center gap-2 text-sm">
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full h-64 bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 rounded-lg border-2 border-accent-cyan/20 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-24 h-24 text-accent-cyan/80 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-accent-violet font-bold text-sm tracking-wider">
            More projects coming soon...
            <span className="animate-pulse ml-1 text-accent-cyan">█</span>
          </p>
        </div>
      </div>
    </section>
  );
}
