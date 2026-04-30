import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Wealth Distribution',
  description:
    'Ensure your legacy is transferred efficiently and according to your wishes through IPP\u2019s estate and trust planning.',
};

const content = {
  num: '04',
  title: 'Wealth Distribution',
  subtitle: 'Your legacy, your wishes.',
  intro:
    'The final pillar of financial success is ensuring that the wealth you\u2019ve built is distributed according to your wishes \u2014 efficiently, privately and with minimal friction. IPP\u2019s Wealth Distribution service covers estate planning, trust structures and intergenerational wealth transfer.',
  pillars: [
    {
      title: 'Estate Planning',
      body: 'Wills, trusts and legal structures that ensure your assets pass to the right people at the right time.',
    },
    {
      title: 'Trust Structures',
      body: 'Revocable and irrevocable trusts designed to protect assets, provide for dependants and minimise estate duties.',
    },
    {
      title: 'Intergenerational Transfer',
      body: 'Strategies to pass wealth smoothly across generations while preserving family harmony and values.',
    },
    {
      title: 'Charitable Giving',
      body: 'Philanthropic structures that allow you to give back meaningfully while optimising tax outcomes.',
    },
  ],
  cta: 'Plan your legacy today.',
};

export default function WealthDistribution() {
  return <ServicePage content={content} />;
}
