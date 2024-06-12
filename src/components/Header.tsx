import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <div className='w-full p-4'>
            <div className='max-w-[1200px] m-auto'>
                <div className='flex flex-wrap'>
                    <div className='flex-[1]'>
                        <h1>Logo</h1>
                    </div>
                    <div className='flex-[1]'>
                        <nav>
                            <Link href='#'>Service</Link>
                        </nav>
                    </div>
                    <div className='flex-[1]'>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header