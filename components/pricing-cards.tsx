"use client";

import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { pricing } from '@/data/pricing'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import { Tier } from '@/types';

export default function PricingCards() {
    const [frequency, setFrequency] = useState(pricing.frequencies[0])
    const { data: session } = useSession();
    const router = useRouter();

    const handleButtonClick = (tier: Tier) => {
      if (!session) {
        if (tier.name === 'Free') {
          signIn('google', { callbackUrl: '/chat' });
        } else {
          router.push(`/checkout?tier=${tier.id}&frequency=${frequency.value}`);
        }
      } else {
        const checkoutUrl = tier.name === 'Free' ? '/chat' : `/checkout?tier=${tier.id}&frequency=${frequency.value}`;
        router.push(checkoutUrl);
      }
    };    

  return (
    <div className="mx-auto max-w-7xl px-6 sm:mt-16 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="text-base font-semibold leading-7 text-accent">Pricing</h1>
      <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Pricing plans for teams of&nbsp;all&nbsp;sizes
      </p>
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8">
      Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer
      loyalty, and driving sales.
    </p>

    {/* Monthly / Annual Subscription */}
    <div className="mt-16 flex justify-center">
      <RadioGroup
        value={frequency}
        onChange={setFrequency}
        className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5"
      >
        <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
        {pricing.frequencies.map((option) => (
          <RadioGroup.Option
            key={option.value}
            value={option}
            className={({ checked }) =>
              cn(checked ? 'bg-accent' : '', 'cursor-pointer rounded-full px-2.5 py-1')
            }
          >
            <span>{option.label}</span>
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>

    {/* Pricing Cards */}
    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 rounded-xl">
      {pricing.tiers.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            tier.mostPopular ? 'bg-white/5 ring-2 ring-accent' : 'ring-1 ring-white/10',
            'rounded-3xl p-8 xl:p-10'
          )}
        >
          <div className="flex items-center justify-between gap-x-4">
            <h2 id={tier.id} className="text-lg font-semibold leading-8">
              {tier.name}
            </h2>
            {tier.mostPopular ? (
              <p className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold leading-5">
                Most popular
              </p>
            ) : null}
          </div>

          {/* Tier Details */}
          <p className="mt-4 text-sm leading-6">{tier.description}</p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight">
              {tier.price[frequency.value as keyof typeof tier.price]}
            </span>
            <span className="text-sm font-semibold leading-6">{frequency.priceSuffix}</span>
          </p>

          <ul role="list" className="mt-8 space-y-3 text-sm leading-6 xl:mt-10">
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Conditional Button Rendering */}
          {
            !(session && tier.name === 'Free') && (
              <Button
                onClick={() => handleButtonClick(tier)}
                className={cn(tier.mostPopular ? "bg-accent" : "bg-primary", "leading-6 mt-6 text-center w-full")}
              >
                {session ? 'Upgrade' : (tier.name === 'Free' ? 'Sign Up' : 'Purchase Plan')}
              </Button>
            )
          }
        </div>
      ))}
    </div>
  </div>
  )
}
