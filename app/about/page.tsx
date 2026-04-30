import type { Metadata } from 'next';
import { ScrollAnimator } from '@/components/ScrollAnimator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About IPP',
  description:
    'IPP Financial Planning Group — Malaysia\'s premier financial advisory firm. Our history, vision, mission and values since 1983.',
};

const missions = [
  'To Serve Our Clients To Achieve Lifetime Financial Success',
  'To Provide Our Clients With Systematic Financial Planning Processes',
  'To Provide Our Clients With World Class Products & Services',
  'To Serve Our Clients Through Our Competent Advisors',
];

const milestones = [
  { year: '1983', text: 'IPP Group founded in Singapore as Investment Protection Planning Pte Ltd.' },
  { year: '1990s', text: 'Expanded across Southeast Asia, establishing presence in Malaysia and Hong Kong.' },
  { year: '2000s', text: 'Grew to become one of Singapore\'s most complete licensed financial advisers.' },
  { year: 'Today', text: 'Over $2 Billion assets under advice. 50,000+ clients across Asia Pacific.' },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8F7F4]">

      {/* Page Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
            About IPP
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            The Future is Bright.
          </h1>
          <p className="mt-6 text-lg text-[#9AA5B4] max-w-2xl leading-relaxed">
            IPP is vibrant, confident and forward looking — always in motion.
            A pioneer in comprehensive financial planning with a solid reputation
            built across Asia since 1983.
          </p>
        </div>
      </section>

      {/* Our Logo */}
      <section className="bg-white py-24 px-6 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimator>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
                  Our Logo
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                  A Symbol of Financial Freedom
                </h2>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  The 'dove in flight' logo symbolises financial freedom, investment,
                  growth and performance. The dove represents movement, peace and
                  the spirit of progress.
                </p>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  The colours blue, white and red represent royalty, honesty,
                  purity and integrity — values that have guided our practice
                  for over four decades.
                </p>
                <p className="text-[#4A5568] leading-relaxed">
                  The outstretched wings and tail signify a bright shining star
                  guiding your path as you advance into the future.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div
                  className="bg-[#F8F7F4] border border-[#E2E8F0] p-16 flex items-center justify-center"
                  style={{ borderRadius: '4px', minWidth: '280px', minHeight: '200px' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.png"
                    alt="IPP Logo"
                    style={{ maxWidth: '160px' }}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Our History */}
      <section className="py-24 px-6 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimator>
            <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
              Our History
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
              Over 40 Years of Excellence
            </h2>
            <p className="text-[#4A5568] leading-relaxed max-w-3xl mb-16">
              The IPP Financial Planning Group in Malaysia is historically associated
              with the IPP Financial Services Holding group — Singapore's most complete
              licensed financial planning advisory organisation. IPP is simply committed
              to providing lifetime comprehensive financial planning advice and services
              to individuals and corporations.
            </p>
          </ScrollAnimator>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <ScrollAnimator key={m.year}>
                <div
                  className="bg-white border border-[#E2E8F0] p-8"
                  style={{ borderRadius: '4px' }}
                >
                  <span className="text-3xl font-extrabold text-[#C41E3A]">
                    {m.year}
                  </span>
                  <p className="mt-4 text-[#4A5568] leading-relaxed text-sm">
                    {m.text}
                  </p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#0D1B2A] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Vision */}
            <ScrollAnimator>
              <div>
                <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
                  Our Vision
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Bringing Financial Success To Malaysians
                </h2>
                <p className="text-[#9AA5B4] leading-relaxed">
                  We envision a Malaysia where every professional, executive and
                  family has access to world-class financial guidance — and the
                  clarity to act on it with confidence.
                </p>
              </div>
            </ScrollAnimator>

            {/* Mission */}
            <ScrollAnimator>
              <div>
                <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
                  Our Mission
                </p>
                <div className="flex flex-col gap-4">
                  {missions.map((m, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-[#C41E3A] font-bold text-lg mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[#9AA5B4] leading-relaxed">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimator>
            <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
              Why IPP
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-12">
              The Right Consultant. The Right Advice.
            </h2>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Independent', body: 'Not tied to any single product provider. Our advice is always in your interest — no commissions driving our recommendations.' },
              { title: 'Comprehensive', body: 'From protection to legacy planning, we manage every dimension of your financial life under one trusted practice.' },
              { title: 'Proven', body: 'Over 40 years of guiding professionals and families to financial independence across Singapore, Malaysia and Hong Kong.' },
            ].map((v) => (
              <ScrollAnimator key={v.title}>
                <div className="border-l-2 border-[#C41E3A] pl-6">
                  <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed">{v.body}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#F8F7F4] py-16 px-6 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimator>
            <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
              Disclaimer
            </p>
            <p className="text-sm text-[#9AA5B4] leading-relaxed max-w-4xl">
              References to any products such as insurance, investment, or funds
              should be read in conjunction with the respective prospectus, brochure,
              sales illustrations and/or factsheet. Nothing on this website should be
              considered advice to buy or sell any investment, fund, or product.
              Investments can go up and down and past performance is not an indication
              of future performance. For more information, complaints, and general
              enquiries please{' '}
              <a
                href="mailto:enquiry@ipp.com.my"
                className="text-[#C41E3A] hover:underline"
              >
                contact us
              </a>
              .
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C41E3A] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to start your financial journey?
          </h2>
          <a
            href="mailto:enquiry@ipp.com.my"
            className="inline-block text-base font-semibold text-white border-2 border-white hover:bg-white hover:text-[#C41E3A] px-8 py-3 transition-colors"
            style={{ borderRadius: '4px' }}
          >
            Speak to an Adviser →
          </a>
        </div>
      </section>

    </main>
  );
}