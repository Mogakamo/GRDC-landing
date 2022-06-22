import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="w-full">
      <div className="h-96 md:grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="relative h-72 w-48">
            <Image src="/house.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="space-y-4 flex items-start justify-center flex-col">
          <h1>Tokenizing real estate</h1>
          <h2>The future of real estate investing is fractional</h2>
          <p className="w-96">
            Fractional ownership democreatizes access to real estate
            investement, and therefore distributes and minimizes the risks and
            labour involved with owning property. And GRDC Token makes it even
            simpler!
          </p>
          <button className="flex bg-[#0E7506] px-6 py-2 text-white items-center space-x-2 rounded-full">
            <Link href="/">Explore</Link>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="mx-16 p-6 space-y-5 bg-[#]">
        <h1>tokenizing real estate</h1>
        <h2>The future of real estate investing is fractional</h2>
        <p className="w-[660px]">
          Tokenizing real estate has become the focus of many institutions in
          2022, and is likely to continue into the future as Solana offers a way
          to add improved levels of liquidity (tokens) to a notoriously illiquid
          industry (real estate). Fractional ownership democratizes access to
          real estate investment, and therefore distributes and minimizes the
          risks and labor involved with owning property. And RealToken makes it
          even simpler!
        </p>
        <button className="bg-[#0E7506] px-6 py-2 text-white rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
