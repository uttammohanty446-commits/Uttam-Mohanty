import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="h-screen w-full flex flex-col items-center justify-center snap-center px-6 section-glass">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-sm font-bold text-accent-violet tracking-widest uppercase mb-4 text-glow">////// Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 gradient-text">Let's build together</h3>
            <p className="text-white/80 text-lg mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out using the form or connect with me on social media.
            </p>
            
            <div className="flex space-x-6 mt-8">
              <a href="#" className="p-4 bg-black/40 backdrop-blur-md rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all group">
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-4 bg-black/40 backdrop-blur-md rounded-full border border-accent-violet/30 text-accent-violet hover:bg-accent-violet/20 hover:border-accent-violet hover:shadow-[0_0_20px_rgba(167,139,250,0.3)] transition-all group">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-4 bg-black/40 backdrop-blur-md rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all group">
                <Twitter size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-accent-cyan/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-accent-cyan mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:shadow-[0_0_15px_rgba(96,165,250,0.2)] transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-accent-cyan mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:shadow-[0_0_15px_rgba(96,165,250,0.2)] transition-all"
                  placeholder="you@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-accent-cyan mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:shadow-[0_0_15px_rgba(96,165,250,0.2)] transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold py-4 rounded-lg hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-all uppercase tracking-wider text-sm flex items-center justify-center group"
              >
                Send Message
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
