import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="about" className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <span className="inline-block py-1 px-3 rounded-full bg-accent-light dark:bg-accent-dark text-primary font-medium text-sm tracking-wide">
                  Associate Psychologist & Lecturer
                </span>
                <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-gray-900 dark:text-white">
                  Holding space for <span className="text-primary italic">healing</span>, <span className="text-primary italic">growth</span>, and <span className="text-primary italic">meaning</span>.
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                  Dedicated Associate Psychologist, Lecturer, and Research Associate integrating evidence-based therapies, psychological assessment, and academic writing to support mental health across the lifespan.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="#contact" className="px-8 py-4 bg-primary hover:bg-opacity-90 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get in Touch
                  </Link>
                  <Link href="#research" className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-primary hover:text-primary dark:hover:text-primary rounded-full font-medium transition-all">
                    View Publications
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary opacity-20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary opacity-20 rounded-full blur-2xl"></div>
                  <div className="w-full h-full blob-shape overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700 relative z-10">
                    <img
                      src="/hina-portrait.jpg"
                      alt="Hina Usman"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission/Quote Section */}
        <section className="py-20 bg-surface-light dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-snug text-gray-800 dark:text-gray-100">
              I work at the intersection of <span className="highlight">clinical practice</span>, <span className="highlight">education</span>, and <span className="highlight">research</span> to foster holistic well-being and educational excellence.
            </h2>
            <div className="mt-12 flex justify-center">
              <div className="h-16 w-px bg-primary/30"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="font-sans font-bold text-primary uppercase tracking-widest text-sm mb-3">What I Offer</h3>
              <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white">Services & Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Card 1 */}
              <div className="group relative bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-accent-light dark:bg-accent-dark rounded-xl flex items-center justify-center mb-6 text-primary">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">Individual Therapy</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    One-on-one sessions drawing on DBT, CBT, ACT, humanistic and gestalt approaches to support anxiety, emotional regulation, and personal growth.
                  </p>
                  <Link href="#contact" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center mb-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-secondary transition-colors">Adolescent & Young Adult Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Specialized support for adolescents and young adults navigating identity, academic pressure, self-harm, and relational challenges.
                  </p>
                  <Link href="#contact" className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-accent-light dark:bg-accent-dark rounded-xl flex items-center justify-center mb-6 text-primary">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">Psycho-Education & Assessment</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Workshops and clinical assessments focused on psychological well-being, personality, case conceptualization, and mental health awareness.
                  </p>
                  <Link href="#contact" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Experience & Publications Section */}
        <section id="research" className="py-24 bg-surface-light dark:bg-surface-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Left Col: Academic Career */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h3 className="font-sans font-bold text-secondary uppercase tracking-widest text-sm mb-3">Academic Career</h3>
                  <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-6">Teaching & Clinical Roles</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    As a lecturer and clinician, I engage students and clients in critical, compassionate inquiry grounded in psychological science.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Timeline Item 1 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Visiting Faculty</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">DHA Suffa University</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mar 2025 – Present</p>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Visiting Faculty</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Ziauddin University</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Feb 2024 – Present</p>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Associate Clinical Psychologist (Part-time)</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Integrated Psychology Clinic</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Jun 2024 – Jan 2025</p>
                    </div>
                  </div>

                  {/* Timeline Item 4 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Associate Psychologist</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Umeed-e-Nau</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Sept 2022 – Dec 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Col: Publications */}
              <div className="lg:col-span-8">
                <h3 className="font-sans font-bold text-primary uppercase tracking-widest text-sm mb-6">Selected Publications</h3>
                <div className="grid gap-6">

                  {/* Pub 1 */}
                  <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                          Understanding The Impact of Childhood Sexual Abuse and Child Maltreatment on Non-Suicidal Self-Harm: The Mediating Role of Self-Blame in Young Adults of Pakistan
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          <span className="italic">Kurdish Studies</span>, 12(5), 1463–1473, 2024.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 rounded">Childhood Sexual Abuse</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 rounded">Self-Harm</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 rounded">Self-Blame</span>
                        </div>
                      </div>
                      <a href="https://doi.org/10.53555/ks.v12i5.3497" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-primary hover:text-secondary" aria-label="View DOI link for Childhood Sexual Abuse publication">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Pub 2 */}
                  <div className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                          A Comparative Study of the Meaning of Life, Academic Motivation, Learning Styles, Study Habits, and Academic Achievement Between University and College Students in Different Educational Institutions
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          <span className="italic">Migration Letters</span>, 21(S14), 525–544, 2024.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 rounded">Meaning of Life</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 rounded">Academic Motivation</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 rounded">Learning Styles</span>
                        </div>
                      </div>
                      <a href="https://doi.org/10.59670/ml.v21iS14.11300" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-secondary hover:text-primary" aria-label="View DOI link for Meaning of Life publication">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Col: Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-sans font-bold text-accent-light uppercase tracking-widest text-sm mb-3 text-opacity-80">Get in Touch</h3>
                <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">Let's Connect</h2>
                <p className="text-lg text-accent-light text-opacity-90 max-w-md leading-relaxed">
                  Whether you're looking for therapy, academic collaboration, or a consultation, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-accent-light text-opacity-80 text-sm">0335-7462807</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-accent-light text-opacity-80 text-sm">hinau766@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">LinkedIn</h4>
                    <a href="https://linkedin.com/in/hina-usman/" target="_blank" rel="noopener noreferrer" className="text-accent-light text-opacity-80 text-sm hover:text-white transition-colors" title="LinkedIn Profile" aria-label="LinkedIn Profile">linkedin.com/in/hina-usman/</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Form Input */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900 bg-gray-50 focus:bg-white" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900 bg-gray-50 focus:bg-white" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-gray-900 bg-gray-50 focus:bg-white" placeholder="How can I help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-serif font-bold text-2xl text-white tracking-tight">Hina Usman</span>
              <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved. v1.1</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#about" className="hover:text-white transition-colors" title="About Section" aria-label="Navigate to About section">About</Link>
              <Link href="#services" className="hover:text-white transition-colors" title="Services Section" aria-label="Navigate to Services section">Services</Link>
              <Link href="#research" className="hover:text-white transition-colors" title="Research Section" aria-label="Navigate to Research section">Research</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
