import React from "react";
import Link from "next/link";

const ServiceCard = ({ header, text }) => {
  return (
    <div
      className="relative h-[329px] w-[308px] border-2 border-transparent shadow-lg 
                bg-gray-200 rounded-md cursor-pointer transition duration-300 transform ease-out
                    hover:scale-105"
    >
      {/* Icon */}
      <h2 className="text-black">{header}</h2>
      <p>{text}</p>
      <div className="absolute bottom-3 left-3 text-[#0E7506]">
        <Link href="/about">Explore...</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
