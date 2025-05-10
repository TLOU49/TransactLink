import React from 'react'
import { CiSettings } from "react-icons/ci"

const Steps = () => {
  const steps = [
    { name: "Step 1: Centralization", icon: <CiSettings className='text-9xl animate-spin' /> },
    { name: "Step 2: Organisation", icon: <CiSettings className='text-9xl' /> },
    { name: "Step 3: Automation", icon: <CiSettings className='text-9xl' /> },
    { name: "Step 4: Insights", icon: <CiSettings className='text-9xl' /> },
  ]

  return (
    <div className='flex flex-wrap bg-black mx-6 px-4 w-auto items-center justify-center py-6 overflow-x-auto rounded-b'>
  {steps.map((step, index) => (
    <div
      key={index}
      className="w-full sm:w-1/2 md:w-1/4 text-white flex flex-col bg-gray-700 mx-1 my-2 text-center items-center justify-center py-4 rounded min-w-[200px] transform transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <p className="text-[20px] font-medium">{step.name}</p>
      {step.icon}
    </div>
  ))}
</div>

  )
}

export default Steps
