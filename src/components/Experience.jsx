
import { BiSolidDownArrowAlt } from "react-icons/bi";
import KDMSExp from "./KDMSExp";
import Fever19Exp from "./Fever19Exp";


const Experience = () => {

  

  return (
    <div className="w-full flex justify-center sm:px-6 md:px-10 px-4 py-5">
      <div className="w-full max-w-7xl">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10 md:mb-14 font-semibold text-blue-400">
          Professional Experience
        </h2>


        <h2 className="text-xl mb-5 border-b border-gray-400 inline-block pb-1">
          Click on the Tiles Below to read the Professional Work <BiSolidDownArrowAlt className="inline w-10 h-10"/>
        </h2>

        <KDMSExp />
        <hr className="my-6"/>
        <Fever19Exp />

      </div>
    </div>
  )
}

export default Experience
