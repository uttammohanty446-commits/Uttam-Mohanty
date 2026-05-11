import { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
  title: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  index: number;
}

function TimelineItem({ title, year, role, description, tags, index }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={ref}
      className={`relative pl-12 pb-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(0,212,255,0.8)] animate-pulse"></div>

      <div className="bg-bg-secondary p-6 rounded-lg border border-border-color hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-['Space_Mono'] text-xl text-text-primary">{title}</h3>
          <span className="text-accent-cyan font-['Fira_Code'] text-sm">{year}</span>
        </div>

        <p className="text-accent-violet mb-3">{role}</p>
        <p className="text-text-secondary mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent-violet/20 text-accent-violet border border-accent-violet/30 font-['Fira_Code'] text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const experiences = [
    {
      title: 'Brahmastra 4.0',
      year: '2026',
      role: 'Lead POC, Drona Series',
      description: 'Coordinated 100+ corporate participants across 4 events',
      tags: ['Leadership', 'Event Management']
    },
    {
      title: 'Ashwamedha 2.0',
      year: '2026',
      role: 'Volunteer — Crowd Management',
      description: 'Managed 1000+ attendees',
      tags: ['Volunteering', 'Operations']
    }
  ];

  return (
    <section id="experience" className="h-screen w-full flex flex-col items-center justify-center snap-center px-6 section-glass">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-['Fira_Code'] text-accent-cyan text-sm mb-12 uppercase tracking-wider">
          04 // EXPERIENCE
        </h2>

        <div className="relative border-l-2 border-accent-cyan/30">
          <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent"></div>

          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
