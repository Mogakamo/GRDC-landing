import React from "react";

const Content = () => {
  return (
    <div className="bg-[#0E7506] md:h-96 text-center p-12 space-y-16 
          flex flex-col items-center justify-center">
      <div className="md:mx-20 flex items-center flex-col space-y-10">
      <h1 className="font-semibold text-3xl md:w-[500px] ">Permissionless, compliant, and one-of-its-kind</h1>
      <p className="text-white font-light text-lg">
        GRDCToken provides investors with a simple, intelligent, and
        user-friendly method to buy into fractional, tokenized properties,
        leveraging the U.S. legal system and the permissionless, unrestricted
        token issuance of GRDCToken.
      </p>
      <p className="text-white font-light text-lg">
        Investing with GRDC means low maintenance property ownership, access to
        cash flows related to the property (e.g., rent), and frictionless
        ownership transactions via GRDCTokens.
      </p>
      </div>
    </div>
  );
};

export default Content;
