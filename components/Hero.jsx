import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {AiOutlineArrowRight}  from "react-icons/ai"

const Hero = () => {
  return (
    <Carousel
      className="h-screen bg-black "
      showArrows={false}
      // showIndicators={false}
      showStatus={false}
      infiniteLoop
    >
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 h-screen">
        <div className="flex flex-col items-center justify-center space-y-20">
          <h1 className="text-[#0E7506] font-bold text-2xl">Fractional Investements</h1>
          <p className="text-white place-content-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla</p>
          <button className="border-[#0E7506] p-2 border-2 rounded-full 
                      text-white flex items-center px-4">Our Services<AiOutlineArrowRight /></button>
        </div>
        <div></div>
      </div>
      <div>1</div>
      <div>1</div>
    </Carousel>
  );
};

export default Hero;
