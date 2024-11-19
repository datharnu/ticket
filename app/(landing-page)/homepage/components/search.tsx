import { Search } from "lucide-react";
import React from "react";

export default function SearchComponent() {
  return (
    <div className="flex items-center gap-5  ">
      <input
        type="text"
        placeholder="Search by Artist, Event or Venue"
        className="py-1 rounded-[7px] w-[80%] lg:w-full  px-2 pr-10 lg:pr-0 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ffa5a5] focus:border-transparent"
      />

      <div>
        <button className="ml-0 bg-[#ffd8d8] text-[#302939] px-4 py-[8px] rounded-[7px]">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
