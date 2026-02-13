import { BsStars } from "react-icons/bs";
const LetsConnect = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 my-5">
      <div className="w-full max-w-6xl bg-white/10 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-lg backdrop-blur-md">
        
        {/* Top line */}
        <div className="flex justify-center mb-4">
          <div className="h-1 w-20 bg-blue-400 rounded-full"></div>
        </div>

        {/* Text */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Let&apos;s Connect
          </h2>

          <p className="text-white/70 text-sm sm:text-base">
            I build scalable & user-centric web solutions with <span className="text-blue-300 font-semibold">React</span>, <span className="text-blue-300 font-semibold">Node.js</span>, <span className="text-blue-300 font-semibold">Express.js</span> & <span className="text-blue-300 font-semibold">MongoDB</span>.
          </p>

            <hr className="my-3 border-white/20" />

          <p className="text-white/70 text-sm sm:text-base">
            Open for <span className="text-blue-300 font-semibold">freelance</span> & <span className="text-blue-300 font-semibold">full-time</span> opportunities.
          </p>

          <p className="text-white/70 text-sm sm:text-base">
            Let&apos;s collaborate to build something impactful.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <a
            href="mailto:yashik603@gmail.com"
            className="flex bg-white/10 p-2 sm:p-2 md:p-3 rounded-4xl items-center gap-1 cursor-pointer hover:bg-white hover:text-black transition-all duration-500 text-xs sm:text-sm md:text-base lg:text-lg">
                        <BsStars className="text-xl sm:text-2xl md:text-3xl" /> Mail Me
          </a>
        </div>

        {/* Bottom line */}
        <div className="flex justify-center mt-6">
          <div className="h-1 w-20 bg-blue-300 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default LetsConnect;
