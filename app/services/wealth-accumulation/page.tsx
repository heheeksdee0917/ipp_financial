import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Wealth Accumulation',
  description:
    'Build your wealth through disciplined investment strategies designed for long-term growth and compounding returns with IPP.',
};

const content = {
  num: '02',
  title: 'Wealth Accumulation',
  subtitle: 'Build with discipline. Grow with confidence.',
  intro:
    'Wealth accumulation is the engine of financial independence. IPP designs investment strategies that balance growth and risk, leveraging disciplined saving, diversified portfolios and the power of compounding over time.',
  pillars: [
    {
      title: 'Investment Planning',
      body: 'Asset allocation and portfolio construction aligned with your risk profile, time horizon and financial goals.',
    },
    {
      title: 'Savings Discipline',
      body: 'Structured savings programmes that make wealth building automatic, consistent and measurable.',
    },
    {
      title: 'Tax-Efficient Growth',
      body: 'Strategies to maximise after-tax returns through tax-advantaged instruments and smart structuring.',
    },
    {
      title: 'Retirement Accumulation',
      body: 'Long-term wealth building designed to fund the retirement lifestyle you envision.',
    },
  ],
  cta: 'Start building your wealth.',
};

export default function WealthAccumulation() {
  return <ServicePage content={content} />;
}
