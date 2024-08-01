import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";


const SearchBar = () => {
     const [location, setLocation] = useState("New York, USA");
     const [checkInDate, setCheckInDate] = useState("");
     const [checkOutDate, setCheckOutDate] = useState("");
  return (
    <div className="md:absolute md:bottom-[-3rem] md:left-1/2 md:transform md:-translate-x-1/2 md:w-[75%]">
      <div className=" bg-white  rounded-full shadow-lg drop-shadow-xl gap-6 grid grid-flow-row grid-cols-4 px-9  py-5">
        <div className="flex gap-10">
          <div className="flex flex-col">
            <label className="text-gray-600">Location</label>
            <select
              className=" rounded-lg mt-1"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <FaLocationDot />
              <option>New York, USA</option>
              <option>Other Location</option>
            </select>
          </div>
          <div className="h-12 border-l border-gray-300"></div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <label className="text-gray-600">Check In</label>
            <input
              type="date"
              className=" rounded-lg mt-1"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="h-12 border-l border-gray-300"></div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600">Check Out</label>
          <input
            type="date"
            className=" rounded-lg mt-1"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <button className="bg-black flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full">
          <CiSearch className="text-xl" />
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar
