import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'IPP Financial Planning Group — Lifetime Financial Success',
  description:
    "Malaysia's premier financial advisory firm. Serving professionals, executives and high net worth individuals since 1983.",
};

export default function Home() {
  return <HomePage />;
}
