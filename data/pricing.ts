export const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: 'Free',
      id: 'tier-free',
      href: '#',
      price: { monthly: 'Free', annually: 'Free' },
      description: 'Basic features for occasional translation needs.',
      features: [
        'Up to 10,000 words per month',
        'Supports 2 languages',
        'Standard translation algorithms',
        'Community support',
      ],
      mostPopular: false,
    },
    {
      name: 'Startup',
      id: 'tier-startup',
      href: '#',
      price: { monthly: '$30', annually: '$288' },
      description: 'Comprehensive tools for growing translation businesses.',
      features: [
        'Up to 500,000 words per month',
        'Supports 20 languages',
        'API access',
        'Priority email support',
        'Basic analytics',
      ],
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      price: { monthly: '$60', annually: '$576' },
      description: 'Full suite for large-scale translation projects and larger companies.',
      features: [
        'Unlimited words',
        'Supports all available languages',
        'Advanced API access',
        'Dedicated account manager',
        'Advanced analytics and reporting',
        '24/7 priority support',
      ],
      mostPopular: false,
    },
  ],
}