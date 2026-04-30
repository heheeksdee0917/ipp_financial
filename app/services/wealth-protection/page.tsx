import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Wealth Protection',
  description:
    'Safeguard your income, assets and family against life\u2019s uncertainties with IPP\u2019s tailored insurance and risk strategies.',
};

const content = {
  num: '01',
  title: 'Wealth Protection',
  subtitle: 'Safeguard what matters most.',
  intro:
    'Before you can build wealth, you must protect it. IPP\u2019s Wealth Protection strategies ensure that your income, assets and loved ones are shielded from life\u2019s unexpected events \u2014 illness, disability, liability and loss.',
  pillars: [
    {
      title: 'Life & Health Insurance',
      body: 'Comprehensive coverage tailored to your family\u2019s needs, ensuring financial continuity regardless of health events.',
    },
    {
      title: 'Income Protection',
      body: 'Disability and critical illness cover that replaces your earning power when you need it most.',
    },
    {
      title: 'Liability Management',
      body: 'Strategies to protect personal and business assets from creditors, litigation and unforeseen claims.',
    },
    {
      title: 'Business Continuity',
      body: 'Key-person insurance and succession planning to keep your business running through any disruption.',
    },
  ],
  cta: 'Protect your wealth today.',
};

export default function WealthProtection() {
  return <ServicePage content={content} />;
}
