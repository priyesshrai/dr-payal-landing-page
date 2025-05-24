import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='z-10 absolute w-full bg-primary md:px-20 md:py-4 px-8 py-3 overflow-hidden'>
      <nav className='w-full relative flex items-center justify-between gap-10'>
        <Link href="/">
          <h5 className="block text-zinc-100 text-4xl max-[480px]:text-xl font-bold leading-[1]">
            Dr. Payal Bajaj
          </h5>
          <span className="block text-zinc-100 text-[18px] max-[480px]:text-[12px] leading-[1] font-medium">
            Senior IVF Consultant
          </span>
        </Link>
        <Link href="https://dr-payal-bajaj-beta.vercel.app/" className='relative bg-white text-primary md:px-7 md:py-3 md:text-xl px-3 py-2 text-[14px] font-semibold rounded hover:bg-zinc-100'>
          Visit Website
        </Link>
      </nav>
    </header>
  )
}
