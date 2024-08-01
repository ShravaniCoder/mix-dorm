import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoIosGlobe } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineNotificationAdd } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const TopNavbar = ({ toggleSidebar }) => {
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6 w-full z-10">
      <div className="flex items-center gap-2">
        <FiMenu className="cursor-pointer md:hidden" onClick={toggleSidebar} />
        <div className="relative flex items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="px-7 py-2 pl-10 border rounded-full focus:outline-none focus:ring w-full"
          />
          <CiSearch className="absolute left-4 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <MdOutlineNotificationAdd className="text-xl" />
        <span className="hidden md:flex items-center gap-1">
          <IoIosGlobe className="text-xl" />
          English
          <MdKeyboardArrowDown className="text-xl" />
        </span>
        <div className="h-10 w-10 rounded-full bg-yellow-400 text-white flex items-center justify-center">
          <span>H</span>
        </div>
        <span className="hidden md:block">
          Moni Roy <p>Admin</p>
        </span>
        <div className="rounded-full bg-gray-50 border text-black flex items-center justify-center">
          <RiArrowDropDownLine className="text-xl" />
        </div>
      </div>
    </div>
  );
};

TopNavbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default TopNavbar;
