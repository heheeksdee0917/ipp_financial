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
      <section className="bg-[#0D1B2A] pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-5xl font-bold text-[#C41E3A]">{content.num}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {content.title}
          </h1>
          <p className="mt-4 text-xl text-[#9AA5B4]">{content.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <ScrollAnimator>
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-lg text-[#4A5568] leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>
      </ScrollAnimator>

      {/* Pillars */}
      <section className="bg-[#F8F7F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.pillars.map((pillar) => (
              <ScrollAnimator key={pillar.title}>
                <div className="bg-white border border-[#E2E8F0] p-8" style={{ borderRadius: '4px' }}>
                  <h3 className="text-xl font-semibold text-[#0D1B2A]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[#4A5568] leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollAnimator>
        <section className="bg-[#C41E3A] py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {content.cta}
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

      {/* Back link */}
      <section className="bg-[#F8F7F4] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/#services"
            className="text-sm font-semibold text-[#C41E3A] hover:underline"
          >
            &larr; Back to Services
          </Link>
        </div>
      </section>
    </>
  );
}
