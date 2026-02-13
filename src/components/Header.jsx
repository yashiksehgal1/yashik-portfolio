import { BsStars } from "react-icons/bs";
import { TbHexagonLetterYFilled } from "react-icons/tb";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import { TbHexagonLetterSFilled } from "react-icons/tb";
import { TbHexagonLetterHFilled } from "react-icons/tb";
import { TbHexagonLetterIFilled } from "react-icons/tb";
import { TbHexagonLetterKFilled } from "react-icons/tb";

const Header = ({ onKnowClick, onMailMeClick }) => {
  return (
    <div className="fixed top-5 w-full flex justify-center z-50 px-2 sm:px-4">
      <div className="bg-white/10 backdrop-blur-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[60%] rounded-full text-white/50 p-2 sm:p-3 md:p-4 flex flex-row justify-between items-center gap-2">

        {/* Logo */}
        <div className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl px-2 tracking-wider flex">
          <TbHexagonLetterYFilled />
          <TbHexagonLetterAFilled />
          <TbHexagonLetterSFilled />
          <TbHexagonLetterHFilled />
          <TbHexagonLetterIFilled />
          <TbHexagonLetterKFilled />
        </div>

        {/* Menu */}
        <ul className="flex flex-row gap-2 sm:gap-3 md:gap-5 text-xs sm:text-sm md:text-base lg:text-xl items-center">
          <li className="cursor-pointer hover:text-white transition-all duration-500"  onClick={onKnowClick}>
            Know me
          </li>
          {/* <li className="cursor-pointer hover:text-white transition-all duration-500">
            Contact
          </li> */}
          <li className="flex bg-white/10 p-2 sm:p-2 md:p-3 rounded-4xl items-center gap-1 cursor-pointer hover:bg-white hover:text-black transition-all duration-500 text-xs sm:text-sm md:text-base lg:text-lg" onClick={onMailMeClick}>
            <BsStars className="text-xl sm:text-2xl md:text-3xl" /> Mail Me
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Header;