import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Mail, Linkedin, Phone, ExternalLink, ArrowRight, User, BookOpen, GraduationCap, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-primary/10 selection:text-primary">
      <Header />

      <main className="flex-grow">
        {/* --- Improvised Hero Section --- */}
        <section id="about" className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 px-6 sm:px-12 lg:px-24">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10 order-2 lg:order-1 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] rounded-full border border-primary/10">
                      Licensed Practitioner
                    </span>
                    <span className="w-12 h-px bg-primary/20 hidden sm:block"></span>
                  </div>

                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 font-bold">
                    Holding space for <span className="italic text-primary relative inline-block">
                      healing
                      <svg className="absolute -bottom-1 left-0 w-full h-3 text-primary/10 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 25 2, 50 5 T 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                      </svg>
                    </span>, growth, and meaning.
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  Dedicated Associate Psychologist, Lecturer, and Research Associate integrating evidence-based therapies and academic rigor to support mental well-being.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                  <Link href="#contact" className="group px-10 py-4 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                  <Link href="#research" className="px-10 py-4 border border-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-200 transition-all">
                    View Publications
                  </Link>
                </div>

                {/* Micro-stats */}
                <div className="flex items-center justify-center lg:justify-start gap-12 pt-8 border-t border-gray-100 mt-12 w-fit mx-auto lg:mx-0">
                  <div>
                    <p className="text-2xl font-serif font-bold text-gray-900">3+</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Awards Won</p>
                  </div>
                  <div className="w-px h-8 bg-gray-100"></div>
                  <div>
                    <p className="text-2xl font-serif font-bold text-gray-900">8+</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Years Exp</p>
                  </div>
                  <div className="w-px h-8 bg-gray-100"></div>
                  <div>
                    <p className="text-2xl font-serif font-bold text-gray-900">2</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Scopus Pubs</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                {/* Improvised Blob with Floating Elements */}
                <div className="relative w-full max-w-[520px] aspect-square animate-float">
                  <div className="absolute inset-[-10%] bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
                  <div className="w-full h-full blob-shape overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] relative z-10 border-[12px] border-white/80 backdrop-blur-sm">
                    <Image
                      src="/hina-portrait.jpg"
                      alt="Hina Usman"
                      fill
                      className="object-cover scale-110"
                      priority
                    />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 border border-gray-50 flex items-center gap-4 animate-bounce hover:scale-105 transition-transform cursor-pointer" style={{ animationDuration: '4s' }}>
                    <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Expertise</p>
                      <p className="text-sm font-bold text-gray-900 leading-none">CBT & DBT</p>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl z-20 border border-gray-50 flex items-center gap-4 animate-bounce hover:scale-105 transition-transform cursor-pointer" style={{ animationDuration: '5s' }}>
                    <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Recognition</p>
                      <p className="text-sm font-bold text-gray-900 leading-none">Research Lead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Philosophy --- */}
        <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-800 italic">
              &quot;I work at the intersection of clinical practice, education, and research to foster holistic well-being and educational excellence.&quot;
            </h2>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  Professional Scope
                </div>
                <h2 className="font-serif text-4xl lg:text-6xl text-gray-900 font-bold">Clinical & Academic Focus</h2>
              </div>
              <p className="text-gray-500 max-w-md text-lg font-light leading-relaxed text-center md:text-left">
                Bridging empirical research with clinical excellence through specialized evidence-based therapies and psychological sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Service 1 */}
              <div className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:border-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Individual Therapy</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-light italic">
                  One-on-one sessions drawing on DBT, CBT, ACT, and Humanistic approaches to support anxiety and emotional regulation.
                </p>
                <Link href="#contact" className="inline-flex items-center gap-2 text-primary font-bold group/link">
                  <span className="border-b-2 border-primary/20 group-hover/link:border-primary transition-all">Request Session</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group p-10 bg-primary text-white rounded-[2.5rem] shadow-2xl shadow-primary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Adolescent Support</h3>
                <p className="text-white/80 leading-relaxed mb-8 font-light italic">
                  Specialized support for young adults navigating identity, academic pressure, and relational challenges during pivotal growth phases.
                </p>
                <Link href="#contact" className="inline-flex items-center gap-2 text-white font-bold group/link">
                  <span className="border-b-2 border-white/20 group-hover/link:border-white transition-all">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:border-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-rotate-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">Psycho-Education</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-light italic">
                  Workshops and assessments focused on mental health awareness, personality, and clinical conceptualization for students and faculty.
                </p>
                <Link href="#contact" className="inline-flex items-center gap-2 text-primary font-bold group/link">
                  <span className="border-b-2 border-primary/20 group-hover/link:border-primary transition-all">Enquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- Experience & Research --- */}
        <section id="research" className="py-32 px-6 sm:px-12 lg:px-24 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">

              <div className="lg:col-span-2 space-y-12">
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Professional Journey</p>
                  <h2 className="font-serif text-4xl md:text-5xl text-gray-900 font-bold leading-tight">Work Experience</h2>
                  <p className="text-gray-500 text-lg font-light leading-relaxed">
                    A timeline of clinical practice, teaching, and administrative roles.
                  </p>
                </div>

                <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-transparent">
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-primary group-hover:bg-primary transition-all duration-300"></div>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Sept 2025 - Present</p>
                    <h4 className="font-bold text-gray-900 text-xl">Senior Lecturer</h4>
                    <p className="text-gray-500 text-sm italic font-light">Institute of Business Management (IoBM)</p>
                  </div>
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary transition-all duration-300"></div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">March 2025 - July 2025</p>
                    <h4 className="font-bold text-gray-900 text-xl">Visiting Faculty</h4>
                    <p className="text-gray-500 text-sm italic font-light">DHA Suffa University</p>
                  </div>
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary transition-all duration-300"></div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Feb 2024 - Aug 2025</p>
                    <h4 className="font-bold text-gray-900 text-xl">Visiting Faculty</h4>
                    <p className="text-gray-500 text-sm italic font-light">Ziauddin University</p>
                  </div>
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary transition-all duration-300"></div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">June 2024 - Present</p>
                    <h4 className="font-bold text-gray-900 text-xl">Consultant Clinical Psychologist</h4>
                    <p className="text-gray-500 text-sm italic font-light">Hope and Cope (Part-time)</p>
                  </div>
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary transition-all duration-300"></div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">2022 - 2024</p>
                    <h4 className="font-bold text-gray-900 text-xl">Associate Psychologist</h4>
                    <p className="text-gray-500 text-sm italic font-light">Umeed-e-Nau</p>
                  </div>
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary transition-all duration-300"></div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">April 2022 - Feb 2024</p>
                    <h4 className="font-bold text-gray-900 text-xl">HR Manager</h4>
                    <p className="text-gray-500 text-sm italic font-light">Stratigia</p>
                  </div>
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary transition-all duration-300"></div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">2017 - 2022</p>
                    <h4 className="font-bold text-gray-900 text-xl">Clinical Internships</h4>
                    <div className="text-gray-500 text-sm italic font-light space-y-2 mt-2">
                      <p>• Wellness & Educational Intern — Aaina Clinic</p>
                      <p>• Behavioral Therapist — Dar ul Sukun</p>
                      <p>• Psychology Intern — Umeed-e-Nau</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-16">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Scholarly Publications</h3>
                    <div className="h-px flex-grow mx-6 bg-gray-100"></div>
                  </div>

                  <div className="space-y-6">
                    {/* Pub 1 */}
                    <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex justify-between items-start gap-6">
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 bg-gray-50 text-[9px] font-bold text-gray-400 uppercase tracking-widest rounded border border-gray-100">Kurdish Studies</span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                            Understanding The Impact of Childhood Sexual Abuse and Child Maltreatment on Non-Suicidal Self-Harm
                          </h4>
                          <p className="text-sm text-gray-500 italic font-medium">Vol. 12(5), 1463–1473 | 2024</p>
                        </div>
                        <a href="https://doi.org/10.53555/ks.v12i5.3497" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 text-gray-300 hover:bg-primary hover:text-white rounded-xl transition-all duration-300" aria-label="View Publication on Kurdish Studies Website">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Pub 2 */}
                    <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex justify-between items-start gap-6">
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 bg-gray-50 text-[9px] font-bold text-gray-400 uppercase tracking-widest rounded border border-gray-100">Migration Letters</span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                            A Comparative Study of the Meaning of Life, Academic Motivation, and Achievement
                          </h4>
                          <p className="text-sm text-gray-500 italic font-medium">Vol. 21(S14), 525–544 | 2024</p>
                        </div>
                        <a href="https://doi.org/10.59670/ml.v21iS14.11300" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 text-gray-300 hover:bg-primary hover:text-white rounded-xl transition-all duration-300" aria-label="View Publication on Migration Letters Website">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Awards & Education</h3>
                    <div className="h-px flex-grow mx-6 bg-gray-100"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest">Conferences</h5>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">ICE 2025</span> — Best Presenter Award</p>
                        </div>
                        <div className="flex gap-3">
                          <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">Psychiatry Conf. 2021</span> — 1st Position (Best Poster)</p>
                        </div>
                        <div className="flex gap-3">
                          <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">Psychology Research Conf. 2021</span> — Research Presenter</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest">Education</h5>
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">MPhil in Psychology</span><br />IPP, BUKC (2022-2024)</p>
                        <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">Exchange Program</span><br />Universitas Airlangga, Indonesia (2023)</p>
                        <p className="text-sm text-gray-600 font-light"><span className="font-bold text-gray-900">Bachelor in Psychology</span><br />IPP, BUKC (2017-2021)</p>
                      </div>

                      <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest pt-4">Languages</h5>
                      <div className="flex flex-wrap gap-2">
                        {['English', 'Urdu', 'Indonesian (A1)'].map((lang) => (
                          <span key={lang} className="px-2 py-1 bg-white border border-gray-100 rounded text-[10px] font-medium text-gray-500">{lang}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-32 px-6 sm:px-12 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto bg-primary rounded-[4rem] p-10 md:p-24 overflow-hidden relative shadow-[0_40px_80px_-20px_rgba(19,92,88,0.4)]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              <div className="text-white space-y-12">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/5 text-xs font-bold uppercase tracking-[0.2em]">Contact Inquiry</div>
                  <h2 className="font-serif text-6xl md:text-7xl font-bold leading-tight tracking-tight">Let&apos;s talk.</h2>
                  <p className="text-xl text-white/70 font-light leading-relaxed max-w-sm">
                    Ready to start your journey of growth? Reach out for clinical services or academic collaboration.
                  </p>
                </div>

                <div className="space-y-8 pt-6">
                  <a href="mailto:hinau766@gmail.com" className="flex items-center gap-6 group w-fit">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500 group-hover:scale-110">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-lg font-medium group-hover:translate-x-1 transition-transform">hinau766@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-6 group w-fit">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-white/5">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">WhatsApp</p>
                      <p className="text-lg font-medium">0335-7462807</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group w-fit">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-white/5 shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-sm font-medium leading-relaxed max-w-[200px]">Dulara Pride Apartments, Numaish, Soldier Bazaar, Karachi</p>
                    </div>
                  </div>
                  <a href="https://linkedin.com/in/hina-usman/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group w-fit">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">LinkedIn</p>
                      <p className="text-lg font-medium group-hover:translate-x-1 transition-transform">hina-usman</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-8 md:p-14 border border-white/10 shadow-2xl">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Full Name</label>
                      <input type="text" className="w-full bg-white/10 border-none rounded-2xl p-5 text-white placeholder-white/20 focus:ring-2 focus:ring-white/20 outline-none transition-all" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Email Address</label>
                      <input type="email" className="w-full bg-white/10 border-none rounded-2xl p-5 text-white placeholder-white/20 focus:ring-2 focus:ring-white/20 outline-none transition-all" placeholder="jane@example.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Subject</label>
                    <select id="subject" name="subject" aria-label="Select inquiry subject" className="w-full bg-white/10 border-none rounded-2xl p-5 text-white/20 focus:ring-2 focus:ring-white/20 outline-none transition-all appearance-none cursor-pointer">
                      <option className="bg-primary text-white">Clinical Inquiry</option>
                      <option className="bg-primary text-white">Academic Collaboration</option>
                      <option className="bg-primary text-white">Research Opportunity</option>
                      <option className="bg-primary text-white">Other</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Your Message</label>
                    <textarea rows={4} className="w-full bg-white/10 border-none rounded-2xl p-5 text-white placeholder-white/20 focus:ring-2 focus:ring-white/20 outline-none transition-all resize-none font-light" placeholder="Describe how I can support you..."></textarea>
                  </div>
                  <button type="button" className="w-full py-6 bg-white text-primary font-bold rounded-2xl hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-2xl shadow-black/20 text-lg uppercase tracking-widest">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl font-bold text-gray-900 mb-2">Hina Usman</p>
            <p className="text-sm text-gray-400 font-medium uppercase tracking-[0.2em]">Empowering through psychology.</p>
          </div>

          <div className="flex justify-center gap-12 text-sm font-bold uppercase tracking-widest text-gray-400">
            <Link href="#about" className="hover:text-primary transition-colors hover:translate-y-[-2px]">About</Link>
            <Link href="#services" className="hover:text-primary transition-colors hover:translate-y-[-2px]">Services</Link>
            <Link href="#research" className="hover:text-primary transition-colors hover:translate-y-[-2px]">Research</Link>
          </div>

          <div className="text-center md:text-right space-y-4">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
              © {new Date().getFullYear()} BRIDGING CLINICAL & ACADEMIC EXCELLENCE
            </p>
            <div className="flex justify-center md:justify-end gap-4">
              <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 hover:border-primary hover:text-primary transition-all cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 hover:border-primary hover:text-primary transition-all cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
