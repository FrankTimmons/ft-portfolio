import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#124559]'>
      {/* Container */}
      <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#EFF6E0]'>Frank Timmons</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#AEC3B0]'>Full Stack Web-Developer</h2> 
        <p className='text-[#AEC3B0] py-4 max-w-[700px] font-semibold'>I'm someone who loves figuring out how things work and finding ways to make them better. I used to work in art production and logistics, but now I'm working towards becoming a developer. I really enjoy technical roles where I can use my problem-solving skills to make apps that are fun and engaging for users.</p>
        <div>
          <button className='text-[#EFF6E0] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF7373] hover:border-[#FF7373] duration-200'>
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