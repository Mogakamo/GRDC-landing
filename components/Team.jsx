import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="h-auto flex items-center p-10 flex-col">
      <h1>Our Team</h1>
      <p>This is our team</p>
      <div className="flex items-center">
      <div className="relative h-96 w-96 ">
        <Image src="/ceo.svg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-72 w-48">
        <Image src="/sales.svg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-72 w-48">
        <Image src="/design.svg" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-72 w-48">
        <Image src="/ux.svg" layout="fill" objectFit="cover" />
      </div>
      </div>
    </div>
  );
};

export default Team;
