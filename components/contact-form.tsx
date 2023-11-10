import Image from "next/image"
import React from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

export default function ContactForm() {
    return (
      <div className="relative">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <Image
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
            alt=""
            width={2560}
            height={3413}
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight">Lets work together</h2>
              <p className="mt-2 text-lg leading-8">
                Proin volutpat consequat porttitor cras nullam gravida at orci molestie a eu arcu sed ut tincidunt magna.
              </p>
              <form action="#" method="POST" className="mt-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="first-name">First name</Label>
                    <div className="mt-2.5">
                      <Input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last name</Label>
                    <div className="mt-2.5">
                      <Input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="mt-2.5">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="company">Company</Label>
                    <div className="mt-2.5">
                      <Input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organisation"                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <div className="flex">
                        <Label htmlFor="phone">
                          Phone
                        </Label>
                        <p id="phone-description" className="text-gray-400">
                          Optional
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <Label htmlFor="message">
                        How can we help you?
                      </Label>
                      <p id="message-description">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <Button
                    type="submit"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  