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

const Services = () => {
  return (
    <div className=" relative text-center p-10 rounded-br-sm rounded-bl-sm space-y-10">
      <h1 className="font-bold text-2xl ">
        Discover the Power of the GRDC Platform
      </h1>
      <p>Leverage your assets like never before with the power of Decentralized Finance on the blockchain.

The GRDC collateralization platform lets you supercharge your tokenized real estate portfolio.</p>
      <div className="grid grid-cols-1 space-y-38 mx-auto md:grid-cols-3">
      {service?.map(({id, header, text}) => {
          return (
            <ServiceCard key={id} header={service.header} text={service.text} />
          )
        })}
      </div>
    </div>
  );
};

export default Services;
