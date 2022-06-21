import Image from "next/image";
import React from "react";
import ServiceCard from "./Reusables/ServiceCard";

const service = [
  {
    header: "Why it works",
    text: "This is because ...",
  },
  {
    header: "Why it works",
    text: "This is because ...",
  },
  {
    header: "Why it works",
    text: "This is because ...",
  },
];

const Services = ({}) => {
  const services = service.toString()
  console.log(service);
  return (
    <div className=" relative text-center p-10 rounded-br-sm rounded-bl-sm space-y-8">
      <h1 className="font-semibold text-2xl">
        Discover the Power of the GRDC Platform
      </h1>
      <p className="font-light text-lg">
        Leverage your assets like never before with the power of Decentralized
        Finance on the blockchain. The GRDC collateralization platform lets you
        supercharge your tokenized real estate portfolio.
      </p>
      <div className="mx-10 flex items-center justify-center space-x-10">
        {service?.map(({ id, header, text }) => {
          return (
            <>
              <ServiceCard
                key={id}
                header={services.header}
                text={service.text}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
