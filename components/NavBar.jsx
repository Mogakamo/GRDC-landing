import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="sticky top-0">
      <div className="flex items-center justify-center space-x-48 h-16 mx-auto shadow-lg">
        <div className="relative h-12 w-12">
          <Image src="/logo.png" layout="fill" />
        </div>

        <ul
          className="flex justify-center items-center
            space-x-10"
        >
          <li className="opacity-50 cursor-pointer hover:opacity-100">Home</li>
          <li className="opacity-50 cursor-pointer hover:opacity-100">
            Marketplace
          </li>
          <li className="opacity-50 cursor-pointer hover:opacity-100">Defi</li>
          <li className="opacity-50 cursor-pointer hover:opacity-100">
            Sell Tokens
          </li>
        </ul>

        <button className="bg-green-900 text-white p-2 rounded-xl">
          Get Started ->
        </button>
      </div>
    </div>
  );
};

export default NavBar;
