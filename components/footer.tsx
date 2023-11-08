import React from 'react'
import { footerNavigation } from '@/data/site-details'
import Logo from './logo'
import { siteInfo } from '@/data/site-details';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mx-auto max-w-7xl overflow-hidden px-6 pb-20 sm:mt-20 sm:pb-24 lg:px-8 justify-center">
            <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {footerNavigation.main.map((item) => (
                <div key={item.name} className="pb-6">
                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    {item.name}
                </a>
                </div>
            ))}
            </nav>
            <div className='flex justify-center items-center p-8'>
                <Logo />
            </div>
            <div className="mt-10 flex justify-center space-x-10">
            {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                </a>
            ))}
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; {currentYear} {siteInfo.name}. All rights reserved.
            </p>
        </footer>
    )
}
