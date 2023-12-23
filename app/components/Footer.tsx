import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>&copy; 2023 AppointMate</p>
      <div className="mt-2">
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/contact">Contact </a>
      </div>
    </footer>
  )
}

export default Footer