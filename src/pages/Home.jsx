import React from 'react'
import HomeScreenText from '../components/HomeScreenText'
import Steps from '../components/Steps'
import Features from '../components/Features'
import WhoWeServe from '../components/WhoWeServe'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-auto bg-white justify-center'>
      <HomeScreenText/>
      <Steps/>
      <Features/>
      <WhoWeServe/>
    </div>
  )
}

export default Home
