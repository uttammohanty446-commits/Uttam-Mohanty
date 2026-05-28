import { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
  title: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  highlights?: string[];
  badge?: string;
  index: number;
}

function TimelineItem({ title, year, role, description, tags, highlights, badge, index }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.2 }
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
      className={`relative pl-8 md:pl-12 pb-8 md:pb-12 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(0,212,255,0.8)] animate-pulse"></div>

      <div className="glass-card p-4 md:p-6 rounded-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
          <h3 className="text-base md:text-xl text-white font-bold">{title}</h3>
          <div className="flex items-center gap-2">
            {badge && (
              <span className="px-2 py-0.5 bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 text-[10px] md:text-xs rounded-full font-semibold">
                {badge}
              </span>
            )}
            <span className="text-accent-cyan font-mono text-xs md:text-sm bg-accent-cyan/10 px-2 py-0.5 rounded">{year}</span>
          </div>
        </div>

        <p className="text-accent-violet text-sm md:text-base mb-2 md:mb-3 font-medium">{role}</p>
        <p className="text-white/70 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">{description}</p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 md:mb-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2">
                <span className="text-accent-cyan text-xs">✦</span>
                <span className="text-white/60 text-xs md:text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 md:px-3 py-1 bg-accent-violet/15 text-accent-violet border border-accent-violet/25 text-[10px] md:text-xs rounded-full font-medium"
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
      title: 'HackFest 2026',
      year: '2026',
      role: 'Volunteer — Google Developer Groups (GDG) Bhubaneswar & GDG Cloud Bhubaneswar',
      description: 'Successfully volunteered at HackFest 2026, a 24-hour national-level hackathon organized by GDG Bhubaneswar and GDG Cloud Bhubaneswar. Contributed to event coordination, teamwork, and smooth execution while collaborating with developers and innovators from across the country.',
      tags: ['Hackathon', 'GDG', 'Volunteering', 'National Level'],
      highlights: [
        'National-Level Hackathon Experience',
        'Team Collaboration & Event Coordination',
        'Worked with Developer Community',
        'Improved Communication & Management Skills',
      ],
      badge: 'Certified Volunteer',
    },
    {
      title: 'Brahmastra 4.0',
      year: '2026',
      role: 'Lead POC, Drona Series',
      description: 'Coordinated 100+ corporate participants across 4 events. Led event planning, participant management, and execution for the Drona Series under Brahmastra 4.0.',
      tags: ['Leadership', 'Event Management'],
    },
    {
      title: 'Ashwamedha 2.0',
      year: '2026',
      role: 'Volunteer — Crowd Management',
      description: 'Managed 1000+ attendees at the Ashwamedha 2.0 event. Ensured smooth crowd flow and participant experience.',
      tags: ['Volunteering', 'Operations'],
    },
    {
      title: 'Top 10 Students — Batch 2026',
      year: '2026',
      role: 'Academic Achievement — Regional College of Management, Bhubaneswar',
      description: 'Recognized as one of the Top 10 students in the batch for academic performance and active participation in college activities.',
      tags: ['Academic Excellence', 'Top Performer'],
      badge: '🏆 Top 10',
    },
  ];

  return (
    <section id="experience" className="min-h-screen w-full flex flex-col items-center justify-center snap-center px-4 sm:px-6 py-20 md:py-0 section-glass">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-accent-cyan text-sm mb-6 md:mb-12 uppercase tracking-wider font-bold text-glow">
          ////// 04 EXPERIENCE & ACHIEVEMENTS
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
