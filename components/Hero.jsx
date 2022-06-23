import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Carousel
      className="md:h-[90vh] h-auto bg-black "
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      interval={3000}
      autoPlay={true}
      infiniteLoop={true}
    >
      <div className="grid grid-cols-1 place-content-center place-items-center md:flex p-10 md:h-[90vh] h-auto items-center justify-center space-x-20 px-20 mx-auto">
        <div className=" md:flex md:flex-col  grid place-items-center place-content-center md:items-start w-[450px] space-y-4">
          <h1 className="text-[#0E7506] font-semibold text-2xl">
            Fractional Investements
          </h1>
          <p className="text-white text-start font-light text-lg w-[300px] md:w-auto">
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
        <div className="pt-16 pr-20 pb-8  flex flex-row-reverse">
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
      <div className="grid grid-cols-1 place-content-center place-items-center md:flex p-10 md:h-[90vh] h-auto items-center justify-center space-x-20 px-20 mx-auto">
        <div className="md:flex md:flex-col grid place-content-center place-items-center md:items-start items-center w-[450px] space-y-4">
          <h1 className="text-[#0E7506] font-semibold text-2xl">
            Fractional Investements
          </h1>
          <p className="text-white text-start font-light text-lg w-[300px] md:w-auto">
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
        <div className="pt-16 pr-20  flex flex-row-reverse">
          <div className="relative">
            <div className="absolute -right-10 md:bottom-10 bottom-8">
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
      <div className="grid grid-cols-1 place-content-center place-items-center md:flex p-10 md:h-[90vh] h-auto items-center justify-center space-x-20 px-20 mx-autoo">
        <div className="md:flex md:flex-col grid place-items-center place-content-center md:items-start items-center w-[450px] space-y-4">
          <h1 className="text-[#0E7506] font-semibold text-2xl">
            Fractional Investements
          </h1>
          <p className="text-white text-start font-light text-l w-[300px] md:w-auto">
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
        <div className="pt-16 pr-20 flex flex-row-reverse">
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
