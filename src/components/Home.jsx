import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-squiggly bg-[length:100%_100%]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <h1 className="text-6xl sm:text-7xl xxs:text-4xl xs:text-5xl font-bold text-primary-text backdrop-blur bg-secondary/75 rounded-3xl w-[fit-content]">
          Frank Timmons
        </h1>
        <h2 className="text-6xl sm:text-7xl xxs:text-4xl xs:text-5xl font-bold text-secondary-text backdrop-blur bg-secondary/75 rounded-3xl w-[fit-content]">
          Full Stack Web-Developer
        </h2>
        <p className="text-secondary-text py-4 max-w-[700px] font-semibold text-lg backdrop-blur bg-secondary/75 rounded-3xl w-[fit-content]">
          I'm someone who loves figuring out how things work and
          how to make them better. I used to work in art production and
          logistics, but now I'm striving towards becoming a full-stack
          developer. I'm eager to be in a technical role where I can grow and
          use my problem-solving skills to make apps that are fun and engaging
          for everyone!
        </p>
        <div>
          <Link
            className="block w-[156px]"
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            <button className="text-primary-text group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow hover:border-yellow duration-200">
              View Work
              <span className="group-hover:rotate-90 origin-[70%_50%] duration-100">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
