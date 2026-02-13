import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { FaSitemap } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const KnowYourDeveloper = () => {

  const tech = [
    {
    lanIcon: <FaHtml5 className="w-8 h-8" />,
    language: "HTML",
    bg: "bg-[#E34F26] text-white",
  },
  {
    lanIcon: <IoLogoCss3  className="w-8 h-8" />,
    language: "CSS",
    bg: "bg-[#1572B6] text-white",
  },
  {
    lanIcon: <IoLogoJavascript className="w-8 h-8" />,
    language: "JavaScript",
    bg: "bg-yellow-400 text-black",
  },
  {
    lanIcon: <RiReactjsLine className="w-8 h-8" />,
    language: "ReactJs",
    bg: "bg-blue-500 text-white",
  },
  {
    lanIcon: <SiExpress className="w-8 h-8" />,
    language: "ExpressJs",
    bg: "bg-gray-700 text-white",
  },
  {
    lanIcon: <RiNodejsLine className="w-8 h-8" />,
    language: "NodeJs",
    bg: "bg-green-600 text-white",
  },
  {
    lanIcon: <DiMongodb className="w-8 h-8" />,
    language: "MongoDB",
    bg: "bg-green-500 text-black",
  },
  {
    lanIcon: <FaSitemap className="w-8 h-8" />,
    language: "System Design",
    bg: "bg-purple-600 text-white",
  },
  {
    lanIcon: <LuBrainCircuit className="w-8 h-8" />,
    language: "Data Structures & Algorithms",
    bg: "bg-pink-600 text-white",
  },
];


  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10 md:mb-14 font-semibold">
          Know Your Developer
        </h2>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ================= LEFT CARD ================= */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 lg:w-[40%]">

            {/* Image */}
            <div className="relative">
              <img
                src="YashikImage.jpg"
                alt="Yashik"
                className="w-full rounded-2xl object-cover"
              />

              {/* Availability Badge */}
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center gap-2 backdrop-blur-md">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Available for Work
              </span>
            </div>

            {/* Name */}
            <h3 className="text-xl sm:text-2xl mt-6">
              Hi, This is Yashik.
            </h3>

            <hr className="my-3 border-white/20" />
            <span className="flex items-center gap-2"><MdLocationPin className="inline"/> Fazilka, Punjab, 152123 </span>
            <hr className="my-3 border-white/20" />

            <span className="flex items-center gap-2"><FaPhoneAlt className="inline"/> +91 97798-30088</span>
            <hr className="my-3 border-white/20" />
            <span className="flex items-center gap-2"><MdEmail className="inline"/>yashik603@gmail.com</span>
            <hr className="my-3 border-white/20" />

            {/* Social Links */}
            <ul className="flex flex-wrap gap-4">
              <li className="bg-blue-600 text-white text-sm sm:text-base p-3 rounded-full cursor-pointer hover:bg-white hover:text-blue-600 transition-all duration-300">
                <FaLinkedin className="w-6 h-6"/>
              </li>
              <li className="text-black text-sm sm:text-base p-3 rounded-full cursor-pointer bg-white hover:text-white hover:bg-black transition-all duration-300">
                <FaGithub className="w-6 h-auto"/>
              </li>
            </ul>

            <hr className="my-3 border-white/20" />

            {/* Resume Button */}
            <button className='bg-linear-to-r from-black to-bg-white/10 p-3 rounded-4xl cursor-pointer hover:bg-white hover:text-black transition-all duration-500 w-45 text-center font-bold'>Resume</button>

          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6">

            {/* <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Skills & Expertise
            </h3> */}

            <p className="text-gray-300 text-md sm:text-base md:text-lg leading-relaxed mb-6">
              I am from <span className="text-white/75 font-bold">Fazilka</span>, Punjab, with a background in <span className="text-white/85 font-bold">B.Sc. in Physics</span>.
                <br /><br />
                With over <span className="text-white/85 font-bold">6 years in the tech industry</span>, my professional journey began at <span className="text-white/85 font-bold">KDMS</span>, where I worked for <span className="text-white/85 font-bold">5 years as a Web Administrator</span>. During this time, I managed website operations, handled layout updates, promotional campaigns, and analyzed traffic performance using Google Analytics.
                <br /><br />
                Later, I transitioned into a development-focused role at <span className="text-white/85 font-bold">Fever 19</span> as a <span className="text-white/85 font-bold">Full Stack Developer</span>, where I built interactive frontends using React and developed APIs with Node.js.
                <br /><br />
                <span className="text-white/85 font-bold">Recently</span>, I took a short break to <span className="text-white/85 font-bold">upskill myself</span> and master advanced development concepts <span className="text-white/85 font-bold">including system design and DSA</span>. Now, I am ready to join the workforce again with a stronger grip on Full Stack Development.
            </p>

              <hr className="bg-white/30 my-5" />

              {/* Companies Grid */}

                <div className="flex gap-8 items-center my-5">
                  {
                    ['kdms.png', 'Fever19.jpg'].map(
                      (image, index) => {
                        return <img src={image} alt={image} key={index} className="sm:w-40 w-35 h-12 sm:h-14 rounded-4xl" />
                      }
                    )
                  }
                </div>
                
                <hr className="bg-white/30 my-5" />
                
            {/* Skills Grid */}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tech.map((tech, index) => (
                <div
                  key={index}
                  className={`${tech.bg} 
                  rounded-sm p-1 flex flex-col items-center justify-center text-center gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer`}
                >
                  <span>{tech.lanIcon}</span>
                  <span className="text-sm sm:text-base font-semibold wrap-break-word">
                    {tech.language}
                  </span>
                </div>
              ))}
            </div>




            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Product Design Understanding", "System Design Understanding", "Performance Focused", "Data-Driven", "Analytical Thinking", "Responsive Design"].map(
                (skill, index) => (
                  <div
                    key={index}
                    className="bg-black/40 text-center py-2 rounded-lg text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </div>
                )
              )}
            </div> */}

          </div>

        </div>
      </div>
    </div>
  );
};

export default KnowYourDeveloper;
