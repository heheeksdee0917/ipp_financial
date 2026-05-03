'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { label: 'Wealth Protection', href: '/services/wealth-protection' },
  { label: 'Wealth Accumulation', href: '/services/wealth-accumulation' },
  { label: 'Wealth Management', href: '/services/wealth-management' },
  { label: 'Wealth Distribution', href: '/services/wealth-distribution' },
];

const otherLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0D1B2A]/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo — always white version */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-white.png"
              alt="IPP Financial Planning Group"
              width={80}
              height={32}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">

            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm tracking-wide transition-colors flex items-center gap-1 text-[#9AA5B4] hover:text-white">
                SERVICES
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64
                    bg-[#0D1B2A]/90 backdrop-blur-md
                    border border-white/10
                    shadow-[0_16px_32px_rgba(0,0,0,0.4)]
                    py-2 rounded-xl"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {serviceLinks.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="block px-5 py-3 text-sm text-[#9AA5B4] hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide transition-colors text-[#9AA5B4] hover:text-white"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <a
              href="mailto:enquiry@ipp.com.my"
              className="text-sm font-medium text-white bg-[#C41E3A] hover:bg-[#A01830] px-5 py-2 transition-colors rounded"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden transition-colors text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav >

      {/* Mobile overlay */}
      {
        mobileOpen && (
          <div className="fixed inset-0 z-40 bg-[#0D1B2A]/95 backdrop-blur-md flex flex-col items-center justify-center gap-6">

            {/* Glow blob */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C41E3A]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Services accordion */}
            <div className="relative w-full max-w-xs text-center">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-2xl font-medium text-white hover:text-[#C41E3A] transition-colors flex items-center gap-2 mx-auto"
              >
                Services
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-4 flex flex-col gap-3">
                  {serviceLinks.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="text-lg text-[#9AA5B4] hover:text-[#C41E3A] transition-colors"
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-white hover:text-[#C41E3A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:enquiry@ipp.com.my"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-white bg-[#C41E3A] hover:bg-[#A01830] px-8 py-3 transition-colors rounded"
            >
              Book a Consultation
            </a>
          </div>
        )
      }
    </>
  );
}