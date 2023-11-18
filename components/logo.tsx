import React from 'react'
import { siteInfo } from '@/data/site-details';

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <div className='flex space-x-4'>
            <span className="sr-only">{siteInfo.name}</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <h4 className='hidden md:block'>{siteInfo.brand}</h4>
          </div>
        </a>
    </div>
  )
}
