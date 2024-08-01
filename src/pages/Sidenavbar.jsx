import { IoMdClose } from "react-icons/io";
import {
  FaRegBell,
  FaRegCalendarAlt,
  FaRegCreditCard,
  FaRegUser,
} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuClipboardList, LuHotel } from "react-icons/lu";
import { MdManageAccounts, MdOutlineSupportAgent } from "react-icons/md";
import { PiChatCircleDotsLight } from "react-icons/pi";
import { RiFeedbackLine, RiShutDownLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbSunMoon } from "react-icons/tb";
import Logo from "../../src/assets/Img/Nav/logo.png";
import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";

const SideNavbar = ({ closeSidebar }) => {
  return (
    <div className="h-full w-56 bg-white shadow-md">
      <div className="flex items-center justify-between px-8 pt-4 font-bold">
        <div className="flex items-center">
          <img src={Logo} alt="logo" />
          <h1 className="ml-2 text-[#4FC1FF]">
            Mix<span className="text-black">Dorm</span>
          </h1>
        </div>
        <IoMdClose className="cursor-pointer text-2xl md:hidden" onClick={closeSidebar} />
      </div>
      <nav className="p-4">
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <RxDashboard className="h-5 w-5 mr-4" />
          <span className="font-medium">Dashboard</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <FaRegUser className="h-5 w-5 mr-4" />
          <span className="font-medium">User</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <LuClipboardList className="h-5 w-5 mr-4" />
          <span className="font-medium">Content</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <FaRegCalendarAlt className="h-5 w-5 mr-4" />
          <span className="font-medium">Booking</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <LuHotel className="h-5 w-5 mr-4" />
          <span className="font-medium">Hostel</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <PiChatCircleDotsLight className="h-5 w-5 mr-4" />
          <span className="font-medium">Communication</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <FaRegBell className="h-5 w-5 mr-4" />
          <span className="font-medium">Notification</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <RiFeedbackLine className="h-5 w-5 mr-4" />
          <span className="font-medium">Feedback</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <MdOutlineSupportAgent className="h-5 w-5 mr-4" />
          <span className="font-medium">Support</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <CgProfile className="h-5 w-5 mr-4" />
          <span className="font-medium">Profile</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <MdManageAccounts className="h-5 w-5 mr-4" />
          <span className="font-medium">Management</span>
        </a>
        <a
          href="#"
          className="flex rounded mb-10 items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <FaRegCreditCard className="h-5 w-5 mr-4" />
          <span className="font-medium">Payment</span>
        </a>
        <hr className="mb-5" />
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <TbSunMoon className="h-5 w-5 mr-4" />
          <span className="font-medium">Theme</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <IoSettingsOutline className="h-5 w-5 mr-4" />
          <span className="font-medium">Settings</span>
        </a>
        <a
          href="#"
          className="flex rounded items-center py-2 px-6 text-gray-600 hover:bg-[#4FC1FF] hover:text-white"
        >
          <RiShutDownLine className="h-5 w-5 mr-4" />
          <span className="font-medium">Logout</span>
        </a>
      </nav>
    </div>
  );
};

SideNavbar.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
};

export default SideNavbar;
