import { useState } from 'react';
import { projects } from '../lib/data';
import ImageModal from './ImageModal';
import { Maximize2, Layers } from 'lucide-react';

export default function Projects() {
  const [activeModal, setActiveModal] = useState<{
    images: string[];
    title: string;
    startIndex: number;
  } | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-7xl w-full px-4 py-20 sm:px-6 md:px-8">
      <div>
        <div className="flex items-center gap-3 font-mono text-base font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
          <span>05</span>
          <span className="h-[1px] w-4 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-white">
            Selected Works.
          </h2>
        </div>
      </div>

      <div className="mt-16 space-y-20 sm:space-y-28">
        {projects.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              {/* Cột ảnh dự án */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div
                  onClick={() =>
                    setActiveModal({
                      images: item.images,
                      title: item.title,
                      startIndex: 0,
                    })
                  }
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 p-2 shadow-xs transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
                >
                  <div className="aspect-video relative overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-full w-full object-cover object-left-top transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Badge đếm số ảnh góc phải */}
                    {item.images.length > 1 && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 font-mono text-[11px] font-medium text-white backdrop-blur-xs">
                        <Layers className="h-3 w-3" />
                        <span>+{item.images.length} photos</span>
                      </div>
                    )}

                    {/* Overlay Phóng to khi hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900/80 px-3 py-1.5 font-mono text-xs font-medium text-white backdrop-blur-xs">
                        <Maximize2 className="h-3.5 w-3.5" /> Xem chi tiết ({item.images.length})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hàng preview ảnh nhỏ phụ bên dưới card (nếu có từ 2 ảnh trở lên) */}
                {item.images.length > 1 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto">
                    {item.images.map((img, imgIdx) => (
                      <button
                        key={imgIdx}
                        type="button"
                        onClick={() =>
                          setActiveModal({
                            images: item.images,
                            title: item.title,
                            startIndex: imgIdx,
                          })
                        }
                        className="h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-[4px] border-blue-200 opacity-70 transition hover:opacity-100 dark:border-zinc-200"
                      >
                        <img src={img} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Cột thông tin chi tiết */}
              <div
                className={`relative flex flex-col lg:col-span-5 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <span className="font-mono text-5xl font-black tracking-tighter text-blue-600 select-none sm:text-6xl ">
                  {item.id}
                </span>

                <div>
                  <p className="mt-2 font-mono text-[12px] font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                    {item.role} · {item.teamSize}
                  </p>
                  <p className="mt-2 font-mono text-[12px] font-semibold tracking-wide uppercase">
                    {item.rangeDate}
                  </p>
                </div>

                <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-zinc-950 sm:text-2xl dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {item.description}
                </p>

                <p className="mt-5 font-mono text-[12px] font-medium tracking-wide text-zinc-500 dark:text-zinc-400 uppercase">
                  {item.techStack}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5 font-mono text-xs font-semibold uppercase">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 border-b border-zinc-900 pb-0.5 text-zinc-900 hover:text-blue-600 dark:border-white dark:text-white dark:hover:text-blue-400"
                    >
                      GITHUB{' '}
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  )}

                  {item.githubBe && (
                    <a
                      href={item.githubBe}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 border-b border-zinc-900 pb-0.5 text-zinc-900 hover:text-blue-600 dark:border-white dark:text-white dark:hover:text-blue-400"
                    >
                      BACKEND REPO{' '}
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  )}

                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 border-b border-zinc-900 pb-0.5 text-zinc-900 hover:text-blue-600 dark:border-white dark:text-white dark:hover:text-blue-400"
                    >
                      LIVE DEMO{' '}
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ImageModal
        isOpen={Boolean(activeModal)}
        onClose={() => setActiveModal(null)}
        images={activeModal?.images || []}
        initialIndex={activeModal?.startIndex || 0}
        title={activeModal?.title || ''}
      />
    </section>
  );
}
