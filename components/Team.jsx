import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="h-96 flex items-center p-10 flex-col">
      <h1>Our Team</h1>
      <p>This is our team</p>
      <div className="relative h-20">
        <Image src="/ceo.svg" layout="fill" />
      </div>
    </div>
  );
};

export default Team;
