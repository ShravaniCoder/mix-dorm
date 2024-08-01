import { useState } from "react";
import { IoIosStar } from "react-icons/io";

function HostelTable() {
  const hostelData = [
    {
      id: 1,
      name: "88 Backpackers",
      rates: 5,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
    {
      id: 2,
      name: "88 Backpackers",
      rates: 4,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
    {
      id: 3,
      name: "88 Backpackers",
      rates: 3,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
    {
      id: 4,
      name: "88 Backpackers",
      rates: 5,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
    {
      id: 5,
      name: "88 Backpackers",
      rates: 4,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
    {
      id: 6,
      name: "88 Backpackers",
      rates: 2,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
    {
      id: 7,
      name: "88 Backpackers",
      rates: 5,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
    {
      id: 8,
      name: "88 Backpackers",
      rates: 1,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
    {
      id: 9,
      name: "88 Backpackers",
      rates: 3,
      rooms: 45,
      bed: 152,
      country: "INDIA",
      offer: "Open",
      status: "Verified",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <IoIosStar
          key={i}
          className={i < count ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full divide-y border divide-gray-200">
        <thead >
          <tr className="border ">
            <th></th>
            <th className="pr-4 py-7 bg-gray-50 text-left text-base font-semibold text-black uppercase tracking-wider">
              HOSTEL NAME
            </th>
            <th className="pr-4 py-7 bg-gray-50 text-left text-base font-semibold text-black uppercase tracking-wider">
              RATES
            </th>
            <th className="pr-4 py-7 bg-gray-50 text-left text-base font-semibold text-black uppercase tracking-wider">
              ROOMS
            </th>
            <th className="pr-4 py-7 bg-gray-50 text-left text-base font-semibold text-black uppercase tracking-wider">
              BED
            </th>
            <th className="pr-4 py-7 bg-gray-50 text-left text-base font-semibold text-black uppercase tracking-wider">
              COUNTRY
            </th>
            <th className="pr-4 py-7 bg-gray-50 text-left text-base font-semibold text-black uppercase tracking-wider">
              OFFER
            </th>
            <th className="pr-4 py-7 bg-gray-50 text-left text-base font-semibold text-black uppercase tracking-wider">
              STATUS
            </th>
            <th className="pr-4 py-7 bg-gray-50 text-left text-base font-semibold text-black uppercase tracking-wider">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 border">
          {hostelData.map((hostel) => (
            <tr key={hostel.id}>
              <td className="px-4">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(hostel.id)}
                  onChange={() => handleCheckboxChange(hostel.id)}
                />
              </td>
              <td className="pr-4 py-4 whitespace-nowrap flex gap-2">
                {hostel.name}
              </td>
              <td className="pr-4 py-4 whitespace-nowrap">
                {renderStars(hostel.rates)}
              </td>
              <td className="pr-4 py-4 whitespace-nowrap">{hostel.rooms}</td>
              <td className="pr-4 py-4 whitespace-nowrap">{hostel.bed}</td>
              <td className="pr-4 py-4 whitespace-nowrap">{hostel.country}</td>
              <td className="pr-4 py-4 whitespace-nowrap">{hostel.offer}</td>
              <td className="pr-4 py-4 whitespace-nowrap">
                <button className="text-teal-500 font-medium py-1 px-3 rounded bg-[#CCEFED]">
                  {hostel.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HostelTable;
