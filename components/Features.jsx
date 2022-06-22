import Image from "next/image";
import React from "react";
import { MdGeneratingTokens } from "react-icons/md";

const Features = () => {
  return (
    <div className="h-auto mx-32 p-20">
      <div className="grid gap-12 grid-cols-2">
        {" "}
        <div className="flex flex-col">
          <div className="flex items-center justify-start space-x-3">
            <MdGeneratingTokens className="h-16 w-16 text-[#0E7506]" />
            <h1 className="text-[#061b05] text-xl font-semibold">
              Unique Tokens
            </h1>
          </div>
          <p className="leading-loose font-light">
            Ownership of each property is distributed across a finite number of
            representative tokens. Based on token share, owners can collect
            revenue from rent, and vote on property decisions.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-start space-x-3">
            <MdGeneratingTokens className="h-16 w-16 text-[#0E7506]" />
            <h1 className="text-[#061b05] text-xl font-semibold">
              Unique Tokens
            </h1>
          </div>
          <p className="leading-loose font-light">
            Ownership of each property is distributed across a finite number of
            representative tokens. Based on token share, owners can collect
            revenue from rent, and vote on property decisions.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-start space-x-3">
            <MdGeneratingTokens className="h-16 w-16 text-[#0E7506]" />
            <h1 className="text-[#061b05] text-xl font-semibold">
              Unique Tokens
            </h1>
          </div>
          <p className="leading-loose font-light">
            Ownership of each property is distributed across a finite number of
            representative tokens. Based on token share, owners can collect
            revenue from rent, and vote on property decisions.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-start space-x-3">
            <MdGeneratingTokens className="h-16 w-16 text-[#0E7506]" />
            <h1 className="text-[#061b05] text-xl font-semibold">
              Unique Tokens
            </h1>
          </div>
          <p className="leading-loose font-light">
            Ownership of each property is distributed across a finite number of
            representative tokens. Based on token share, owners can collect
            revenue from rent, and vote on property decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
