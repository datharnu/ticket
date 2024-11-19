import React from "react";
import SearchComponent from "./components/search";

import ConcertCard from "./components/concert-card";

export default function HomePage() {
  return (
    <div className="lg:max-w-6xl mx-auto ">
      <div className="my-5 ">
        <SearchComponent />
        <ConcertCard />
      </div>
    </div>
  );
}
