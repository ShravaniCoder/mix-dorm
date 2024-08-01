import { MdKeyboardArrowDown, MdOutlineNotificationsActive } from "react-icons/md";
import Logo from "../../src/assets/Img/Nav/logo.png"
import { IoPersonOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <div className="w-full py-2 flex justify-center items-center bg-black">
        <h1 className="text-white">
          Get 1 Month Free <span className="text-[#40E0D0]">Mix premium</span> Membership - Sign Up Now!
        </h1>
      </div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl flex flex-row font-bold text-[#40E0D0]">
            <img src={Logo} alt="logo" />
            <h1 className="ml-2">
              Mix<span className="text-black">Dorm</span>
            </h1>
          </div>
          <div className="flex space-x-3">
            <button className="text-black font-semibold bg-[#40E0D0] py-2 px-5 rounded-full">
              List Your Hostel
            </button>
            <button className="flex items-center justify-center">
              <MdOutlineNotificationsActive className="text-2xl font-light" />
              Noticeboard
            </button>
            <button className="flex items-center justify-center">
              <IoPersonOutline className="text-xl font-light" />
              Login
            </button>
            <button className="flex items-center justify-center">
              <IoIosGlobe className="text-2xl font-light" />
              Country
              <MdKeyboardArrowDown className="text-xl font-light" />
            </button>
            <button className="flex items-center">
              <CgMenuGridO className="text-2xl font-light" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar
