import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiPhoneOutgoing, HiLocationMarker, HiMail } from "react-icons/hi";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0E7506] bg-opacity-10">
      <div
        className="h-auto p-10 items-center justify-center flex flex-row space-x-16"
      >
        {/* About */}
        <div className="flex flex-col space-y-6 w-[250px]">
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
        <div className="pt-4">
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
        <div className="w-auto">
          <h1 className="pb-4 ">Connect</h1>
          <ul className="space-y-4">
            <li className="">
              <a href="" className="space-x-3 flex items-center flex-row">
                <HiPhoneOutgoing className="text-gray-400" />
                <p>(877)800-3043</p>
              </a>
            </li>
            <li>
              <a className="space-x-3 flex items-center flex-row">
                <HiLocationMarker className="h-4 w-4 text-gray-400" />
                <p>1648 Taylor Rd. </p>
              </a>
            </li>
            <li>
              <a
                href="mailto:mail@gmail.com"
                className="space-x-3 flex items-center flex-row w-24"
              >
                <HiMail className="text-gray-400 " />
                <p>realdevcompany</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 w-72">
          <h1>Subscribe</h1>
          <p>
            Subscribe to our newsletter and get the latest updates as they
            happen.
          </p>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Enter email address"
              className="border-[#0E7506] px-1 border-2 rounded-lg bg-transparent
                focus:border-transparent focus:outline-none focus:shadow-none"
            />
            <button className="bg-[#0E7506] p-2 text-white rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 p-4">
        <p className="">&copy;2022</p>
        <p>GRDC</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
