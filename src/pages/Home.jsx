import React from 'react'
import HomeScreenText from '../components/HomeScreenText'
import Steps from '../components/Steps'
import Features from '../components/Features'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-auto bg-white justify-center'>
      <HomeScreenText/>
      <Steps/>
      <Features/>
    </div>
  )
}

export default Home
