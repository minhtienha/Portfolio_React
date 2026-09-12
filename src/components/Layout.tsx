import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white text-zinc-900 transition-colors duration-200 selection:bg-blue-600 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-40"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 mx-auto w-full flex-1 px-4 sm:px-6 md:px-0 flex flex-col overflow-x-clip">
        {children}
      </main>

      <Footer />
    </div>
  );
}
