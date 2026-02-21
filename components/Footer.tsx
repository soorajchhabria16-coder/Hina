import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0f4a47] text-[#e6f2f1] py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
        {/* Brand & Tagline */}
        <div className="space-y-4">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-white inline-block">
            Hina Usman
          </Link>
          <p className="text-sm text-[#e6f2f1]/80 max-w-xs leading-relaxed">
            Fostering holistic well-being through compassionate clinical practice, education, and rigorous research.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase">Explore</h4>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="#about" className="text-[#e6f2f1]/70 hover:text-white transition-colors w-fit">About</Link>
            <Link href="#services" className="text-[#e6f2f1]/70 hover:text-white transition-colors w-fit">Services</Link>
            <Link href="#research" className="text-[#e6f2f1]/70 hover:text-white transition-colors w-fit">Research</Link>
            <Link href="#contact" className="text-[#e6f2f1]/70 hover:text-white transition-colors w-fit">Contact</Link>
          </nav>
        </div>

        {/* Socials & Contact */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-widest text-white uppercase">Connect</h4>
          <div className="flex items-center gap-4">
            <a href="mailto:hinau766@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/hina-usman/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-[#e6f2f1]/60">hinau766@gmail.com</p>

        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#e6f2f1]/60">
        <p>© {new Date().getFullYear()} Hina Usman. All rights reserved.</p>
        <p className="text-white/20">Designed with purpose.</p>
      </div>
    </footer>
  );
}
