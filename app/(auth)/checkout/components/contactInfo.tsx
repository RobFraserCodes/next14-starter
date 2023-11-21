'use client'

import React, {useState} from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function ContactInformation({onContinue}: {onContinue: () => void}) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [terms, setTerms] = useState(false);
    const [isContinueEnabled, setIsContinueEnabled] = useState(false);
  
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleTermsChange = (e) => {
        setTerms(true);
        checkFormValidity();
    };
  
    const checkFormValidity = () => {
      if (email && phone ) {
        setIsContinueEnabled(true);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Store user data and open payment details
      if (isContinueEnabled) {
        onContinue();
      }
    };

  return (
    <>
    <form className="mt-6" onSubmit={handleSubmit}>
    <h2>Contact information</h2>

    <div className="mt-6">
      <Label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
        Email address
      </Label>
      <div className="mt-1">
        <Input
          type="email"
          id="email-address"
          name="email-address"
          autoComplete="email"
          onChange={handleEmailChange}
        />
      </div>
    </div>

    <div className="mt-6">
      <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Phone number
      </Label>
      <div className="mt-1">
        <Input
          type="text"
          name="phone"
          id="phone"
          autoComplete="tel"
          onChange={handlePhoneChange}
        />
      </div>
    </div>

    <div className="mt-6 flex space-x-2">
      <div className="flex h-5 items-center">
        <Checkbox
          id="terms"
          name="terms"
          onClick={handleTermsChange}
        />
      </div>
      <Label htmlFor="terms" className="text-sm text-gray-500">
        I have read the terms and conditions and agree to the sale of my personal information to the highest
        bidder.
      </Label>
    </div>

    <Button
      type="submit"
      disabled={!isContinueEnabled}
      className={`mt-6 w-full ${isContinueEnabled ? 'cursor-pointer text-white bg-primary' : 'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500'}`}
      onSubmit={handleSubmit}
      >
      Continue
    </Button>
  </form>
  </>

  )
}