import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-secondary'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-6xl sm:text-7xl font-bold text-beige'>Frank Timmons</h1>
        <h2 className='text-6xl sm:text-7xl font-bold text-ash-gray'>Full Stack Web-Developer</h2> 
        <p className='text-ash-gray py-4 max-w-[700px] font-semibold text-lg'>I'm someone who loves figuring out how things work and finding ways to make them better. I used to work in art production and logistics, but now I'm working towards becoming a full-stack developer. I really enjoy technical roles where I can use my problem-solving skills to make apps that are fun and engaging for all users.</p>
        <div>
          <button className='text-beige group border-2 px-6 py-3 my-2 flex items-center hover:bg-logo hover:border-logo duration-200'>
            View Work 
            <span className='group-hover:rotate-90 origin-[70%_50%] duration-100'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home