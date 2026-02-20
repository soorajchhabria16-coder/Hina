import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Mail, Linkedin, Phone, ExternalLink, ArrowRight, User, BookOpen, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-primary/10 selection:text-primary">
      <Header />

      <main className="flex-grow">
        {/* --- Improvised Hero Section --- */}
        <section id="about" className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 px-6 sm:px-12 lg:px-24">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10 order-2 lg:order-1 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="w-8 h-px bg-primary/30"></span>
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                      Clinical Psychologist
                    </span>
                  </div>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 font-bold">
                    Holding space for <span className="italic text-primary relative inline-block">
                      healing
                      <svg className="absolute -bottom-2 left-0 w-full h-2 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>, growth, and meaning.
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Dedicated Associate Psychologist, Lecturer, and Research Associate integrating evidence-based therapies, psychological assessment, and academic writing to support mental health across the lifespan.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                  <Link href="#contact" className="px-10 py-4 bg-primary text-white font-medium rounded-full hover:bg-secondary transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                    Get in Touch
                  </Link>
                  <Link href="#research" className="px-10 py-4 border border-gray-200 text-gray-700 font-medium rounded-full hover:border-primary hover:text-primary transition-all group">
                    View Publications <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                {/* Improvised Blob with Glow */}
                <div className="relative w-full max-w-[480px] aspect-square">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
                  <div className="w-full h-full blob-shape overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                    <Image
                      src="/hina-portrait.jpg"
                      alt="Hina Usman"
                      fill
                      className="object-cover scale-105"
                      priority
                    />
                  </div>
                  {/* Floating decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 animate-bounce transition-all duration-1000">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Philosophy --- */}
        <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-800 italic">
              "I work at the intersection of clinical practice, education, and research to foster holistic well-being and educational excellence."
            </h2>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What I Offer</h3>
                <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold">Services & Expertise</h2>
              </div>
              <p className="text-gray-500 max-w-md">
                Providing comprehensive support through evidence-based clinical practice and academic insight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <User className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Individual Therapy</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  One-on-one sessions drawing on DBT, CBT, ACT, and Humanistic approaches to support anxiety and emotional regulation.
                </p>
                <Link href="#contact" className="inline-flex items-center text-primary font-bold group/link">
                  Request Session <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:border-primary/20 hover:shadow-xl transition-all duration-300 shadow-sm shadow-primary/5">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Adolescent Support</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Specialized support for young adults navigating identity, academic pressure, and relational challenges.
                </p>
                <Link href="#contact" className="inline-flex items-center text-primary font-bold group/link">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Psycho-Education</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Workshops and assessments focused on mental health awareness, personality, and clinical conceptualization.
                </p>
                <Link href="#contact" className="inline-flex items-center text-primary font-bold group/link">
                  Enquire <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- Experience & Research --- */}
        <section id="research" className="py-24 px-6 sm:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

              <div className="lg:col-span-2 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Academic Career</h3>
                  <h2 className="font-serif text-4xl text-gray-900 font-bold leading-tight">Teaching & Clinical Roles</h2>
                  <p className="text-gray-600">
                    Grounded in psychological science and compassionate inquiry.
                  </p>
                </div>

                <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary"></div>
                    <h4 className="font-bold text-gray-900 text-lg">Visiting Faculty</h4>
                    <p className="text-gray-500 text-sm">DHA Suffa University • 2025 - Present</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gray-300"></div>
                    <h4 className="font-bold text-gray-900 text-lg">Visiting Faculty</h4>
                    <p className="text-gray-500 text-sm">Ziauddin University • 2024 - Present</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gray-300"></div>
                    <h4 className="font-bold text-gray-900 text-lg">Associate Clinical Psychologist</h4>
                    <p className="text-gray-500 text-sm">Integrated Psychology Clinic • 2024 - 2025</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Selected Publications</h3>

                <div className="space-y-6">
                  {/* Pub 1 */}
                  <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                          Understanding The Impact of Childhood Sexual Abuse and Child Maltreatment on Non-Suicidal Self-Harm
                        </h4>
                        <p className="text-sm text-gray-500 italic">Kurdish Studies, 12(5), 1463–1473, 2024</p>
                      </div>
                      <a href="https://doi.org/10.53555/ks.v12i5.3497" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-300 hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Pub 2 */}
                  <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                          A Comparative Study of the Meaning of Life and Academic Motivation
                        </h4>
                        <p className="text-sm text-gray-500 italic">Migration Letters, 21(S14), 525–544, 2024</p>
                      </div>
                      <a href="https://doi.org/10.59670/ml.v21iS14.11300" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-300 hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-10 md:p-20 overflow-hidden relative shadow-2xl shadow-primary/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              <div className="text-white space-y-10">
                <div className="space-y-6">
                  <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">Let&apos;s talk.</h2>
                  <p className="text-lg text-white/80 leading-relaxed max-w-sm">
                    Ready to start your journey of growth? Reach out for clinical services or academic collaboration.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <p>hinau766@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <p>0335-7462807</p>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <p>linkedin.com/in/hina-usman/</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-inner">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Name</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="E.g. Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                    <input type="email" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                    <textarea rows={4} className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
                  </div>
                  <button type="button" className="w-full py-5 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-primary/20">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-12 px-6 sm:px-12 lg:px-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl font-bold text-gray-900">Hina Usman</p>
            <p className="text-sm text-gray-500 mt-1">Associate Psychologist • Lecturer</p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#research" className="hover:text-primary transition-colors">Research</Link>
          </div>

          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
