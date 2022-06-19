import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiPhoneOutgoing, HiLocationMarker, HiMail } from "react-icons/hi";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0E7506] bg-opacity-10">
      <div
        className="h-auto p-10  grid grid-cols-1 
            md:grid-cols-[300px_100px_1fr_2fr] md:gap-5"
      >
        {/* About */}
        <div className="flex flex-col space-y-6">
          <div className="h-12 w-12 relative">
            <Image src="/logo.png" layout="fill" objectFit="contain" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla
          </p>
          {/* Socials */}
          <div>
            <ul className="flex space-x-3">
              <li>
                <a href="/a">
                  <FaFacebookSquare className="text-[#0E7506] h-8 w-8" />
                </a>
              </li>
              <li>
                <a href="/d">
                  <FaLinkedin className="text-[#0E7506] h-8 w-8" />
                </a>
              </li>
              <li>
                <a href="/s">
                  <FaTwitter className="text-[#0E7506] h-8 w-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="pb-4">Navigation</h1>
          <ul className="space-y-2 ">
            <li className="opacity-60 hover:opacity-100 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 cursor-pointer">
              <Link href="/">About</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 cursor-pointer">
              <Link href="/">Services</Link>
            </li>
            <li className="opacity-60 hover:opacity-100 cursor-pointer">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="pb-4 ">Contact Us</h1>
          <ul className="space-y-4">
            <li className="">
              <a href="" className="space-x-3 flex items-center flex-row">
                <HiPhoneOutgoing className="text-gray-400" />
                <p>Phone: (877)800-3043</p>
              </a>
            </li>
            <li>
              <a className="space-x-3 flex items-center flex-row">
                <HiLocationMarker className="h-4 w-4 text-gray-400" />
                <p>1648 Taylor Rd. Suite258 Port Orange, FL 32128</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:mail@gmail.com"
                className="space-x-3 flex items-center flex-row"
              >
                <HiMail className="text-gray-400" />
                <p>development@realdevcompan.com</p>
              </a>
            </li>
          </ul>
        </div>
        <div>Subscribe</div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <p className="">&copy;2022</p>
        <p>GRDC</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
