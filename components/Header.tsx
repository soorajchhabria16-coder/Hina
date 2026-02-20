import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#f8fafb]/80 dark:bg-[#1a202c]/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif font-bold text-2xl text-[#0f5e63] tracking-tight">
              Hina Usman
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-[#0f5e63] dark:hover:text-[#0f5e63] transition-colors text-sm font-medium uppercase tracking-wider">About</Link>
            <Link href="#services" className="text-gray-600 dark:text-gray-300 hover:text-[#0f5e63] dark:hover:text-[#0f5e63] transition-colors text-sm font-medium uppercase tracking-wider">Services</Link>
            <Link href="#research" className="text-gray-600 dark:text-gray-300 hover:text-[#0f5e63] dark:hover:text-[#0f5e63] transition-colors text-sm font-medium uppercase tracking-wider">Research</Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[#0f5e63] dark:hover:text-[#0f5e63] transition-colors text-sm font-medium uppercase tracking-wider">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 dark:text-gray-300 hover:text-[#0f5e63] focus:outline-none transition-colors" aria-label="Open Main Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
