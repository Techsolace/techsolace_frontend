import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Brand from '@/../public/logo.png';

const Header = () => {
  return (
    <>
        <div className='w-full absolute top-0'>
            <div className='flex justify-center items-center gap-10'>
              <Link href='#' className='font-Secondary text-white'>Projects</Link>
              <Link href='#' className='font-Secondary text-white'>Work</Link>
              <Image src={Brand} alt="Logo" width={300} height={200} />
              <Link href='#' className='font-Secondary text-white'>Team</Link>
              <Link href='#' className='font-Secondary text-white'>Contact</Link>
            </div>
        </div>
    </>
  )
}

export default Header