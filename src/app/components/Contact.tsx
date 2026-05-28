import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Check, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ============================================================
// 🔧 EmailJS Configuration — REPLACE THESE WITH YOUR OWN IDs
// 
// 1. Go to https://www.emailjs.com/ and sign up (free)
// 2. Add an Email Service (Gmail) → copy the SERVICE ID
// 3. Create an Email Template → copy the TEMPLATE ID
//    - Use these template variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Go to Account → copy your PUBLIC KEY
// ============================================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/uttammohanty446-commits',
      icon: Github,
      color: 'border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/uttam-mohanty',
      icon: Linkedin,
      color: 'border-accent-violet/30 text-accent-violet hover:bg-accent-violet/20 hover:border-accent-violet hover:shadow-[0_0_20px_rgba(110,231,183,0.3)]',
    },
    {
      name: 'Email',
      href: 'mailto:uttammohanty446@gmail.com',
      icon: Mail,
      color: 'border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      formRef.current.reset();
      // Reset back to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center snap-center px-4 sm:px-6 py-20 md:py-0 section-glass">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16"
        >
          <div>
            <h2 className="text-xs md:text-sm font-bold text-accent-cyan tracking-widest uppercase mb-3 md:mb-4 text-glow">////// Get In Touch</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 gradient-text">Let's build together</h3>
            <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out using the form or connect with me on social media.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 md:space-x-5 mb-6 md:mb-8">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 md:p-4 bg-black/40 backdrop-blur-md rounded-full border transition-all duration-300 group ${link.color}`}
                  title={link.name}
                >
                  <link.icon size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="glass-card rounded-lg p-3 md:p-4 flex items-center gap-3">
                <Mail size={18} className="text-accent-cyan flex-shrink-0" />
                <div>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider">Email</p>
                  <p className="text-white text-xs md:text-sm font-medium">uttammohanty446@gmail.com</p>
                </div>
              </div>
              <div className="glass-card rounded-lg p-3 md:p-4 flex items-center gap-3">
                <MapPin size={18} className="text-accent-violet flex-shrink-0" />
                <div>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider">Location</p>
                  <p className="text-white text-xs md:text-sm font-medium">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-6 md:p-10 rounded-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-bold text-accent-cyan mb-1.5 md:mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white text-sm md:text-base placeholder-white/40 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:shadow-[0_0_15px_rgba(52,211,153,0.2)] transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-bold text-accent-cyan mb-1.5 md:mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white text-sm md:text-base placeholder-white/40 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:shadow-[0_0_15px_rgba(52,211,153,0.2)] transition-all"
                  placeholder="you@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-bold text-accent-cyan mb-1.5 md:mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white text-sm md:text-base placeholder-white/40 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:shadow-[0_0_15px_rgba(52,211,153,0.2)] transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full font-bold py-3 md:py-4 rounded-lg uppercase tracking-wider text-xs md:text-sm flex items-center justify-center group transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                    : status === 'error'
                    ? 'bg-red-500/20 border border-red-500/40 text-red-400'
                    : 'bg-gradient-to-r from-accent-cyan to-accent-violet text-white hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:scale-[1.02]'
                } ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <ArrowRight size={16} className="ml-2 md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <Check size={16} className="mr-2" />
                    Message Sent Successfully!
                  </>
                )}
                {status === 'error' && (
                  <>
                    Failed to send. Try again.
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
