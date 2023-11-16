"use client";

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { mainNavigation, siteInfo } from '@/data/site-details';
import Logo from './logo';
import { ModeToggle } from './theme-toggle';
import { Button } from './ui/button';
import UserMenu from './user-menu';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import CreateChatButton from './create-chat-button';

export default function Header( { session } : { session: Session | null } ) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8 bg-background" aria-label="Global">
        <Logo />
        <div className="hidden lg:flex lg:gap-x-12">
          {mainNavigation.map((item) => (
            <a key={item.title} href={item.path} className="text-sm font-semibold leading-6">
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-4">
            { session ? (
              <>
                <CreateChatButton />
                <Link href="/chat" prefetch={false}>
                  <Button variant={"ghost"}>
                    <ChatBubbleBottomCenterIcon className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </Link>
                  <UserMenu session={session}/>
              </>
            ) : (
              <>
                <Link href="#" >
                  <Button variant={"ghost"} onClick={() => signIn()}>Log in</Button>
                </Link>
                <Link href="/register"  className='hidden md:block'>
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
            <ModeToggle />
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
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{siteInfo.name}</span>
              <Logo />
            </Link>
            <Button
              type="button"
              className="ml-auto"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-primary-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                { session ? (
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                  >
                    <Button onClick={() => signOut()}>Sign Out</Button>
                  </Link>
                  ) : (
                  <Link href="#" >
                    <Button onClick={() => signIn()}>Log in</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}