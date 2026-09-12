import { domains, education } from '../lib/data';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-8">
      {/* Header chỉ mục */}
      <div className="flex items-center gap-3 font-mono text-xs font-semibold tracking-wider text-zinc-400">
        <span>01 </span>
        <span className="h-[1px] w-2 bg-zinc-300 dark:bg-zinc-700" />
        <span className="text-blue-400">A little about me</span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Cột trái: Big Typography */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-black tracking-tighter leading-[0.95] text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
            Curious by nature,{' '}
            <span className="text-blue-600 dark:text-blue-500">practical by design.</span>
          </h2>
        </div>

        {/* Cột phải: Bio + Education + Strengths */}
        <div className="space-y-8 lg:col-span-7">
          <div className="space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base dark:text-zinc-300">
            <p>
              Hi, I'm Ha Minh Tien, a Full-Stack Developer with hands-on experience across both
              frontend and backend.
            </p>
            <p>
              I build responsive interfaces with <strong>React</strong>, and scalable backend
              systems with <strong>Node.js, NestJS, and TypeScript</strong> under a Microservices
              architecture.
            </p>
            <p>
              I'm passionate about designing clean, maintainable systems and delivering reliable
              end-to-end products, and I'm looking to grow as a Full-Stack Developer, contributing
              to teams building impactful software.
            </p>
          </div>

          {/* Học vấn */}
          <div className="rounded-xl border border-zinc-200 bg-gradient-to-br from-blue-50/50 via-zinc-50/50 to-transparent p-5 dark:border-zinc-800 dark:from-blue-950/20 dark:via-zinc-900/40 dark:to-transparent">
            <span className="inline-block rounded-full bg-blue-100 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-blue-700 uppercase dark:bg-blue-500/10 dark:text-blue-400">
              {education.period}
            </span>
            <h1 className="mt-3 text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white">
              {education.school}
            </h1>
            <h3 className="mt-1 text-lg font-bold text-zinc-700 dark:text-zinc-300">
              {education.degree}
            </h3>
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
              {education.major}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/30 dark:bg-zinc-900 dark:text-blue-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 3 Blocks chuyên môn */}
          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {domains.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all hover:border-blue-500/50 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-zinc-900"
              >
                <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                  {item.number}
                </span>
                <h3 className="mt-2 font-mono text-sm font-bold uppercase tracking-tight text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
