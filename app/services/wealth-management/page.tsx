import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Wealth Management',
  description:
    'Optimize and manage your portfolio with institutional-grade asset allocation and ongoing advisory oversight from IPP.',
};

const content = {
  num: '03',
  title: 'Wealth Management',
  subtitle: 'Optimize. Monitor. Adjust.',
  intro:
    'As your wealth grows, so does its complexity. IPP\u2019s Wealth Management service provides ongoing, institutional-grade oversight of your portfolio \u2014 rebalancing, optimising and adapting as markets and life circumstances evolve.',
  pillars: [
    {
      title: 'Portfolio Oversight',
      body: 'Continuous monitoring and rebalancing to keep your investments aligned with your objectives and risk tolerance.',
    },
    {
      title: 'Asset Allocation',
      body: 'Institutional-grade diversification across asset classes, geographies and sectors to manage risk and capture opportunity.',
    },
    {
      title: 'Performance Reporting',
      body: 'Transparent, regular reporting so you always know where you stand and how your portfolio is performing.',
    },
    {
      title: 'Advisory Partnership',
      body: 'A dedicated adviser who understands your full financial picture and adjusts strategy as your life changes.',
    },
  ],
  cta: 'Manage your wealth with IPP.',
};

export default function WealthManagement() {
  return <ServicePage content={content} />;
}
