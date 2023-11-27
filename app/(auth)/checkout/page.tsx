'use client'

import React, { useState, useEffect } from 'react';
import { pricing } from "@/data/pricing";
import { useSearchParams } from "next/navigation";
import Logo from '@/components/logo';
import { Session } from 'next-auth';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import ContactInformation from './components/contactInfo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PaymentInfo from './components/paymentInfo';
import ShippingInfo from './components/shippingInfo';

interface Tier {
  id: string;
  name: string;
  description: string;
  href: string;
  features: string[];
  price: {
    monthly: string;
    yearly: string;
  };
}

interface Frequency {
  value: 'monthly' | 'yearly';
  label: string;
  priceSuffix: string;
}

interface CheckoutPageProps {
  session: Session | null;
}

export default function CheckoutPage({ session }: { session: Session | null }) {
  const searchParams = useSearchParams();
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [selectedFrequency, setSelectedFrequency] = useState<Frequency | null>(null);
  const [openAccordionItem, setOpenAccordionItem] = useState('contact-info');

  const goToNextStep = () => {
    if (openAccordionItem === 'contact-info') {
      setOpenAccordionItem('payment-details');
    }
    else if (openAccordionItem === 'payment-details') {
      setOpenAccordionItem('shipping-info');
    }
    else if (openAccordionItem === 'shipping-info') {
      setOpenAccordionItem('billing-address');
    }
    else if (openAccordionItem === 'billing-address') {
      setOpenAccordionItem('review');
    }
  };

  useEffect(() => {
    const tierId = searchParams.get('tier');
    const frequencyValue = searchParams.get('frequency') as "monthly" | "yearly" | null;
  
    if (tierId && frequencyValue) {
      const foundTier = pricing.tiers.find(tier => tier.id === tierId);
  
      if (foundTier) {
        // Adjust the structure to fit the Tier type
        setSelectedTier({
          ...foundTier,
          price: {
            monthly: foundTier.price.monthly,
            yearly: foundTier.price.annually // Map 'annually' to 'yearly'
          }
        });
      } else {
        setSelectedTier(null);
      }
    }
  }, [searchParams]);

  const calculatePriceDetails = (priceStr: string) => {
    if (priceStr === 'Free') {
      return { subtotal: 'Free', tax: 'Free', total: 'Free' };
    }

    const price = parseFloat(priceStr.replace('$', '')); // Remove dollar sign and parse to number
    const tax = price * 0.20; // 20% tax
    const subtotal = price - tax;
    const total = price;

    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };
  }

  if (!selectedTier || !selectedFrequency) {
    return <div>Loading...</div>;
  }

  const { subtotal, tax, total } = calculatePriceDetails(selectedTier.price[selectedFrequency.value]);

  return (
    <div className="bg-background">
      <header className="flex items-center justify-between px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
        <Logo />
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Order summary</h2>

            {/* Displaying selected tier and frequency */}
            <div>
              <h2>Selected Plan: {selectedTier.name}</h2>
              <p>Billing: {selectedFrequency.label}</p>
              <p>Price: {
                selectedTier.price[selectedFrequency.value] === 'Free' 
                  ? 'Free' 
                  : `${selectedTier.price[selectedFrequency.value]} per ${selectedFrequency.priceSuffix}`
              }</p>
            </div>

            {/* Price Breakdown */}
            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>${subtotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd>${tax}</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">${total}</dd>
              </div>
            </dl>

          </div>

          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Payment details</h2>

            {/* Stripe Checkout */}
            <Button
              type="button"
              className="flex w-full items-center justify-center"
            >
              <span className="sr-only">Pay with Stripe</span>
              <CreditCardIcon className="h-4 w-4 mr-2" aria-hidden="true" />
              Quick Checkout with Stripe
            </Button>

            {/* Manual Checkout */}
            <>
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-primary/20" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-sm font-medium text-foreground/50">or</span>
              </div>
            </div>

            <Accordion type='single' collapsible value={openAccordionItem} className='w-full'>
              <AccordionItem value='contact-info'>
                <AccordionTrigger>Contact Information</AccordionTrigger>
                <AccordionContent>
                  <ContactInformation onContinue={goToNextStep} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='payment-details'>
                <AccordionTrigger>Payment Details</AccordionTrigger>
                <AccordionContent>
                  <PaymentInfo onContinue={goToNextStep} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='shipping-info'>
                <AccordionTrigger>Shipping Information</AccordionTrigger>
                <AccordionContent>
                  <ShippingInfo />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='billing-address'>
                <AccordionTrigger>Billing Address</AccordionTrigger>
                <AccordionContent>
                  <div className="py-16 border-gray-200 pt-10">
                    Billing details
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='review'>
                <AccordionTrigger>Review</AccordionTrigger>
                <AccordionContent>
                  <div className="py-16 border-gray-200 pt-10">
                    Review details
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          
          </>

          </div>
        </div>
      </main>
    </div>
  )
}