import { techStack } from '../lib/data';

export default function TechStack() {
  return (
    <section id="skills" className="mx-auto max-w-7xl w-full px-4 py-20 sm:px-6 md:px-8">
      {/* Header chỉ mục */}
      <div className="flex items-center gap-3 font-mono text-base font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
        <span>04</span>
        <span className="h-[1px] w-4 bg-zinc-500 dark:bg-white-700" />
        <span className="text-blue-600 dark:text-blue-400">TECH STACK</span>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-white">
          TECH <span className="text-blue-600 dark:text-blue-500">STACK.</span>
        </h2>
      </div>

      {/* Danh sách từng nhóm công nghệ */}
      <div className="mt-16 space-y-12">
        {techStack.map((section) => (
          <div key={section.title}>
            {/* Header phân loại kèm đường line ngăn cách */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-base font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                {section.title}
              </span>
              <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            {/* Lưới các thẻ công nghệ */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3.5 rounded-xl border border-zinc-200 bg-white p-3 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                >
                  {/* Ô icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50/80 p-2.5 dark:border-zinc-800 dark:bg-zinc-800/60">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Nhãn và tên */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-bold uppercase tracking-tight text-zinc-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 truncate font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
