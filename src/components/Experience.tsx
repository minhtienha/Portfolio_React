import { experiences } from '../lib/data';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-8">
      {/* Header chỉ mục */}
      <div className="flex items-center gap-3 font-mono text-base font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
        <span>02</span>
        <span className="h-[1px] w-4 bg-zinc-500 dark:bg-white-700" />
        <span className="text-blue-600 dark:text-blue-400">Experience</span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Cột trái: Headline cố định */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-2xl font-black tracking-tighter uppercase leading-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-white">
            HANDS-ON
            <br />
            <span className="text-blue-600 dark:text-blue-500">EXPERIENCE.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Experience gained from building real applications, from frontend to backend.
          </p>
        </div>

        {/* Cột phải: Timeline kinh nghiệm */}
        <div className="space-y-12 lg:col-span-7">
          <div className="relative border-l border-zinc-200 pl-6 dark:border-zinc-800 sm:pl-8">
            {experiences.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Nút tròn trên timeline */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-blue-600 dark:border-zinc-950 dark:bg-blue-400" />

                {/* Khoảng thời gian */}
                <span className="font-mono text-base font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                  {item.period}
                </span>

                {/* Vị trí & Tên công ty */}
                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-base font-bold text-zinc-950 dark:text-white">{item.role}</h3>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    @ {item.company}
                  </span>
                </div>

                {/* Địa điểm */}
                <p className="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  {item.location}
                </p>

                {/* Mô tả đầu việc */}
                <ul className="mt-4 space-y-2">
                  {item.description.map((desc, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-base sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="mr-2 text-zinc-400 dark:text-zinc-500">—</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[12px] font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
