import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-beige z-20'>
      <div>
        <img src={Logo} alt="logo" style={{width:'50px'}}/>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex font-bold'>
        <li className='group flex flex-col items-center hover:text-logo'>
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            HOME
          </Link>
          <div className='bg-primary group-hover:bg-logo flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1'></div>
        </li>
        <li className='group flex flex-col items-center hover:text-logo'>
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
          <div className='bg-primary group-hover:bg-logo flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1'></div>
        </li>
        <li className='group flex flex-col items-center hover:text-logo'>
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            WORK
          </Link>
          <div className='bg-primary group-hover:bg-logo flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1'></div>
        </li>
        <li className='group flex flex-col items-center hover:text-logo'>
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
          <div className='bg-primary group-hover:bg-logo flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1'></div>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl font-bold hover:text-logo duration-200'>
          <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className='py-6 text-4xl font-bold hover:text-logo duration-200'>
          <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className='py-6 text-4xl font-bold hover:text-logo duration-200'>
          <Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500}>
            WORK
          </Link>
        </li>
        <li className='py-6 text-4xl font-bold hover:text-logo duration-200'>
          <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a target='blank' className='flex justify-between items-center w-full text-beige font-bold' href="https://www.linkedin.com/in/frank-timmons-pdx/">
              LINKEDIN <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a target='blank' className='flex justify-between items-center w-full text-beige font-bold' href="https://github.com/FrankTimmons">
              GITHUB <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#BB001B]'>
            <a target='blank' className='flex justify-between items-center w-full text-beige font-bold' href="mailto: franktimmonspdx@gmail.com">
              EMAIL <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0da36a]'>
            <a target='blank' className='flex justify-between items-center w-full text-beige font-bold' href="https://www.canva.com/design/DAFM5OT8Yfw/x_4Hh42MxGszfokSNnuMLw/view?utm_content=DAFM5OT8Yfw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
              RESUME <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
