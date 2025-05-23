import React from 'react'

const HomeScreenText = () => {
  return (
    <div className='flex flex-col items-center w-auto mx-6 bg-black rounded-t mt-4 text-center'>
      <h1 className="text-5xl md:text-7xl pt-16 pb-8 w-fit md:w-3/5 font-bold text-white">Innovative supply chain management platform</h1>
      <p className="w-3/4 text-[14px] text-gray-300 py-2">
        Providing a seamless interface that empowers businesses to monitor
        their stock levels in real-time. Plan your inventory, connect to suppliers,
        uncover insights and generate profit.
      </p>

      <button className="bg-yellow-500 rounded text-white h-[3rem] w-[8rem] my-6 cursor-pointer transform transition duration-300 hover:scale-105">
        Get started
      </button>

    </div>
  )
}

export default HomeScreenText
