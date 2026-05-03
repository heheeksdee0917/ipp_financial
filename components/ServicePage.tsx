'use client';

import Link from 'next/link';
import { ScrollAnimator } from '@/components/ScrollAnimator';

interface Pillar {
  title: string;
  body: string;
}

interface ServiceContent {
  num: string;
  title: string;
  subtitle: string;
  intro: string;
  pillars: Pillar[];
  cta: string;
}

export function ServicePage({ content }: { content: ServiceContent }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0D1B2A] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">

        {/* Background glow blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1a2d42] to-[#0D1B2A]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C41E3A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C41E3A]/5 rounded-full blur-3xl" />

        {/* Watermark number */}
        <div className="absolute -bottom-10 right-0 text-[20rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
          {content.num}
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
            IPP Financial Planning
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="mt-6 text-xl text-[#9AA5B4] max-w-2xl">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <ScrollAnimator>
        <section className="relative bg-[#0D1B2A] py-16 md:py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-lg text-[#9AA5B4] leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>
      </ScrollAnimator>

      {/* Pillars */}
      <section className="relative bg-[#0D1B2A] py-16 md:py-24 overflow-hidden">

        {/* Background glow */}
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#C41E3A]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollAnimator>
            <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-3">
              What We Cover
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Key Focus Areas
            </h2>
          </ScrollAnimator>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.pillars.map((pillar, i) => (
              <ScrollAnimator key={pillar.title}>
                <div className="group relative flex flex-col p-6 rounded-xl overflow-hidden min-h-[200px]
                  border border-white/10
                  bg-white/5 backdrop-blur-md
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]
                  hover:border-white/20
                  hover:bg-white/10"
                >
                  {/* Watermark index */}
                  <div className="absolute -top-4 -right-4 w-36 h-36 text-white/5 group-hover:text-[#C41E3A]/10 transition-all duration-500">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                      {i === 0 && <>
                        {/* Investment — candlestick chart */}
                        <line x1="8" y1="56" x2="56" y2="56" />
                        <line x1="16" y1="28" x2="16" y2="44" /><rect x="12" y="34" width="8" height="10" /><line x1="16" y1="22" x2="16" y2="28" />
                        <line x1="32" y1="16" x2="32" y2="36" /><rect x="28" y="20" width="8" height="16" /><line x1="32" y1="36" x2="32" y2="44" />
                        <line x1="48" y1="10" x2="48" y2="28" /><rect x="44" y="14" width="8" height="14" /><line x1="48" y1="28" x2="48" y2="36" />
                      </>}
                      {i === 1 && <>
                        {/* Savings — piggy bank */}
                        <path d="M10 36 C10 24 20 16 32 16 C44 16 54 24 54 36 C54 44 49 50 42 53 L42 58 L28 58 L28 53 C21 50 10 44 10 36Z" />
                        <circle cx="44" cy="28" r="3" />
                        <path d="M54 32 L60 30 L60 38 L54 36" />
                        <line x1="20" y1="36" x2="36" y2="36" />
                      </>}
                      {i === 2 && <>
                        {/* Tax — receipt with percentage */}
                        <rect x="14" y="8" width="36" height="48" rx="2" />
                        <line x1="22" y1="20" x2="42" y2="20" />
                        <line x1="22" y1="28" x2="42" y2="28" />
                        <line x1="38" y1="38" x2="26" y2="48" />
                        <circle cx="27" cy="38" r="3" />
                        <circle cx="37" cy="48" r="3" />
                      </>}
                      {i === 3 && <>
                        {/* Retirement — hourglass */}
                        <path d="M16 8 L48 8 L32 32 L48 56 L16 56 L32 32 Z" />
                        <line x1="16" y1="8" x2="48" y2="8" />
                        <line x1="16" y1="56" x2="48" y2="56" />
                        <path d="M24 48 Q32 40 40 48" />
                      </>}
                    </svg>
                  </div>

                  <h3 className="relative text-lg font-bold text-[#C41E3A] leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="relative mt-3 text-sm text-[#9AA5B4] leading-relaxed">
                    {pillar.body}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C41E3A] transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollAnimator>
        <section className="relative bg-[#0D1B2A] py-16 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/10 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {content.cta}
            </h2>
            <a
              href="mailto:enquiry@ipp.com.my"
              className="inline-block text-base font-semibold text-white bg-[#C41E3A] hover:bg-[#A01830] px-8 py-3 transition-colors"
              style={{ borderRadius: '4px' }}
            >
              Speak to an Adviser &rarr;
            </a>
          </div>
        </section>
      </ScrollAnimator>

      {/* Back link */}
      <section className="bg-[#0D1B2A] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/#services"
            className="text-sm font-semibold text-[#9AA5B4] hover:text-[#C41E3A] transition-colors"
          >
            &larr; Back to Services
          </Link>
        </div>
      </section>
    </>
  );
}