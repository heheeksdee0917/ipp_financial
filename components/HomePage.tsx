'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollAnimator } from '@/components/ScrollAnimator';

const services = [
  {
    num: '01',
    name: 'Wealth Protection',
    desc: 'Safeguard your income, assets and family against life\u2019s uncertainties with tailored insurance and risk strategies.',
    href: '/services/wealth-protection',
  },
  {
    num: '02',
    name: 'Wealth Accumulation',
    desc: 'Build your wealth through disciplined investment strategies designed for long-term growth and compounding returns.',
    href: '/services/wealth-accumulation',
  },
  {
    num: '03',
    name: 'Wealth Management',
    desc: 'Optimize and manage your portfolio with institutional-grade asset allocation and ongoing advisory oversight.',
    href: '/services/wealth-management',
  },
  {
    num: '04',
    name: 'Wealth Distribution',
    desc: 'Ensure your legacy is transferred efficiently and according to your wishes through estate and trust planning.',
    href: '/services/wealth-distribution',
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

export function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Section 1 — Hero */}
      <section className="min-h-screen flex items-center justify-center bg-[#0D1B2A] pt-16">
        <div
          className={`text-center px-6 transition-all duration-1000 ease-out ${
            heroVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            YOUR WEALTH.
            <br />
            YOUR LEGACY.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#9AA5B4] font-normal max-w-2xl mx-auto">
            Comprehensive financial planning for professionals and high net worth
            individuals in Malaysia.
          </p>
          <div className="mt-10">
            <a
              href="mailto:enquiry@ipp.com.my"
              className="inline-block text-base font-semibold text-white bg-[#C41E3A] hover:bg-[#A01830] px-8 py-3 transition-colors"
              style={{ borderRadius: '4px' }}
            >
              Speak to an Adviser &rarr;
            </a>
          </div>
          <p className="mt-6 text-xs text-[#9AA5B4] tracking-wide">
            Est. 1983 &middot; Licensed by SC Malaysia
          </p>
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
                  className={`flex flex-col items-center text-center px-6 py-4 ${
                    i < trustItems.length - 1
                      ? 'md:border-r md:border-[#E2E8F0]'
                      : ''
                  } ${i < 1 ? '' : 'border-t md:border-t-0 border-[#E2E8F0]'} ${
                    i === 1 ? 'md:border-r md:border-[#E2E8F0]' : ''
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
      <section id="services" className="bg-[#F8F7F4] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimator>
            <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0D1B2A]">
              Four Pillars of Financial Success
            </h2>
          </ScrollAnimator>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <ScrollAnimator key={svc.num}>
                <Link
                  href={svc.href}
                  className="block bg-white border border-[#E2E8F0] p-8 transition-colors hover:border-[#C41E3A] group"
                  style={{ borderRadius: '4px' }}
                >
                  <span className="text-3xl font-bold text-[#C41E3A]">
                    {svc.num}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#0D1B2A]">
                    {svc.name}
                  </h3>
                  <p className="mt-2 text-[#4A5568] leading-relaxed">
                    {svc.desc}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#C41E3A] group-hover:underline">
                    Learn More &rarr;
                  </span>
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
