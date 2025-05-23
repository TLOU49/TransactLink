import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 mx-4 my-6 rounded-md py-6 px-4 flex flex-col items-center text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-900 text-lg">
        <span className="font-bold rounded-full border border-gray-500 px-3 py-1">Transact Link</span>
        <a href="#" className="hover:underline">Terms and Conditions</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>

      <p className="mt-4 text-sm text-gray-700">
        &copy; 2025 Transact Link. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
