'use client';

import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

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
        return onSnapshot(docRef, snap => {
            const data = snap.data();
            const url = data?.url;
            const error = data?.error;

            if (error) {
                // show error to customer
                // inspect error in console
                alert(`An error occured: ${error.message}`);
                setLoading(false);
            }
            
            // redirect user to checkout page
            if (url) {
                window.location.assign(url);
                setLoading(false);
            }
        }
        );
  
      }

  return (
    <div>checkoutButton</div>
  )
}
