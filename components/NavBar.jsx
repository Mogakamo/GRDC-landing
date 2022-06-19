import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="relative h-16 shadow-lg">
      <div className="flex mx-auto items-center space-x-20">
        <div className="w-16">
          <Image
            src={"/logo.svg"}
            className="h-12 w-12"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <ul className="flex flex-row space-x-6 justify-center">
          <li>Home</li>
          <li>Marketplace</li>
          <li>Defi</li>
          <li>Sell</li>
        </ul>

        <div>
          <button className="bg-[#0E7506]" text-white>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
