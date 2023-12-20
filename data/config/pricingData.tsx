import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '8dbc29d9-44f7-43f3-9651-2e79e900037f',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: 'd1e5af04-487e-4ffa-a956-c5cf3b7f2e47',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
