import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  MonitorSmartphone, 
  Zap, 
  Search, 
  ShieldCheck,
  Star,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Mail
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xqeyvklj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', website: '' });
      } else {
        console.error('Form submission failed');
        alert('There was a problem submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-display font-bold text-white">
              W
            </div>
            <span className="font-display text-lg font-bold tracking-tight">WebElevate</span>
          </div>
          <button 
            onClick={scrollToForm}
            className="hidden rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 sm:block"
          >
            Get Free Assessment
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/4 rounded-full bg-blue-600/20 blur-[120px]"></div>
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
              
              {/* Hero Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex max-w-2xl flex-col justify-center"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                  Accepting new clients for Q3
                </div>
                <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Your Website Is Costing You Customers — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Let's Fix That.</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                  Stop losing leads to a slow, outdated, or confusing website. Get a comprehensive, expert analysis of your site's performance, design, and conversion potential—100% free.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button 
                    onClick={scrollToForm}
                    className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 active:scale-95"
                  >
                    Get My Free Website Assessment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                
                {/* Trust Signal */}
                <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        className="inline-block h-10 w-10 rounded-full border-2 border-slate-950 object-cover"
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        alt={`User ${i}`}
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-slate-400">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <span className="font-medium text-white">Trusted by 100+</span> businesses
                  </div>
                </div>
              </motion.div>

              {/* Lead Capture Form */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0"
                id="audit-form"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-blue-500 to-cyan-400 opacity-20 blur-lg"></div>
                <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
                  <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold text-white">Claim Your Free Audit</h3>
                    <p className="mt-2 text-sm text-slate-400">Enter your details below and we'll send your customized report within 48 hours.</p>
                  </div>

                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h4 className="font-display text-xl font-bold text-white">Request Received!</h4>
                      <p className="mt-2 text-slate-400">We're analyzing your site. Keep an eye on your inbox.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="sr-only">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">Work Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Work Email"
                        />
                      </div>
                      <div>
                        <label htmlFor="website" className="sr-only">Website URL</label>
                        <input
                          type="url"
                          id="website"
                          required
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full overflow-hidden rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 disabled:opacity-70"
                      >
                        <span className={cn("flex items-center justify-center gap-2", isSubmitting && "opacity-0")}>
                          Get My Free Audit
                          <ArrowRight className="h-4 w-4" />
                        </span>
                        {isSubmitting && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </span>
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        No spam. Just actionable insights to improve your website.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="border-t border-white/5 bg-slate-900/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Why your website isn't working for you
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                A pretty website isn't enough. We focus on the metrics that actually drive business growth.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {[
                  {
                    name: 'Increase Conversions',
                    description: 'Turn more visitors into paying customers with optimized user journeys and clear calls-to-action.',
                    icon: TrendingUp,
                  },
                  {
                    name: 'Improve UX/UI',
                    description: 'Create intuitive, frictionless experiences that keep users engaged and reduce bounce rates.',
                    icon: CheckCircle2,
                  },
                  {
                    name: 'Faster Load Times',
                    description: 'Speed up your site to prevent user drop-off and improve your search engine rankings.',
                    icon: Zap,
                  },
                  {
                    name: 'Mobile Optimization',
                    description: 'Ensure your site looks and functions perfectly on every device, where most of your traffic lives.',
                    icon: MonitorSmartphone,
                  },
                ].map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 font-display text-lg font-semibold text-white">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <feature.icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* What You'll Get Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  What's inside your free assessment?
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  We don't just run your site through an automated tool. Our experts manually review your website to provide tailored, actionable advice.
                </p>
                
                <ul className="mt-10 space-y-6">
                  {[
                    { title: 'UX/UI Analysis', desc: 'A breakdown of visual hierarchy and user flow.' },
                    { title: 'Performance Review', desc: 'Speed tests and technical bottleneck identification.' },
                    { title: 'Conversion Optimization', desc: 'Specific tweaks to increase your lead capture rate.' },
                    { title: 'SEO Health Check', desc: 'Basic on-page SEO analysis to improve visibility.' },
                    { title: 'Actionable Roadmap', desc: 'A prioritized list of exactly what to fix first.' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-2xl"></div>
                <div className="relative rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/dashboard/800/600" 
                    alt="Assessment Report Preview" 
                    className="rounded-xl border border-white/5 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating elements to simulate UI */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-6 top-12 rounded-xl border border-white/10 bg-slate-800/90 p-4 shadow-xl backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">+24% Conversion</div>
                        <div className="text-xs text-slate-400">Potential Increase</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-6 bottom-12 rounded-xl border border-white/10 bg-slate-800/90 p-4 shadow-xl backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">0.8s Load Time</div>
                        <div className="text-xs text-slate-400">Recommended Target</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="border-t border-white/5 bg-slate-900/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Don't just take our word for it
              </h2>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  body: "The assessment was incredibly eye-opening. We implemented just three of their suggestions and saw a 40% increase in lead form submissions within a month.",
                  author: "Sarah Jenkins",
                  role: "Founder, TechStart",
                  image: "https://picsum.photos/seed/sarah/100/100"
                },
                {
                  body: "I thought our website was fine, but the performance review showed we were losing mobile users due to load times. Fixing it changed our business.",
                  author: "Marcus Chen",
                  role: "Marketing Director, Elevate",
                  image: "https://picsum.photos/seed/marcus/100/100"
                },
                {
                  body: "No fluff, just actionable data. The UX teardown alone was worth what an agency would normally charge thousands for. Highly recommended.",
                  author: "Elena Rodriguez",
                  role: "CEO, GrowthWave",
                  image: "https://picsum.photos/seed/elena/100/100"
                }
              ].map((testimonial, i) => (
                <div key={i} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-sm">
                  <div className="flex gap-1 text-amber-400 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-base leading-7 text-slate-300">"{testimonial.body}"</p>
                  <div className="mt-8 flex items-center gap-4">
                    <img className="h-12 w-12 rounded-full bg-slate-800 object-cover" src={testimonial.image} alt={testimonial.author} referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Logos */}
            <div className="mt-20 border-t border-white/5 pt-10">
              <p className="text-center text-sm font-semibold text-slate-400">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex justify-center">
                    <div className="h-8 w-32 rounded bg-slate-800/50 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative isolate overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(37,99,235,0.1),rgba(255,255,255,0))]"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Don't Let Your Website Hold You Back
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Stop guessing why your site isn't converting. Get expert insights tailored to your business today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button 
                  onClick={scrollToForm}
                  className="rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-transform hover:scale-105"
                >
                  Claim My Free Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 font-display text-xs font-bold text-white">
                W
              </div>
              <span className="font-display text-sm font-bold tracking-tight">WebElevate</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs leading-5 text-slate-400">
              &copy; {new Date().getFullYear()} WebElevate Design. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:hello@webelevate.example.com" className="flex items-center gap-1 hover:text-white transition-colors">
                <Mail className="h-3 w-3" />
                hello@webelevate.example.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

