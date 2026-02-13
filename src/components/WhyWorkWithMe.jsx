import { FaCheck } from "react-icons/fa6";
import { MdHexagon } from "react-icons/md";


const WhyWorkWithMe = () => {

  const whyHireMe = [
  {
    strength: "Self-Taught Full-Stack Developer",
    point1: "Mastered MERN stack independently without a formal CS degree.",
    point2: "Quickly learns new tools, frameworks, and best practices."
  },
  {
    strength: "Science Background Advantage",
    point1: "Strong analytical and logical thinking skills.",
    point2: "Approaches problems methodically and systematically."
  },
  {
    strength: "5+ Years Web Administration",
    point1: "Managed website performance, uptime, and security.",
    point2: "Experienced in traffic analysis and optimization using analytics tools."
  },
  {
    strength: "Full-Stack Development Experience",
    point1: "Built interactive frontends with React and dynamic backends with Node.js.",
    point2: "Created APIs and ensured seamless frontend-backend integration."
  },
  {
    strength: "End-to-End System Understanding",
    point1: "Designed robust, scalable systems considering future growth.",
    point2: "Experienced in debugging, optimizing, and maintaining full applications."
  },
  {
    strength: "Proven Growth & Responsibility",
    point1: "Demonstrated consistent career growth and skill improvement.",
    point2: "Reliable team member who takes ownership of projects and delivers results."
  }
];



  return (
    <div className="w-full flex justify-center bg-white/10 px-4 py-8 sm:px-6 md:px-10 lg:px-20 rounded-t-4xl">
      <div className="w-full max-w-7xl">

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6 sm:mb-10 md:mb-14 font-semibold text-orange-200">
            Why Work With Me?
          </h2>


        <div className="grid sm:grid-cols-2 sm:gap-y-3">

          {
            whyHireMe.map((strength, index) => {
              
               // Conditional border for 2nd, 4th, 6th items (index 1,3,5)
              const borderClass =
                (index + 1) % 2 === 0
                  ? "border-l-4 border-orange-300 pl-4" // left border + padding
                  : "";
                return(
                  <div key={index} className={`${borderClass} flex-1 flex flex-col gap-3 p-4 sm:p-8 md:p-10 mb-6 sm:mb-8 sm:gap-4 bg-black rounded-2xl hover:scale-95 cursor-pointer transition-all ease-in-out duration-300`}>
                  
                  <div className="flex gap-3 items-center">
                    <FaCheck className="w-7 h-7 sm:w-8 sm:h-8 p-2 rounded-full bg-white/10" />
                    <h3 className="font-bold text-[18px] sm:text-xl md:text-2xl text-orange-300">
                      {strength.strength}
                    </h3>
                  </div>


                    <ul className="text-md md:text-lg text-gray-300 leading-relaxed flex flex-col gap-5">
                      <li className="flex items-center gap-2"><MdHexagon /> {strength.point1}</li>
                      <li className="flex items-center gap-2"><MdHexagon /> {strength.point2}</li>
                    </ul>
                </div>
                )

            })
          }

        </div>
        


        
        

      </div>
    </div>
  );
};

export default WhyWorkWithMe;
