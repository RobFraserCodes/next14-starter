'use client';

import React, { useState } from 'react'
import { db } from '@/firebase';
import { useSession } from 'next-auth/react';
import { addDoc, collection } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { CreditCardIcon } from '@heroicons/react/20/solid';

export default function CheckoutButton() {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);

    const createCheckoutSession = async (priceId: string) => {
        if (!session?.user.id) return;

        // push document into firestore db
        setLoading(true);
        const docRef = await addDoc(collection(db, 'users', session.user.id, 'checkout_sessions'), {
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });
        // stripe extension on firebase will create a checkout session
  
        // redirect user to checkout page
  
      }
  return (
    <>
        <Button
            onClick={() => createCheckoutSession('price_1JGJZtG8YzqZQY2W0Z0ZQZ1t')}
            disabled={loading}
        >
            <CreditCardIcon className="h-4 w-4 mr-2" />
            Checkout
        </Button>
    </>
  )
}
