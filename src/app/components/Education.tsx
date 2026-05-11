export function Education() {
  return (
    <section id="education" className="h-screen w-full flex flex-col items-center justify-center snap-center px-6 section-glass">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="font-['Fira_Code'] text-accent-cyan text-sm mb-12 uppercase tracking-wider">
          06 // EDUCATION
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg-secondary p-6 rounded-xl border-t-4 border-accent-cyan hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-['Space_Mono'] text-xl text-text-primary mb-2">
                  MCA — Master of Computer Applications
                </h3>
                <p className="text-text-secondary mb-1">Regional College of Management</p>
                <p className="text-text-secondary text-sm">2025 – Present · Bhubaneswar</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-success-green/20 text-success-green border border-success-green/30 rounded font-['Fira_Code'] text-xs">
              <span className="w-2 h-2 bg-success-green rounded-full animate-pulse"></span>
              Current
            </div>
          </div>

          <div className="bg-bg-secondary p-6 rounded-xl border-t-4 border-accent-violet hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(123,97,255,0.2)] transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-['Space_Mono'] text-xl text-text-primary mb-2">
                  BCA — Bachelor of Computer Applications
                </h3>
                <p className="text-text-secondary mb-1">Berhampur University</p>
                <p className="text-text-secondary text-sm">2021 – 2024 · Phulbani</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-violet/20 text-accent-violet border border-accent-violet/30 rounded font-['Fira_Code'] text-xs">
              Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
