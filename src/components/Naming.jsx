import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";
import { FaMousePointer } from "react-icons/fa";
import { TbHexagonLetterYFilled } from "react-icons/tb";
import { IoCheckmarkCircleSharp } from "react-icons/io5";



const Naming = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      
      <div className="flex flex-col md:flex-row gap-8 justify-center w-full md:w-[75%] items-start md:items-center">

        {/* About Section */}
        <div className="about w-full md:w-[60%] p-4 sm:p-6 md:p-10 flex flex-col gap-6">

          {/* Tag */}
          

          {/* Name + Arrow */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-1 relative text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]">
            <span><TbHexagonLetterYFilled /></span>
            <span className="text-white/50">Sehgal</span>
            <div
              className="relative flex items-center gap-2"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {/* <FaArrowRightLong className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-b from-white/20 p-2 rounded-full -rotate-45 cursor-pointer transition-all duration-500 hover:text-black hover:bg-white/30" /> */}
              <IoCheckmarkCircleSharp className="w-8 h-8 font-bold"/>

            </div>
          </div>

          <span className="inline-flex w-fit items-center gap-3 px-4 py-2 bg-linear-to-b from-white/20 to-black rounded-full font-bold text-[14px] sm:text-lg md:text-2xl">
                <PiDotsNineBold className="h-6 w-6 sm:h-9 sm:w-9" />
                Full Stack Developer
              </span>
          {/* Description */}
          <div className="text-white/60  text-md sm:text-sm md:text-[18px] lg:text-[18px] w-full md:w-[80%]">
            
           <p className="leading-relaxed">
  Hi, I’m Yashik — a{" "}
  <span className="text-white/85 font-bold">
    Full Stack Developer
  </span>{" "}
  with over{" "}
  <span className="text-white/85 font-bold">
    6 years in web development
  </span>.
  <br /><br />
  I bring{" "}
  <span className="text-white/85 font-bold">
    5 years of expertise in web administration
  </span>{" "}
  and{" "}
  <span className="text-white/85 font-bold">
    1.5 years of Mern Stack experience
  </span>{" "}
  developing web pages and APIs using{" "}
  <span className="text-white/85 font-bold">
    React, Node.js, Express.js and Mongo DB 
  </span>.
  <br /><br />
  I focus on building{" "}
  <span className="text-white/85 font-bold">
    scalable, production-ready applications
  </span>{" "}
  with clean architecture and optimized performance.
</p>




          </div>
        </div>

        {/* Quote Section */}
        <div className="quote w-full md:w-[40%] flex items-center gap-5 justify-start md:justify-end animation-slow-bounce">
          <div className="w-full md:w-[60%] p-4 sm:p-5 bg-neutral-800 rounded-2xl rotate-6 text-base sm:text-lg md:text-xl sm:w-">
            <p>"A mind that sees limits as its enemy, rewrites the story of its bloodline."</p>
            <span className="float-right text-white/50 text-xs sm:text-sm md:text-base">~ Yashik Sehgal</span>
          </div>
          <FaMousePointer className="text-xl sm:text-2xl text-white/90"/>
        </div>

      </div>
    </div>
  );
};

export default Naming;


