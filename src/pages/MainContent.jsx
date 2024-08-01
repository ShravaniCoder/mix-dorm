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
        <div className="flex justify-between items-center mt-5">
          <div className="text-black/75">Showing 1-09 of 78</div>
          <div className="inline-flex items-center justify-center border">
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-black/75 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-black rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
