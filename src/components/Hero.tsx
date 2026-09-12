export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Cột 1: Giới thiệu & Liên kết */}
        <div className="order-1 flex min-w-0 flex-col justify-between self-stretch lg:col-span-6 lg:order-1">
          <div>
            {/* Tiêu đề chính */}
            <h1 className="mt-6 text-xl text-wrap sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 leading-[1.08] dark:text-white">
              Building web applications{' '}
              <span className="text-blue-600 dark:text-blue-500">from interface to backend</span>.
            </h1>

            <p className="mt-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Full-Stack Developer skilled in React for building responsive interfaces, and Node.js,
              NestJS, and TypeScript for scalable backend systems. Experienced working with
              PostgreSQL, MongoDB, and Microservices architecture.
            </p>

            {/* Hàng nút mạng xã hội & CV */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-base font-semibold uppercase">
              <a
                href="/Ha-Minh-Tien-FullStack-Fresher.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 border-b border-zinc-900 pb-0.5 text-zinc-900 hover:text-blue-600 dark:border-white dark:text-white dark:hover:text-blue-400"
              >
                Download CV{' '}
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
              <a
                href="https://github.com/minhtienha"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 pb-0.5 text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                Github{' '}
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
              <a
                href="https://linkedin.com/in/mtienha"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 pb-0.5 text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                LinkedIn{' '}
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
              <a
                href="mailto:minhtien250704@gmail.com"
                className="group inline-flex items-center gap-1 pb-0.5 text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                Email{' '}
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Cột 2: Ảnh chân dung Polaroid & Tên */}
        <div className="order-2 flex min-w-0 flex-col items-center lg:col-span-6 lg:order-2">
          <div className="w-full max-w-[257px] border border-zinc-200 bg-white p-2 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
            <div className="aspect-3/4 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src="/my_picture_1.jpg"
                alt="Portrait"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-150"
              />
            </div>
          </div>

          <h2 className="mt-5 text-2xl font-black uppercase tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-white">
            Tiến
            <span className="text-blue-600 dark:text-blue-500"> Hà.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
