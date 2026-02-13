import React from "react";

const Projects = () => {
  return (
    <div className="flex w-full justify-center px-4 py-10 bg-white/10 rounded-t-4xl">
      <div className="w-full max-w-7xl">

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 
                        gap-4 md:gap-5 
                        auto-rows-[150px] md:auto-rows-[100px]">

          {/* CARD 1 */}
          <div className="relative group md:row-span-3 overflow-hidden rounded-3xl">

            <div className="absolute inset-0 border-t-[25px] border-l-[25px] 
                            border-white/20 rounded-3xl z-10 pointer-events-none" />

            <img
              src="HeelXBanner.jpg"
              alt="Project 1"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-white/30 
                            opacity-0 group-hover:opacity-100 
                            transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center 
                            opacity-0 group-hover:opacity-100 
                            transition duration-500 z-20">
              <button className="bg-white text-black px-6 py-2 rounded-full 
                                 font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
                View Project
              </button>
            </div>
          </div>


          {/* CARD 2 */}
          <div className="relative group md:row-span-2 overflow-hidden rounded-3xl">

            <div className="absolute inset-0 border-t-[25px] border-l-[25px] 
                            border-white/20 rounded-3xl z-10 pointer-events-none" />

            <img
              src="ConvoX.jpg"
              alt="Project 2"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-white/30 
                            opacity-0 group-hover:opacity-100 
                            transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center 
                            opacity-0 group-hover:opacity-100 
                            transition duration-500 z-20">
              <button className="bg-white text-black px-6 py-2 rounded-full 
                                 font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
                View Project
              </button>
            </div>
          </div>


          {/* CARD 3 */}
          <div className="relative group md:row-span-2 overflow-hidden rounded-3xl">

            <div className="absolute inset-0 border-t-[25px] border-l-[25px] 
                            border-orange-400/20 rounded-3xl z-10 pointer-events-none" />

            <img
              src="PlanX.jpg"
              alt="Project 3"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-white/30 
                            opacity-0 group-hover:opacity-100 
                            transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center 
                            opacity-0 group-hover:opacity-100 
                            transition duration-500 z-20">
              <button className="bg-white text-black px-6 py-2 rounded-full 
                                 font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
                View Project
              </button>
            </div>
          </div>


          {/* CARD 4 */}
          <div className="relative group md:row-span-3 md:col-start-2 md:row-start-3 
                          overflow-hidden rounded-3xl">

            <div className="absolute inset-0 border-t-[25px] border-l-[25px] 
                            border-white/20 rounded-3xl z-10 pointer-events-none" />

            <img
              src="ChatBot.jpg"
              alt="Project 4"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-white/30 
                            opacity-0 group-hover:opacity-100 
                            transition duration-500" />

            <div className="absolute inset-0 flex items-center justify-center 
                            opacity-0 group-hover:opacity-100 
                            transition duration-500 z-20">
              <button className="bg-white text-black px-6 py-2 rounded-full 
                                 font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
                View Project
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
