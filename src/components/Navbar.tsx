import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navLinks } from '../lib/data';
import { useTheme } from '../context/theme-context';
import { handleNavClick } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-[60px] w-full md:w-[80%] px-4 sm:px-6 max-w-7xl md:px-0 items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-base md:text-xl font-bold tracking-tight text-zinc-950 dark:text-white"
        >
          TIEN<span className="text-blue-600 dark:text-blue-400">/DEV</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-10 text-xs md:text-base font-medium text-zinc-700 dark:text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                onClick={(e) => handleNavClick(e, link.href, setIsOpen)}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:bg-blue-400" />
              </a>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          {/* Desktop Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-zinc-300 text-zinc-700 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-blue-400"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-zinc-300 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, setIsOpen)}
                className="rounded-md px-2 py-1.5 text-base font-medium text-zinc-700 hover:bg-zinc-100 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
