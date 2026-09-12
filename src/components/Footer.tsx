import { ArrowUp, MapPin, Sparkles } from 'lucide-react';
import { socialLinks, navLinks } from '../lib/data';
import { handleNavClick } from '../lib/utils';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative z-10 w-full border-t border-zinc-200 bg-zinc-50/50 pt-16 pb-12 transition-colors dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:w-[80%] md:px-0">
        {/* Phần nội dung chính 3 cột */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Cột 1: Thông tin cá nhân & Tình trạng công việc */}
          <div className="space-y-4 md:col-span-5">
            <a
              href="/"
              className="text-base font-bold tracking-tight text-zinc-950 dark:text-white"
            >
              TIEN<span className="text-blue-600 dark:text-blue-400">/DEV</span>
            </a>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Full-Stack Developer building responsive interfaces and scalable backend systems.
            </p>

            {/* Status Badge: Tình trạng công việc */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for Backend Opportunities
            </div>
          </div>

          {/* Cột 2: Quick Links (Điều hướng nhanh) */}
          <div className="md:col-span-3 md:pl-4">
            <p className="font-mono text-xs font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-200">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 font-mono text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                    onClick={(e) => handleNavClick(e, link.href, () => {})}
                  >
                    {link.label.trim()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Liên hệ, Vị trí & Mạng xã hội */}
          <div className="space-y-4 md:col-span-4">
            <p className="font-mono text-xs font-semibold tracking-wider text-zinc-900 uppercase dark:text-zinc-200">
              Connect & Location
            </p>

            {/* Vị trí */}
            <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>Ho Chi Minh City, Vietnam (UTC+7)</span>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs font-semibold uppercase">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.label === 'EMAIL' ? {} : { target: '_blank' })}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-zinc-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  <item.icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Thanh đáy (Bottom Bar) */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 font-mono text-[11px] text-zinc-500 sm:flex-row dark:border-zinc-800 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Tiến Hà.</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              Thanks you for visiting! <Sparkles className="h-3 w-3 text-blue-500" />
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex cursor-pointer items-center gap-2 text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
