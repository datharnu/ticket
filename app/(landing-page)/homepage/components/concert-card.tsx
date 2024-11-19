// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// export default function ConcertCard() {
//   return (
//     <div className="my-5">
//       <div className="relative group w-full">
//         {/* Image Container */}
//         <div className="w-full">

//           <Image
//             src="/ticket8.webp"
//             alt="ticket"
//             width={100}
//             height={100}
//             className="w-full h-[25vh] shadow-2xl bg-[#ffa5a5] rounded-lg transition-all duration-300"
//           />
//         </div>

//         {/* Hover Background Overlay */}
//         <div className="absolute inset-0 group-hover:bg-[#ffa5a5] opacity-30 rounded-lg"></div>

//         {/* The ArrowRight Icon will appear on hover */}
//         <ArrowRight className="text-white size-10 absolute bottom-24 right-0 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>

//       {/* Text Under the Image */}
//       <div className="m-3 space-y-2">
//         <h1 className="font-extralight text-sm text-gray-400">Rock</h1>
//         <p className="font-bold text-sm">Rainbow Kitten Suprises</p>
//       </div>
//     </div>
//   );
// }

import { tickets } from "@/app/utils/TicketData";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ConcertCard() {
  return (
    <div className="my-5 md:grid grid-cols-3 gap-5">
      {tickets.map((ticket) => (
        <div key={ticket.id} className=" w-full my-10 ">
          {/* Image Container */}
          <div className="relative group w-full">
            <div className="w-full">
              <Image
                src={ticket.ticketImage} // Dynamically use the ticket's image URL
                alt={ticket.title} // Use the title of the ticket as alt text
                width={1000} // Set to a higher width for better resolution
                height={500} // Adjust to maintain aspect ratio
                className="w-full h-[25vh] object-cover shadow-2xl bg-[#ffa5a5] rounded-lg transition-all duration-300"
              />
            </div>

            {/* Hover Background Overlay */}
            <div className="absolute inset-0 group-hover:bg-[#ffa5a5] opacity-30 rounded-lg"></div>

            {/* The ArrowRight Icon will appear on hover */}
            <div>
              <ArrowRight className="text-white size-10 absolute bottom-24 right-0 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Text Under the Image */}
          <div className="m-3 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="font-extralight text-sm text-gray-400">
                {ticket.genre}
              </h1>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 flex items-center gap-2">
                  <Star className=" text-yellow-500 w-4 " />
                  {ticket.rating.rate}
                </span>
                <span className="text-xs text-gray-400">
                  ({ticket.rating.count} ratings)
                </span>
              </div>
            </div>
            <p className="font-bold text-sm">{ticket.title}</p>
            {/* Optional: Show additional information like rating */}
          </div>
        </div>
      ))}
    </div>
  );
}
