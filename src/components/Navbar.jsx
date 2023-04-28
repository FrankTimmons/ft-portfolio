import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-beige z-20">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex font-bold">
        <Link
          className="block"
          activeClass="active"
          to="home"
          smooth={true}
          duration={500}
        >
          <li className="group flex flex-col items-center hover:text-logo">
            HOME
            <div className="bg-primary group-hover:bg-logo flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1"></div>
          </li>
        </Link>
        <Link
          className="block"
          activeClass="active"
          to="skills"
          smooth={true}
          duration={500}
        >
          <li className="group flex flex-col items-center hover:text-logo">
            SKILLS
            <div className="bg-primary group-hover:bg-logo flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1"></div>
          </li>
        </Link>
        <Link
          className="block"
          activeClass="active"
          to="work"
          smooth={true}
          duration={500}
        >
          <li className="group flex flex-col items-center hover:text-logo">
            WORK
            <div className="bg-primary group-hover:bg-logo flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1"></div>
          </li>
        </Link>
        <Link
          className="block"
          activeClass="active"
          to="contact"
          smooth={true}
          duration={500}
        >
          <li className="group flex flex-col items-center hover:text-logo">
            CONTACT
            <div className="bg-primary group-hover:bg-logo flex w-[8px] h-[8px] rounded-[4px] duration-200 mt-1"></div>
          </li>
        </Link>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl font-bold hover:text-logo duration-200">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li className="py-6 text-4xl font-bold hover:text-logo duration-200">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            SKILLS
          </Link>
        </li>
        <li className="py-6 text-4xl font-bold hover:text-logo duration-200">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            WORK
          </Link>
        </li>
        <li className="py-6 text-4xl font-bold hover:text-logo duration-200">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <a
            target="blank"
            className="block w-full text-beige font-bold"
            href="https://www.linkedin.com/in/frank-timmons-pdx/"
          >
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
              LINKEDIN <FaLinkedin size={30} />
            </li>
          </a>
          <a
            target="blank"
            className="block w-full text-beige font-bold"
            href="https://github.com/FrankTimmons"
          >
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
              GITHUB <FaGithub size={30} />
            </li>
          </a>
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
            className="block w-full text-beige font-bold"           
          >
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#BB001B]">
              EMAIL <HiOutlineMail size={30} />
            </li>
          </Link>
          <a
            target="blank"
            className="block w-full text-beige font-bold"
            href="https://drive.google.com/file/d/17YfL78aNl57Vp0v-PhqZwwX1K7dqSIbm/view?usp=sharing"
          >
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0da36a]">
              RESUME <BsFillPersonLinesFill size={30} />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
