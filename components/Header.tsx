import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-serif font-bold text-2xl text-primary">
            Hina Usman
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About</Link>
            <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link href="#research" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Research</Link>
            <Link href="#contact" className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
              Get in Touch
            </Link>
          </div>

          <button className="md:hidden text-gray-600" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
