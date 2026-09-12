import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  title: string;
}

function ModalContent({
  onClose,
  images,
  initialIndex = 0,
  title,
}: Omit<ImageModalProps, 'isOpen'>) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, images.length]);

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/40 p-4 sm:p-6 backdrop-blur-[2px] dark:bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 p-3 shadow-2xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-200/80 px-3 py-2 text-zinc-600 dark:border-zinc-800/80 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="truncate font-mono text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              {title}
            </span>
            {images.length > 1 && (
              <span className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={currentImage}
              target="_blank"
              rel="noreferrer"
              title="Open full image"
              className="inline-flex items-center gap-1 font-mono text-xs text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              <span>RAW</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-700 transition hover:bg-zinc-200 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Khung ảnh chính */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden py-3">
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 shadow-md backdrop-blur-sm transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 shadow-md backdrop-blur-sm transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <img
            src={currentImage}
            alt={`${title} - view ${currentIndex + 1}`}
            className="h-auto max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-sm"
          />
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex shrink-0 items-center justify-center gap-2 overflow-x-auto border-t border-zinc-200/80 pt-2 dark:border-zinc-800/80">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-12 w-20 overflow-hidden rounded-md border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-blue-500 opacity-100 shadow-sm'
                    : 'border-transparent opacity-50 hover:opacity-90'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ImageModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title,
}: ImageModalProps) {
  if (!isOpen || images.length === 0) return null;

  return createPortal(
    <ModalContent
      key={`${title}-${initialIndex}`}
      onClose={onClose}
      images={images}
      initialIndex={initialIndex}
      title={title}
    />,
    document.body,
  );
}
