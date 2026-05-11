import { useEffect, useRef, useState } from 'react';

export function Achievements() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const target = 10;
          const increment = 1;
          const duration = 1500;
          const stepTime = duration / target;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="achievements" className="h-screen w-full flex flex-col items-center justify-center snap-center px-6 section-glass">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-['Fira_Code'] text-accent-cyan text-sm mb-12 uppercase tracking-wider">
          05 // ACHIEVEMENTS
        </h2>

        <div
          ref={ref}
          className="relative bg-bg-secondary p-8 rounded-xl border border-accent-violet/30 overflow-hidden group hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 flex items-start gap-6">
            <div className="text-6xl">🏆</div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-['Space_Mono'] text-5xl text-yellow-400 font-bold">
                  Top {count}
                </span>
                <span className="text-text-primary text-xl">Students</span>
              </div>
              <p className="text-text-secondary text-lg mb-1">Batch 2026</p>
              <p className="text-text-secondary">Regional College of Management, Bhubaneswar</p>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
