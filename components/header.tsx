"use client";

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BeakerIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { mainNavigation, siteInfo } from '@/data/site-details';
import Logo from './logo';
import { ModeToggle } from './theme-toggle';
import { Button } from './ui/button';
import UserMenu from './user-menu';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';

export default function Header( { session } : { session: Session | null } ) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <Logo />
        <div className="hidden lg:flex lg:gap-x-12">
          {mainNavigation.map((item) => (
            <a key={item.title} href={item.path} className="text-sm font-semibold leading-6">
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
            <ModeToggle />
            { session ? (
              <>
              <Link href="/chat">
                <ChatBubbleBottomCenterIcon className="h-6 w-6" aria-hidden="true" />
              </Link>
                <UserMenu session={session}/>
              </>
            ) : (
              <>
                <Link href="#" >
                  <Button variant={"ghost"} onClick={() => signIn()}>Log in</Button>
                </Link>
                <Link href="#"  className='hidden md:block'>
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
        </div>
        <div className="flex lg:hidden">
          <Button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{siteInfo.name}</span>
              <BeakerIcon className="h-8 w-auto text-slate-900" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainNavigation.map((item) => (
                  <a
                    key={item.title}
                    href={item.path}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}