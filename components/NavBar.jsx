import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 flex items-center justify-center space-x-48 h-16 mx-auto shadow-lg">
        <div className="relative h-12 w-12">
          <Image src="/logo.png" layout="fill" />
        </div>

        <ul
          className="md:flex justify-center items-center
            space-x-10 hidden "
        >
          <li className="opacity-50 cursor-pointer hover:opacity-100">
            <Link href="/">Home</Link>
          </li>
          <li className="opacity-50 cursor-pointer hover:opacity-100">
            <Link href="/">Marketplace</Link>
          </li>
          <li className="opacity-50 cursor-pointer hover:opacity-100">
            <Link href="/">Defi</Link>
          </li>
          <li className="opacity-50 cursor-pointer hover:opacity-100">
            <Link href="/">Sell Tokens</Link>
          </li>
        </ul>

        <button
          className="sm:block md:block bg-[#0E7506] text-white 
              p-2 rounded-lg flex hover:bg-transparent hover:text-black 
              hover:border-[#0E7506] hover:border-2"
        >
          <div className="flex items-center space-x-1 px-2">
            <Link href="/register">Get Started</Link>
            <AiOutlineArrowRight />
          </div>{" "}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
