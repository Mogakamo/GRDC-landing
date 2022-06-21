import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="h-auto flex items-center p-10 flex-col">
      <h1 className="text-xl font-semibold pb-2">Our Team</h1>
      <p className="pb-5 text-center font-light text-lg mx-20">
        pouvez retrouver le version française de cet article en cliquant ici.
        For some time now, it has been possible to find articles or tweets
        indicating that real estate has drop
      </p>
      <div className="flex items-center">
        <div className="relative h-96 w-96 ">
          <Image src="/ceo.svg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-72 w-48  hover:-translate-y-6 duration-300 hover:scale-150 ease-out overflow-auto">
          <Image src="/sales.svg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-72 w-48 transition-transform duration-300 hover:scale-150 ease-out overflow-auto">
          <Image src="/design.svg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-72 w-48 transition-transform duration-300 hover:scale-150 ease-out overflow-auto">
          <Image src="/ux.svg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Team;
