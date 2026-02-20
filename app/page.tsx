import Image from 'next/image';
import Link from 'next/link';
import { Smile, Users, Lightbulb, ArrowRight, ExternalLink, Mail, Linkedin } from 'lucide-react';
import { Header } from '@/components/Header';
import { HeroIllustration } from '@/components/HeroIllustration';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-8 md:px-16 lg:px-24 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-[#135c58]/5 px-4 py-1.5 text-xs font-bold text-[#135c58] tracking-tight">
              Associate Psychologist & Lecturer
            </div>
            <h1 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[64px] leading-[1.08] text-[#1a1a1a] tracking-tight">
              Holding space for{' '}
              <span className="italic text-[#135c58] relative inline-block group">
                healing
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></span>
              </span>,{' '}
              <span className="italic text-[#135c58] relative inline-block group">
                growth
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></span>
              </span>{' '}and{' '}
              <span className="italic text-[#135c58] relative inline-block group">
                meaning
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></span>
              </span>.
            </h1>
            <p className="text-base md:text-[17px] text-gray-500 max-w-sm leading-relaxed">
              Dedicated Associate Psychologist, Lecturer, and Research Associate integrating evidence-based therapies, psychological assessment, and academic writing to support mental health across the lifespan.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#135c58] px-8 py-3.5 text-sm font-semibold text-white hover:shadow-lg transition-all">
                Get in Touch
              </Link>
              <Link href="#research" className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-[#1a1a1a] hover:bg-gray-50 transition-all">
                View Publications
              </Link>
            </div>
          </div>
          <div className="relative">
            <HeroIllustration />
          </div>
        </section>

        {/* Mission/Quote Section */}
        <section id="about" className="px-8 md:px-16 lg:px-24 py-32 bg-white text-center flex flex-col items-center justify-center">
          <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[52px] max-w-4xl leading-[1.2] text-[#1a1a1a]">
            I work at the intersection of clinical practice,{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10">education</span>
              <span className="absolute bottom-1 left-0 w-full h-[14px] bg-[#ffe4e6] -z-10 rounded-sm"></span>
            </span>, and{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10">research</span>
              <span className="absolute bottom-1 left-0 w-full h-[14px] bg-[#ffe4e6] -z-10 rounded-sm"></span>
            </span>{' '}
            to foster holistic well-being and educational excellence.
          </h2>
          <div className="w-[1px] h-24 bg-gray-100 mt-20"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-8 md:px-16 lg:px-24 py-32 bg-[#fcfcfc]">
          <div className="text-center mb-20 space-y-4">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#135c58] uppercase">What I Offer</h3>
            <h2 className="font-serif text-[42px] md:text-[52px] text-[#1a1a1a]">Services & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-gray-50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#f7fbfb] rounded-bl-[100px] -z-10 transition-all duration-700 group-hover:bg-[#e6f2f1]"></div>
              <div className="w-14 h-14 rounded-full bg-[#135c58]/5 flex items-center justify-center text-[#135c58] mb-8">
                <Smile className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl mb-4 text-[#1a1a1a]">Individual Therapy</h4>
              <p className="text-gray-500 mb-10 leading-relaxed text-[15px]">
                One-on-one sessions drawing on DBT, CBT, ACT, humanistic and gestalt approaches to support anxiety, emotional regulation, and personal growth.
              </p>
              <Link href="#contact" className="inline-flex items-center text-sm font-semibold text-[#135c58] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-gray-50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#fffbfc] rounded-bl-[100px] -z-10 transition-all duration-700 group-hover:bg-[#ffe4e6]/50"></div>
              <div className="w-14 h-14 rounded-full bg-[#be185d]/5 flex items-center justify-center text-[#be185d] mb-8">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl mb-4 text-[#1a1a1a]">Adolescent & Young Adult Support</h4>
              <p className="text-gray-500 mb-10 leading-relaxed text-[15px]">
                Specialized support for adolescents and young adults navigating identity, academic pressure, self-harm, and relational challenges.
              </p>
              <Link href="#contact" className="inline-flex items-center text-sm font-semibold text-[#be185d] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-gray-50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#f7fbfb] rounded-bl-[100px] -z-10 transition-all duration-700 group-hover:bg-[#e6f2f1]"></div>
              <div className="w-14 h-14 rounded-full bg-[#135c58]/5 flex items-center justify-center text-[#135c58] mb-8">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl mb-4 text-[#1a1a1a]">Psycho-Education & Assessment</h4>
              <p className="text-gray-500 mb-10 leading-relaxed text-[15px]">
                Workshops and clinical assessments focused on psychological well-being, personality, case conceptualization, and mental health awareness.
              </p>
              <Link href="#contact" className="inline-flex items-center text-sm font-semibold text-[#135c58] group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Experience & Publications Section */}
        <section id="research" className="px-8 md:px-16 lg:px-24 py-32 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Left Col: Academic Career */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#be185d] uppercase">Academic Career</h3>
                <h2 className="font-serif text-[42px] text-[#1a1a1a]">Teaching & Clinical Roles</h2>
                <p className="text-gray-500 leading-relaxed text-[15px] max-w-sm">
                  As a lecturer and clinician, I engage students and clients in critical, compassionate inquiry grounded in psychological science.
                </p>
              </div>

              <div className="relative pl-8 space-y-12 mt-12">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-100"></div>
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-[#135c58] border-[3px] border-white shadow-sm transition-transform hover:scale-125 duration-300"></div>
                  <h4 className="text-[17px] font-bold text-[#1a1a1a]">Visiting Faculty</h4>
                  <p className="text-sm text-gray-500 mt-1">DHA Suffa University</p>
                  <p className="text-[12px] font-bold text-[#135c58]/40 uppercase tracking-widest mt-2 px-2 py-0.5 bg-[#135c58]/5 inline-block rounded-md">Mar 2025 – Present</p>
                </div>
                {/* Timeline Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-[#135c58] border-[3px] border-white shadow-sm transition-transform hover:scale-125 duration-300"></div>
                  <h4 className="text-[17px] font-bold text-[#1a1a1a]">Visiting Faculty</h4>
                  <p className="text-sm text-gray-500 mt-1">Ziauddin University</p>
                  <p className="text-[12px] font-bold text-[#135c58]/40 uppercase tracking-widest mt-2 px-2 py-0.5 bg-[#135c58]/5 inline-block rounded-md">Feb 2024 – Present</p>
                </div>
                {/* Timeline Item 3 */}
                <div className="relative">
                  <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-gray-300 border-[3px] border-white shadow-sm"></div>
                  <h4 className="text-[17px] font-bold text-[#1a1a1a]">Associate Clinical Psychologist (Part-time)</h4>
                  <p className="text-sm text-gray-500 mt-1">Integrated Psychology Clinic</p>
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mt-2 px-2 py-0.5 bg-gray-50 inline-block rounded-md">Jun 2024 – Jan 2025</p>
                </div>
                {/* Timeline Item 4 */}
                <div className="relative">
                  <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-gray-200 border-[3px] border-white shadow-sm"></div>
                  <h4 className="text-[17px] font-bold text-[#1a1a1a]">Associate Psychologist</h4>
                  <p className="text-sm text-gray-500 mt-1">Umeed-e-Nau</p>
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mt-2 px-2 py-0.5 bg-gray-50 inline-block rounded-md">Sept 2022 – Dec 2024</p>
                </div>
              </div>
            </div>

            {/* Right Col: Publications */}
            <div className="lg:col-span-7 space-y-10">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#135c58] uppercase">Selected Publications</h3>

              <div className="space-y-8">
                {/* Pub 1 */}
                <a href="https://doi.org/10.53555/ks.v12i5.3497" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-gray-100/50 rounded-[40px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(19,92,88,0.06)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#135c58] rounded-l-full"></div>
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-4">
                      <h4 className="font-serif text-[22px] font-bold text-[#1a1a1a] leading-tight group-hover:text-[#135c58] transition-colors">
                        Understanding The Impact of Childhood Sexual Abuse and Child Maltreatment on Non-Suicidal Self-Harm: The Mediating Role of Self-Blame in Young Adults of Pakistan
                      </h4>
                      <p className="text-[13px] font-medium text-gray-400">Usman, H. (2024) · Kurdish Studies, 12(5), 1463–1473</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded-full group-hover:bg-[#135c58]/5 group-hover:text-[#135c58] transition-colors">Childhood Sexual Abuse</span>
                        <span className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded-full group-hover:bg-[#135c58]/5 group-hover:text-[#135c58] transition-colors">Self-Harm</span>
                        <span className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded-full group-hover:bg-[#135c58]/5 group-hover:text-[#135c58] transition-colors">Self-Blame</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-[#135c58] group-hover:border-[#135c58]/20 transition-all duration-300">
                      <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    </div>
                  </div>
                </a>

                {/* Pub 2 */}
                <a href="https://doi.org/10.59670/ml.v21iS14.11300" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-gray-100/50 rounded-[40px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(190,24,93,0.06)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#be185d] rounded-l-full"></div>
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-4">
                      <h4 className="font-serif text-[22px] font-bold text-[#1a1a1a] leading-tight group-hover:text-[#be185d] transition-colors">
                        A Comparative Study of the Meaning of Life, Academic Motivation, Learning Styles, Study Habits, and Academic Achievement Between University and College Students in Different Educational Institutions
                      </h4>
                      <p className="text-[13px] font-medium text-gray-400">Usman, H. (2024) · Migration Letters, 21(S14), 525–544</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded-full group-hover:bg-[#be185d]/5 group-hover:text-[#be185d] transition-colors">Meaning of Life</span>
                        <span className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded-full group-hover:bg-[#be185d]/5 group-hover:text-[#be185d] transition-colors">Academic Motivation</span>
                        <span className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded-full group-hover:bg-[#be185d]/5 group-hover:text-[#be185d] transition-colors">Learning Styles</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-[#be185d] group-hover:border-[#be185d]/20 transition-all duration-300">
                      <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-[#135c58] text-white px-8 md:px-16 lg:px-24 py-32 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div className="space-y-10">
              <h2 className="font-serif text-[42px] md:text-[52px] lg:text-[62px] leading-[1.1]">Let&apos;s Connect</h2>
              <p className="text-[#e6f2f1]/80 text-[17px] max-w-sm leading-relaxed">
                Whether you&apos;re looking for therapy, academic collaboration, or just want to say hello, I&apos;d love to hear from you.
              </p>

              <div className="space-y-6 pt-10">
                <a href="tel:03357462807" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#1a6e69] group-hover:border-white/20 transition-all duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-1">Call me at</p>
                    <span className="text-[17px] font-medium text-[#e6f2f1] group-hover:text-white transition-colors">0335-7462807</span>
                  </div>
                </a>
                <a href="mailto:hinau766@gmail.com" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#1a6e69] group-hover:border-white/20 transition-all duration-300 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-1">Email me at</p>
                    <span className="text-[17px] font-medium text-[#e6f2f1] group-hover:text-white transition-colors">hinau766@gmail.com</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/hina-usman/" className="flex items-center gap-5 group" target="_blank" rel="noopener noreferrer">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#1a6e69] group-hover:border-white/20 transition-all duration-300 shadow-sm">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-1">Connect on LinkedIn</p>
                    <span className="text-[17px] font-medium text-[#e6f2f1] group-hover:text-white transition-colors">linkedin.com/in/hina-usman/</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 md:p-12 text-[#1a1a1a] shadow-[0_30px_60px_rgba(0,0,0,0.15)] max-w-lg lg:ml-auto w-full">
              <form className="space-y-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#135c58]/10 focus:border-[#135c58]/30 transition-all placeholder:text-gray-300"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#135c58]/10 focus:border-[#135c58]/30 transition-all placeholder:text-gray-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#135c58]/10 focus:border-[#135c58]/30 transition-all placeholder:text-gray-300 resize-none font-sans"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-[#0f4a47] text-white font-bold text-sm uppercase tracking-[0.15em] hover:bg-[#135c58] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f4a47] text-[#e6f2f1]/40 py-10 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] font-medium border-t border-white/5">
        <p>© {new Date().getFullYear()} Hina Usman. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <p className="text-white/20">Designed with purpose.</p>
        </div>
      </footer>
    </div>
  );
}
