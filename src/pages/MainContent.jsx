import Filter from "../pages/Filter";
import HostelTable from "./HostelTable";
import { CiSearch } from "react-icons/ci";

const MainContent = () => {
  return (
    <div className="w-full h-auto bg-[#F7FCFF] overflow-hidden">
      <div className="px-4 py-7 md:px-8 md:py-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Hostel</h1>
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                placeholder="Search Hotels, Country etc..."
                className="px-7 py-2 pl-10 border rounded-full focus:outline-none focus:ring"
              />
              <CiSearch className="absolute left-4 text-gray-500" />
            </div>
            <div>
              <button className="bg-[#4FC1FF] text-white px-4 py-2 rounded flex items-center whitespace-nowrap">
                <span>+ Add Hostel</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Filter />
        </div>
        <div className="overflow-x-auto">
          <HostelTable />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
