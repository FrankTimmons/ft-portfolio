import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import FIREBASE from '../assets/firebase.png'
import CSHARP from '../assets/csharp.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/react.png'
import MONGODB from '../assets/mongodb.png'
import NODEJS from '../assets/NodeJs.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-dots bg-secondary bg-center bg-cover text-primary-text'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen z-10'>

        <div className='backdrop-blur bg-secondary/75 rounded-3xl w-[fit-content]'> 
          <p className='text-4xl font-bold inline border-b-4 border-yellow'>Skills</p>
          <p className='py-4 text-2xl'>The technologies I'm most proficient in:</p>
        </div>
      
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-semibold'>
          <div className='shadow-md shadow-primary hover:scale-110 duration-500 py-4 rounded-lg bg-secondary'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
            <p>HTML</p>
          </div>
          <div className='shadow-md shadow-primary hover:scale-110 duration-500 py-4 rounded-lg bg-secondary'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML Icon" />
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-primary hover:scale-110 duration-500 py-4 rounded-lg bg-secondary'>
            <img className='w-20 mx-auto' src={JS} alt="HTML Icon" />
            <p>JS</p>
          </div>
          <div className='shadow-md shadow-primary hover:scale-110 duration-500 py-4 rounded-lg bg-secondary'>
            <img className='w-20 mx-auto' src={REACT} alt="HTML Icon" />
            <p>REACT</p>
          </div>
          <div className='shadow-md shadow-primary hover:scale-110 duration-500 py-4 rounded-lg bg-secondary'>
            <img className='w-20 h-auto mx-auto' src={NODEJS} alt="HTML Icon" />
            <p>NODE.JS</p>
          </div>
          <div className='shadow-md shadow-primary hover:scale-110 duration-500 py-4 rounded-lg bg-secondary'>
            <img className='w-20 mx-auto' src={CSHARP} alt="HTML Icon" />
            <p>C#</p>
          </div>
          <div className='shadow-md shadow-primary hover:scale-110 duration-500 py-4 rounded-lg bg-secondary'>
            <img className='w-20 mx-auto' src={FIREBASE} alt="HTML Icon" />
            <p>FIREBASE</p>
          </div>
          <div className='shadow-md shadow-primary hover:scale-110 duration-500 py-4 rounded-lg bg-secondary'>
            <img className='w-20 mx-auto' src={MONGODB} alt="HTML Icon" />
            <p>MONGODB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills