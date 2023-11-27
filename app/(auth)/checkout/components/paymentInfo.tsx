import React from 'react';
import { useForm, Controller } from 'react-hook-form';
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

export default function PaymentInfo({ onContinue } :  {onContinue: () => void} ) {
  const { control, handleSubmit, formState: { isValid } } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    onContinue(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-16 border-gray-200 pt-10 px-1">
      <fieldset>
        <legend className="sr-only">Payment type</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
            <div key={paymentMethod.id} className="flex items-center">
              <Controller
                name="payment-type"
                control={control}
                defaultValue={paymentMethodIdx === 0 ? paymentMethod.id : ''}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      id={paymentMethod.id}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                      {paymentMethod.title}
                    </label>
                  </>
                )}
              />
            </div>
          ))}
        </div>
      </fieldset>

      {/* ... Additional form fields go here ... */}

      <button type="submit" disabled={!isValid} className="mt-6 w-full">
        Continue
      </button>
    </form>
  );
}
