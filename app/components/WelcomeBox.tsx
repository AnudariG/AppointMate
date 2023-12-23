import React from 'react'
import GetStarted from './GetStarted'

const WelcomeBox = () => {
  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className='text-2xl font-bold mb-1'>
        Welcome to AppointMate
      </h1>
      <h3 className='mt-0 mb-5'>
        Fast and easy scheduling solution
      </h3>
      <GetStarted />
    </div>
  )
}

export default WelcomeBox