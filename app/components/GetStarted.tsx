'use client'
import React from 'react'
import Link from 'next/link';

const GetStarted = () => {
  const businessPagePath = '/business/setUpBusiness';

  return (
    <Link href={businessPagePath}>
      <button className='mt-6 py-8 px-12 text-xl bg-blue-200 text-black rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring focus:border-pink-700'>
        Get Started
      </button>
    </Link>
  )
}

export default GetStarted