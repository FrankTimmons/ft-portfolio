import React from 'react'
import GrindTime from '../assets/grindtime.png'
import GunplaStore from '../assets/gunplastore.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-beige bg-secondary'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-beige border-logo'>Work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
         
          <div 
            style={{ backgroundImage: `url(${GrindTime})` }} 
            className='shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl rounded-lg px-4 py-3 m-2 bg-secondary text-beige font-bold'>
                Grind Time
              </span>
              <div className='pt-8'>
                <a href="">
                  <button className='rounded-lg px-4 py-3 m-2 bg-ash-gray text-primary font-bold text-lg hover:bg-primary hover:text-beige duration-300 border-4 border-primary'>
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className='rounded-lg px-4 py-3 m-2 bg-ash-gray text-primary font-bold text-lg  hover:bg-primary hover:text-beige duration-300 border-4 border-primary'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div 
            style={{ backgroundImage: `url(${GunplaStore})` }} 
            className='shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl rounded-lg px-4 py-3 m-2 bg-secondary text-beige font-bold'>
                Gunpla Store
              </span>
              <div className='pt-8'>
                <a href="">
                  <button className='rounded-lg px-4 py-3 m-2 bg-ash-gray text-primary font-bold text-lg hover:bg-primary hover:text-beige duration-300 border-4 border-primary'>
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className='rounded-lg px-4 py-3 m-2 bg-ash-gray text-primary font-bold text-lg  hover:bg-primary hover:text-beige duration-300 border-4 border-primary'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Work