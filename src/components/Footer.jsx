import { TbHexagonLetterYFilled } from "react-icons/tb";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import { TbHexagonLetterSFilled } from "react-icons/tb";
import { TbHexagonLetterHFilled } from "react-icons/tb";
import { TbHexagonLetterIFilled } from "react-icons/tb";
import { TbHexagonLetterKFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex items-center justify-center w-full py-10'>
        <div className='w-full max-w-7xl'>

          <div className="grid grid-cols-2 gap-y-5">
            <div className="text-white text-2xl md:text-3xl lg:text-4xl px-2 tracking-wider flex justify-self-start">
                      <TbHexagonLetterYFilled />
                      <TbHexagonLetterAFilled />
                      <TbHexagonLetterSFilled />
                      <TbHexagonLetterHFilled />
                      <TbHexagonLetterIFilled />
                      <TbHexagonLetterKFilled />
            </div>
            <ul className="flex flex-wrap gap-4 justify-self-end">
                    <li className="bg-blue-600 text-white text-sm sm:text-base p-3 rounded-full cursor-pointer hover:bg-white hover:text-blue-600 transition-all duration-300">
                        <FaLinkedin className="w-6 h-6"/>
                    </li>
                    <li className="text-black text-sm sm:text-base p-3 rounded-full cursor-pointer bg-white hover:text-white hover:bg-black transition-all duration-300">
                        <FaGithub className="w-6 h-auto"/>
            
                    </li>
            </ul>

            <p className="text-sm">© Yashik Sehgal's Copyright</p>
            <p className="justify-self-end text-sm">Created with fire in head and trust on myself. </p>

          </div>


          

        </div>
    </div>
  )
}

export default Footer
