import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <section className="py-8 bg-white  ">
      <div className="lg:max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-5 lg:px-0 ">
          <Image src="/logo.png" alt="logo" width={100} height={200} />
          <Button className="bg-[#ffd8d8] text-[#302939]">Sign IN / UP</Button>
        </div>
      </div>
      <hr className="mt-4" />
    </section>
  );
}
