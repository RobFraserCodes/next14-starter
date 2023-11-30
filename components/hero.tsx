import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Screenshot from './screenshot'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset ring-prmiary/10">
                      Whats new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6">
                      <span>Just shipped v0.1.0</span>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                  Chat with anyone, anywhere!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  You speak your language, they speak theirs. We translate it all. 
                  No more language barriers in your way. 
                  <Link href='/chat'><span className='text-primary'> Let AI do the work for you.</span></Link>
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link 
                    href="/chat"><Button>Get Started</Button></Link>
                  <Link href="/pricing" className="text-sm font-semibold leading-6">
                    View Pricing <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <Screenshot />
          
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background sm:h-32" />
      </div>
    </>
  )
}