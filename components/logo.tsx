import React from 'react'
import Image from 'next/image';
import { siteInfo } from '@/data/site-details';

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <div className='flex'>
            <span className="sr-only">{siteInfo.name}</span>
            <Image 
              className="h-8 w-auto" 
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
              alt="" 
              width={32}
              height={32}
            />
            <h4 className='hidden md:block'>{siteInfo.brand}</h4>
          </div>
        </a>
    </div>
  )
}
