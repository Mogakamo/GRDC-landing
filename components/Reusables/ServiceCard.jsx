import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ header, text }) => {
  return (
    <div
      className="relative h-96 w-96 border-2 border-transparent shadow-lg 
                bg-gray-200 rounded-md cursor-pointer transition duration-300 transform ease-out
                    hover:scale-105 flex flex-col space-y-0 items-center" 
    >
      {/* Icon */}
      <div className="relative h-24 w-24 bg-[#0E7506] bg-opacity-5 border-transparent rounded-full mt-4 border-2">
        {" "}
        <Image
          src="/service.svg"
          layout="fill"
          className="h-12 w-12 relative"
        />
      </div>

      <h2 className="text-black text-2xl font-semibold pb-10 pt-5">Why it works</h2>
      <p className="mx-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
      <div className="absolute bottom-3 left-3 text-[#0E7506] hover:underline underline-offset-2">
        <Link href="/about">Explore...</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
