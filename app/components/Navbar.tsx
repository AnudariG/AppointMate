import React from 'react'
import Login from './Login'
import Image from 'next/image';   // for the logo

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-100 p-4'>
      <div className='mr-4'>
        <Image src="/clock.png" alt="Clock Logo" width={50} height={50} />
      </div>
      <Login />
    </div>
  )
}

export default Navbar