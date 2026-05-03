'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollAnimator } from '@/components/ScrollAnimator';
import ShaderDemo_ATC from '@/components/ui/atc-shader';

const services = [
  {
    num: '01',
    name: 'Wealth Protection',
    desc: 'Safeguard your income, assets and family against life\'s uncertainties with tailored insurance and risk strategies.',
    href: '/services/wealth-protection',
    icon: (
      // Shield with check — protection
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M32 4 L56 14 L56 32 C56 46 44 58 32 62 C20 58 8 46 8 32 L8 14 Z" />
        <polyline points="22,32 29,39 42,26" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Wealth Accumulation',
    desc: 'Build your wealth through disciplined investment strategies designed for long-term growth and compounding returns.',
    href: '/services/wealth-accumulation',
    icon: (
      // Growing bar chart — accumulation
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <line x1="8" y1="56" x2="56" y2="56" />
        <rect x="10" y="36" width="10" height="20" />
        <rect x="27" y="24" width="10" height="32" />
        <rect x="44" y="10" width="10" height="46" />
        <polyline points="10,40 27,28 44,14" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Wealth Management',
    desc: 'Optimize and manage your portfolio with institutional-grade asset allocation and ongoing advisory oversight.',
    href: '/services/wealth-management',
    icon: (
      // Pie chart with orbit ring — portfolio management
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="32" cy="32" r="22" />
        <path d="M32 10 L32 32 L50 42" />
        <path d="M32 32 L14 22" />
        <circle cx="32" cy="32" r="3" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Wealth Distribution',
    desc: 'Ensure your legacy is transferred efficiently and according to your wishes through estate and trust planning.',
    href: '/services/wealth-distribution',
    icon: (
      // Tree branching down — estate/legacy distribution
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="32" cy="10" r="6" />
        <line x1="32" y1="16" x2="32" y2="30" />
        <line x1="32" y1="30" x2="16" y2="42" />
        <line x1="32" y1="30" x2="48" y2="42" />
        <circle cx="16" cy="48" r="6" />
        <circle cx="48" cy="48" r="6" />
      </svg>
    ),
  },
];

const trustItems = [
  { stat: 'Since 1983', label: 'Over 40 Years of Excellence' },
  { stat: 'SC Licensed', label: 'Securities Commission Malaysia' },
  { stat: '$2B+', label: 'Assets Under Advice' },
  { stat: '50,000+', label: 'Clients Worldwide' },
];

const features = [
  {
    title: 'Independent',
    body: 'We are not tied to any single product provider. Our advice is always in your interest.',
  },
  {
    title: 'Comprehensive',
    body: 'From protection to legacy planning, we manage every dimension of your financial life.',
  },
  {
    title: 'Proven',
    body: 'Over 40 years of guiding professionals and families to financial independence in Asia.',
  },
];

// Reusable fade-up element with configurable delay
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } ${className}`}
    >
      {children}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      {/* Section 1 — Hero with Shader Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">

        {/* Shader fills the entire hero background */}
        <div className="absolute inset-0 z-0">
          <ShaderDemo_ATC />
        </div>

        {/* Dark overlay so text remains legible */}
        <div className="absolute inset-0 z-10 bg-[#0D1B2A]/60" />

        {/* Hero content — each element fades up with staggered delay */}
        <div className="relative z-20 text-center px-6">

          <FadeUp delay={200}>
            <p className="text-xs font-semibold text-[#C41E3A] uppercase tracking-[0.3em] mb-4">
              Est. 1983 · Licensed by SC Malaysia
            </p>
          </FadeUp>

          <FadeUp delay={400}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              YOUR WEALTH.
              <br />
              YOUR LEGACY.
            </h1>
          </FadeUp>

          <FadeUp delay={600}>
            <p className="mt-6 text-lg md:text-xl text-[#9AA5B4] font-normal max-w-2xl mx-auto">
              Comprehensive financial planning for professionals and high net worth
              individuals in Malaysia.
            </p>
          </FadeUp>

          <FadeUp delay={800}>
            <div className="mt-10">
              <a
                href="mailto:enquiry@ipp.com.my"
                className="inline-block text-base font-semibold text-white bg-[#C41E3A] hover:bg-[#A01830] px-8 py-3 transition-colors"
                style={{ borderRadius: '4px' }}
              >
                Speak to an Adviser &rarr;
              </a>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* Section 2 — Trust Bar */}
      <ScrollAnimator>
        <section className="bg-white border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {trustItems.map((item, i) => (
                <div
                  key={item.stat}
                  className={`flex flex-col items-center text-center px-6 py-4 ${i < trustItems.length - 1
                      ? 'md:border-r md:border-[#E2E8F0]'
                      : ''
                    } ${i < 1 ? '' : 'border-t md:border-t-0 border-[#E2E8F0]'} ${i === 1 ? 'md:border-r md:border-[#E2E8F0]' : ''
                    }`}
                >
                  <span className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
                    {item.stat}
                  </span>
                  <span className="mt-1 text-sm text-[#4A5568]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimator>

      {/* Section 3 — Services */}
      <section id="services" className="relative bg-[#0D1B2A] py-24 md:py-32 overflow-hidden">

        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1a2d42] to-[#0D1B2A]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C41E3A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C41E3A]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollAnimator>
            <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Four Pillars of Financial Success
            </h2>
          </ScrollAnimator>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((svc) => (
              <ScrollAnimator key={svc.num}>
                <Link
                  href={svc.href}
                  className="group relative flex flex-col p-6 rounded-xl overflow-hidden min-h-[280px]
          border border-white/10
          bg-white/5 backdrop-blur-md
          transition-all duration-500 ease-out
          hover:-translate-y-2
          hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]
          hover:border-white/20
          hover:bg-white/10"
                >
                  {/* SVG watermark icon */}
                  <div className="absolute -top-4 -right-4 w-36 h-36 text-white/5 group-hover:text-[#C41E3A]/10 transition-all duration-500">
                    {svc.icon}
                  </div>

                  {/* Title in red */}
                  <h3 className="relative mt-2 text-lg font-bold text-[#C41E3A] leading-snug">
                    {svc.name}
                  </h3>

                  <p className="relative mt-3 text-sm text-[#9AA5B4] leading-relaxed">
                    {svc.desc}
                  </p>

                  {/* Learn more pinned to bottom */}
                  <div className="relative mt-auto pt-6 flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="transition-all duration-300 group-hover:mr-1">
                      Learn More
                    </span>
                    <span className="inline-block transition-all duration-300 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C41E3A] transition-all duration-500 group-hover:w-full" />
                </Link>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Philosophy */}
      <ScrollAnimator>
        <section className="bg-[#0D1B2A] py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <blockquote className="text-2xl md:text-4xl font-medium text-white italic leading-relaxed">
              &ldquo;A part of what you earn is yours to keep.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-[#9AA5B4]">
              &mdash; The Richest Man in Babylon
            </p>
            <p className="mt-6 text-base text-[#4A5568] leading-relaxed max-w-xl mx-auto">
              This is the principle that has guided our clients to financial
              independence for over four decades.
            </p>
          </div>
        </section>
      </ScrollAnimator>

      {/* Section 5 — Why IPP */}
      <section id="about" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimator>
            <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest">
              Why Choose IPP
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0D1B2A]">
              Built on Advice. Not Products.
            </h2>
          </ScrollAnimator>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat) => (
              <ScrollAnimator key={feat.title}>
                <div className="border-l-2 border-[#C41E3A] pl-6">
                  <h3 className="text-xl font-semibold text-[#0D1B2A]">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-[#4A5568] leading-relaxed">
                    {feat.body}
                  </p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA Banner */}
      <ScrollAnimator>
        <section className="bg-[#C41E3A] py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to take control of your financial future?
            </h2>
            <a
              href="mailto:enquiry@ipp.com.my"
              className="inline-block text-base font-semibold text-white border-2 border-white hover:bg-white hover:text-[#C41E3A] px-8 py-3 transition-colors"
              style={{ borderRadius: '4px' }}
            >
              Speak to an Adviser &rarr;
            </a>
          </div>
        </section>
      </ScrollAnimator>
    </>
  );
}