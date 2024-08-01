import { FaRedo } from "react-icons/fa";
import { VscFilter } from "react-icons/vsc";

const FilterBox = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center">
      <button className="py-6 px-10 border bg-white rounded-l-xl">
        <VscFilter className="text-gray-700" size={20} />
      </button>
      <div className="">
        <lable className="text-sm font-medium border bg-white py-6 px-10 text-gray-700">
          Filter By
        </lable>{" "}
      </div>
      <button className="flex items-center space-x-4 border bg-white py-6 px-10">
        <select className="bg-transparent  focus:outline-none sm:text-sm">
          <option>Country</option>
        </select>
      </button>
      <button className="flex items-center space-x-4 border bg-white py-6 px-10">
        <select className="bg-transparent focus:outline-none sm:text-sm">
          <option>New Hostels</option>
        </select>
      </button>
      <button className="flex items-center space-x-4 border bg-white py-6 px-10">
        <select className="bg-transparent focus:outline-none sm:text-sm">
          <option>Status</option>
        </select>
      </button>
      <button className="flex items-center space-x-4 border bg-white py-6 px-10">
        <select className="bg-transparent focus:outline-none sm:text-sm">
          <option>Rates</option>
        </select>
      </button>

      <button className="text-red-600 border bg-white p-6 text-sm font-medium rounded-r-xl flex items-center">
        <FaRedo className="mr-1" size={16} />
        Reset Filter
      </button>
    </div>
  );
};

export default FilterBox;
