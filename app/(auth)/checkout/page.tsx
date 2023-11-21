'use client'

import React, { useState, useEffect } from 'react';
import { pricing } from "@/data/pricing";
import { useSearchParams } from "next/navigation";
import Logo from '@/components/logo';
import UserMenu from '@/components/user-menu';
import { Session } from 'next-auth';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import ContactInformation from './components/contactInfo';

const CheckoutSteps = {
  CONTACT_INFO: 'contactInfo',
  PAYMENT_DETAILS: 'paymentDetails',
  SHIPPING_ADDRESS: 'shippingAddress',
  BILLING_ADDRESS: 'billingAddress',
  REVIEW: 'review',
};

export default function CheckoutPage({ session }: { session: Session | null }) {
  const searchParams = useSearchParams();
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [currentStep, setCurrentStep] = useState(CheckoutSteps.CONTACT_INFO);

  const goToNextStep = () => {
    switch (currentStep) {
      case CheckoutSteps.CONTACT_INFO:
        setCurrentStep(CheckoutSteps.PAYMENT_DETAILS);
        break;
      case CheckoutSteps.PAYMENT_DETAILS:
        setCurrentStep(CheckoutSteps.SHIPPING_ADDRESS);
        break;
      case CheckoutSteps.SHIPPING_ADDRESS:
        setCurrentStep(CheckoutSteps.BILLING_ADDRESS);
        break;
      case CheckoutSteps.BILLING_ADDRESS:
        setCurrentStep(CheckoutSteps.REVIEW);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const tierId = searchParams.get('tier');
    const frequencyValue = searchParams.get('frequency');

    if (tierId && frequencyValue) {
      const foundTier = pricing.tiers.find(tier => tier.id === tierId);
      const foundFrequency = pricing.frequencies.find(frequency => frequency.value === frequencyValue);
      
      setSelectedTier(foundTier);
      setSelectedFrequency(foundFrequency);
    }
  }, [searchParams]);

  const calculatePriceDetails = (priceStr) => {
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
        <UserMenu session={session} />
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
            <Button
              type="button"
              className="flex w-full items-center justify-center"
            >
              <span className="sr-only">Pay with Stripe</span>
              <CreditCardIcon className="h-4 w-4 mr-2" aria-hidden="true" />
              Quick Checkout with Stripe
            </Button>

            {/* Seperator */}
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-medium text-gray-500">or</span>
              </div>
            </div>

            {/* Manual Checkout */}
            {currentStep === CheckoutSteps.CONTACT_INFO && (
              <ContactInformation onContinue={goToNextStep} />
            )}

            <div className="mt-10 divide-y divide-gray-200 border-b border-t border-gray-200">
              
              {currentStep === CheckoutSteps.PAYMENT_DETAILS && (
              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Payment details
              </button>
              )}

              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Shipping address
              </button>

              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Billing address
              </button>

              <button
                type="button"
                disabled
                className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
              >
                Review
              </button>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}