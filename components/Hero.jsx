import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Carousel
      className="h-[90vh] bg-black "
      showArrows={false}
      // showIndicators={false}
      showStatus={false}
      interval={3000}
      autoPlay
      infiniteLoop={true}
    >
      <div className="flex p-10 h-[90vh] items-center justify-center space-x-20 px-20 mx-auto">
        <div className="flex flex-col items-start w-[450px] space-y-10">
          <h1 className="text-[#0E7506] font-semibold text-2xl">
            Fractional Investements
          </h1>
          <p className="text-white text-start font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum
            dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet luctus venenatis, lectus magna fringilla
          </p>
          <button
            className="border-[#0E7506] p-2 border-2 rounded-full 
                      text-white flex items-center px-4 hover:bg-[#0E7506]"
          >
            <div className="flex items-center space-x-3 px-2">
              <Link href="/">Our Services</Link>
              <AiOutlineArrowRight />
            </div>
          </button>
        </div>
        <div className="pt-10 flex flex-row-reverse">
          <div className="relative">
            <div className="absolute -right-10 bottom-10">
              <div className="relative h-48 w-32">
                <Image src="/hero.svg" layout="fill" className="" />
              </div>
            </div>
          </div>
          <div className="relative border-[#0E7506] rounded-3xl h-48 w-72">
            <Image
              src="/hero-1.svg"
              layout="fill"
              objectFit="cover"
              className="rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className="flex p-10 h-[90vh] items-center justify-center space-x-20 px-20 mx-auto">
        <div className="flex flex-col items-start w-[450px] space-y-10">
          <h1 className="text-[#0E7506] font-semibold text-2xl">
            Fractional Investements
          </h1>
          <p className="text-white text-start font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum
            dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet luctus venenatis, lectus magna fringilla
          </p>
          <button
            className="border-[#0E7506] p-2 border-2 rounded-full 
                      text-white flex items-center px-4 hover:bg-[#0E7506]"
          >
            <div className="flex items-center space-x-3 px-2">
              <Link href="/">Learn more</Link>
              <AiOutlineArrowRight />
            </div>
          </button>
        </div>
        <div className="pt-10 flex flex-row-reverse">
          <div className="relative">
            <div className="absolute -right-10 bottom-10">
              <div className="relative h-48 w-32">
                <Image src="/hero.svg" layout="fill" className="" />
              </div>
            </div>
          </div>
          <div className="relative border-[#0E7506] rounded-3xl h-48 w-72">
            <Image
              src="/hero-1.svg"
              layout="fill"
              objectFit="cover"
              className="rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className="flex p-10 h-[90vh] items-center justify-center space-x-20 px-20 mx-auto">
        <div className="flex flex-col items-start w-[450px] space-y-10">
          <h1 className="text-[#0E7506] font-semibold text-2xl">
            Fractional Investements
          </h1>
          <p className="text-white text-start font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum
            dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet luctus venenatis, lectus magna fringilla
          </p>
          <button
            className="border-[#0E7506] p-2 border-2 rounded-full 
                      text-white flex items-center px-4 hover:bg-[#0E7506]"
          >
            <div className="flex items-center space-x-3 px-2">
              <Link href="/">Contact us</Link>
              <AiOutlineArrowRight />
            </div>
          </button>
        </div>
        <div className="pt-10 flex flex-row-reverse">
          <div className="relative">
            <div className="absolute -right-10 bottom-10">
              <div className="relative h-48 w-32">
                <Image src="/hero.svg" layout="fill" className="" />
              </div>
            </div>
          </div>
          <div className="relative border-[#0E7506] rounded-3xl h-48 w-72">
            <Image
              src="/hero-1.svg"
              layout="fill"
              objectFit="cover"
              className="rounded-xl "
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
