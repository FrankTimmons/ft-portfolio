import React from 'react'
import GrindTime from '../assets/grindtime.png'
import GunplaStore from '../assets/gunplastore.png'
import Netsuite from '../assets/oracle-netsuite-logo.png'


const Work = () => {
  return (
    <div name='work' className='py-6 w-full md:h-screen md:bg-shapes bg-secondary bg-center bg-cover'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow'>Work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
         
          <div 
            style={{ backgroundImage: `url(${Netsuite})` }} 
            className='shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 group-hover:bg-primary rounded-md text-center'>
              <div className='text-2xl rounded-lg px-4 py-3 m-2 text-secondary font-bold'>
                Netsuite Automation
              </div>
              <div className='text-1xl rounded-lg px-4 py-3 mt-2 text-secondary font-bold'>
                Python, Selenium
              </div>
              <div className='pt-4'>
                {/* <a target='blank' href="">
                  <button className='rounded-lg px-4 py-3 m-2 bg-ash-gray text-primary font-bold text-lg hover:bg-primary hover:text-beige duration-300 border-4 border-primary'>
                    Demo
                  </button>
                </a> */}
                <a target='blank' href="https://github.com/FrankTimmons/wk-netsuite-automation">
                  <button className='rounded-lg px-4 py-3 mb-2 bg-ash-gray text-secondary font-bold text-lg  hover:bg-secondary hover:text-primary duration-300 border-4 border-secondary'>
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