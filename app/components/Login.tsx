import React from 'react'
import Link from 'next/link'

const Login = () => {
  const businessLoginPath = '/business'
  return (
    <div>
      <Link href={businessLoginPath}>
        <button className='px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-pink-700'>
          Login
        </button>
      </Link>
    </div>
  )
}

export default Login