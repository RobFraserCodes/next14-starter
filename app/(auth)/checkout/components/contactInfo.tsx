import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, "Phone number is required"),
  terms: z.boolean().refine(val => val === true, "You must agree to the terms"),
});

export default function ContactInformation({onContinue}: {onContinue: () => void}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: '',
      phone: '',
      terms: false,
    },
  });

  const isValid = form.formState.isValid;

  function onSubmit(values: z.infer<typeof schema>) {
    onContinue();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <h2>Contact information</h2>

      <div className="mt-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder='Your email address' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
      </div>

      <div className="mt-6">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder='Your telephone number' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
      </div>

      <div className="mt-6">
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
          <>
          <FormItem className='space-x-3'>
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <Label htmlFor="term">
              I have read the terms and conditions and agree to the sale of my personal information to the highest bidder.
            </Label>
          </FormItem>
          <FormMessage />

          <Button type="submit" disabled={!isValid} className="mt-6 w-full">
            Continue
          </Button>
          </>
        )}
      />

      </div>


      </form>
    </Form>
  );
}