import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#302939]">
      <div className="lg:max-w-6xl mx-auto py-10">
        <div className="    px-5   lg:flex items-start gap-20   ">
          <div className="flex items gap-10">
            <div className="space-y-2">
              <h1 className="uppercase text-xs text-gray-400">Company</h1>
              <div className="text-white text-[13px] space-y-2">
                <p>About</p>
                <p>History</p>
                <p>Careers </p>
                <p>News and Press</p>
                <p>See Tickets Global</p>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="uppercase text-xs text-gray-400">Ticket Buyers</h1>
              <div className="text-white text-[13px] space-y-2 ">
                <p>Find Events</p>
                <p>Data Protection</p>
              </div>
            </div>
          </div>
          <div className="flex items-center text-white my-5 gap-3">
            <Instagram />
            <Facebook />
            <Twitter />
          </div>
        </div>
        <hr className="my-10 border-gray-500 " />
        <span className="text-white text-xs flex justify-center">
          Ⓒ2024 Copyright goTicket | Privacy Policy & Terms
        </span>
      </div>
    </footer>
  );
};

export default Footer;
