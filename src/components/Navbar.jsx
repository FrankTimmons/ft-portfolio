import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#01161E] text-[#F2E3DB]'>
      <div>
        <img src={Logo} alt="logo" style={{width:'50px'}}/>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex font-bold'>
        <li className='group flex flex-col items-center hover:text-[#FF7373]'>
          HOME
          <div className='bg-[#01161E] group-hover:bg-[#FF7373] flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1'></div>
        </li>
        <li className='group flex flex-col items-center hover:text-[#FF7373]'>
          SKILLS
          <div className='bg-[#01161E] group-hover:bg-[#FF7373] flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1'></div>
        </li>
        <li className='group flex flex-col items-center hover:text-[#FF7373]'>
          WORK
          <div className='bg-[#01161E] group-hover:bg-[#FF7373] flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1'></div>
        </li>
        <li className='group flex flex-col items-center hover:text-[#FF7373]'>
          CONTACT
          <div className='bg-[#01161E] group-hover:bg-[#FF7373] flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1'></div>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#01161E] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl font-bold'>HOME</li>
        <li className='py-6 text-4xl font-bold'>SKILLS</li>
        <li className='py-6 text-4xl font-bold'>WORK</li>
        <li className='py-6 text-4xl font-bold'>CONTACT</li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a className='flex justify-between items-center w-full text-[#EFF6E0] font-bold' href="https://www.linkedin.com/in/frank-timmons-pdx/">
              LINKEDIN <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a className='flex justify-between items-center w-full text-[#EFF6E0] font-bold' href="https://github.com/FrankTimmons">
              GITHUB <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#BB001B]'>
            <a className='flex justify-between items-center w-full text-[#EFF6E0] font-bold' href="mailto: franktimmonspdx@gmail.com">
              EMAIL <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
