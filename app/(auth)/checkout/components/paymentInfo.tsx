
import React from 'react'
import { CreditCardIcon } from '@heroicons/react/24/outline';

const paymentMethods = [
    {
      id: 'credit-card',
      title: 'Credit card',
      svg: CreditCardIcon,
    },
    {
      id: 'paypal',
      title: 'PayPal',
      svg: CreditCardIcon,
    },
    {
      id: 'sezzle',
      title: 'Sezzle',
      svg: CreditCardIcon,
    },
  ];

export default function PaymentInfo() {
  return (
    <div className="py-16 border-gray-200 pt-10 px-1">
    <fieldset>
      <legend className="sr-only">Payment type</legend>
      <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
          <div key={paymentMethod.id} className="flex items-center">
            {paymentMethodIdx === 0 ? (
              <input
                id={paymentMethod.id}
                name="payment-type"
                type="radio"
                defaultChecked
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            ) : (
              <input
                id={paymentMethod.id}
                name="payment-type"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            )}

            <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
              {paymentMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>

    <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
      <div className="col-span-4">
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
          Card number
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="card-number"
            name="card-number"
            autoComplete="cc-number"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="col-span-4">
        <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
          Name on card
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="name-on-card"
            name="name-on-card"
            autoComplete="cc-name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="col-span-3">
        <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
          Expiration date (MM/YY)
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="expiration-date"
            id="expiration-date"
            autoComplete="cc-exp"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
          CVC
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="cvc"
            id="cvc"
            autoComplete="csc"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
