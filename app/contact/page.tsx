'use client';

import { useState } from 'react';
import { ScrollAnimator } from '@/components/ScrollAnimator';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mrejzjnl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="bg-[#F8F7F4]">

      {/* Page Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Let's Talk About Your Future.
          </h1>
          <p className="mt-6 text-lg text-[#9AA5B4] max-w-2xl leading-relaxed">
            Speak to one of our advisers. We'll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <ScrollAnimator>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-4">
                  Get in Touch
                </p>
                <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                  The Right Consultant.<br />The Right Advice.
                </h2>
                <p className="text-[#4A5568] leading-relaxed">
                  Whether you're just starting your financial journey or looking
                  to optimise an existing portfolio, our advisers are here to help.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="border-l-2 border-[#C41E3A] pl-6">
                  <p className="text-sm font-semibold text-[#0D1B2A] uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:enquiry@ipp.com.my"
                    className="text-[#4A5568] hover:text-[#C41E3A] transition-colors"
                  >
                    enquiry@ipp.com.my
                  </a>
                </div>

                <div className="border-l-2 border-[#C41E3A] pl-6">
                  <p className="text-sm font-semibold text-[#0D1B2A] uppercase tracking-widest mb-1">
                    Address
                  </p>
                  <p className="text-[#4A5568]">
                    Kuala Lumpur, Malaysia
                  </p>
                </div>

                <div className="border-l-2 border-[#C41E3A] pl-6">
                  <p className="text-sm font-semibold text-[#0D1B2A] uppercase tracking-widest mb-1">
                    Licensed By
                  </p>
                  <p className="text-[#4A5568]">
                    Securities Commission Malaysia
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Right — Form */}
          <ScrollAnimator>
            <div
              className="bg-white border border-[#E2E8F0] p-8 md:p-10"
              style={{ borderRadius: '4px' }}
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div
                    className="w-14 h-14 bg-[#C41E3A] flex items-center justify-center"
                    style={{ borderRadius: '4px' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1B2A]">
                    Message Received
                  </h3>
                  <p className="text-[#4A5568]">
                    Thank you for reaching out. One of our advisers will be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-semibold text-[#C41E3A] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-2" htmlFor="name">
                      Full Name <span className="text-[#C41E3A]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8F7F4] text-[#0D1B2A] placeholder-[#9AA5B4] text-sm focus:outline-none focus:border-[#C41E3A] transition-colors"
                      style={{ borderRadius: '4px' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-2" htmlFor="email">
                      Email Address <span className="text-[#C41E3A]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8F7F4] text-[#0D1B2A] placeholder-[#9AA5B4] text-sm focus:outline-none focus:border-[#C41E3A] transition-colors"
                      style={{ borderRadius: '4px' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+60 12 345 6789"
                      className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8F7F4] text-[#0D1B2A] placeholder-[#9AA5B4] text-sm focus:outline-none focus:border-[#C41E3A] transition-colors"
                      style={{ borderRadius: '4px' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-2" htmlFor="message">
                      Message <span className="text-[#C41E3A]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your financial goals or how we can help..."
                      className="w-full px-4 py-3 border border-[#E2E8F0] bg-[#F8F7F4] text-[#0D1B2A] placeholder-[#9AA5B4] text-sm focus:outline-none focus:border-[#C41E3A] transition-colors resize-none"
                      style={{ borderRadius: '4px' }}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-[#C41E3A]">
                      Something went wrong. Please try again or email us directly at enquiry@ipp.com.my
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 text-sm font-semibold text-white bg-[#C41E3A] hover:bg-[#A01830] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    style={{ borderRadius: '4px' }}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message →'}
                  </button>

                  <p className="text-xs text-[#9AA5B4] text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </ScrollAnimator>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D1B2A] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest mb-2">
              Prefer to email directly?
            </p>
            <p className="text-white text-lg font-semibold">enquiry@ipp.com.my</p>
          </div>
          <a
            href="mailto:enquiry@ipp.com.my"
            className="inline-block text-sm font-semibold text-white border border-white hover:bg-white hover:text-[#0D1B2A] px-8 py-3 transition-colors"
            style={{ borderRadius: '4px' }}
          >
            Open Email Client →
          </a>
        </div>
      </section>

    </main>
  );
}