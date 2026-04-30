import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { label: 'Services', href: '/#services' },
{ label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-[#9AA5B4]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Image
            src="/logo.png"
            alt="IPP Financial Planning Group"
            width={80}
            height={32}
          />

          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#9AA5B4] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-[#9AA5B4]">
            &copy; 2025 IPP Financial Planning Group
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1A2F45] flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-[#9AA5B4]">
          <span>Licensed by Securities Commission Malaysia</span>
          <span className="hidden md:inline">&middot;</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden md:inline">&middot;</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
