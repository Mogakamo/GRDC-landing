import Image from "next/image";
import React from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";

const Features = () => {
  return (
    <div className="h-auto mx-32 p-20">
      <div className="grid gap-12 grid-cols-2">
        {" "}
        <div className="flex flex-col">
          <div className="flex items-center justify-start space-x-3">
            <MdGeneratingTokens className="h-10 w-10 text-[#0E7506]" />
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
          <div className="flex items-center justify-items-end space-x-3">
            <GiHouse className="h-8 w-8 text-[#0E7506]" />
            <h1 className="text-[#061b05] text-xl font-semibold">
              Property Managed
            </h1>
          </div>
          <p className="leading-loose font-light w-96">
            Each GRDC property has a property management company managing the
            property on RealToken owners behalf. The property management company
            sources tenants, collects rent, and manages repairs, so the diverse
            group of GRDC owners don't have to.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-start space-x-3">
            <BsShieldFillCheck className="h-8 w-8 text-[#0E7506]" />
            <h1 className="text-[#061b05] text-xl font-semibold">LLC Owned</h1>
          </div>
          <p className="leading-loose font-light text-center">
            Real estate can't directly be tokenised, but legal entities can.
            Each property is owned by company(either an Inc or an LLC). Each
            company is tokenised as a unique set of GRDC and made available for
            purchase.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-start space-x-3">
            <FaRegMoneyBillAlt className="h-8 w-8 text-[#0E7506]" />
            <h1 className="text-[#061b05] text-xl font-semibold">
              Instant Payments
            </h1>
          </div>
          <p className="leading-loose font-light text-cente w-96">
            With blockchains, we no longer ned to wait 30 days to receive a bank
            transfer. Owning property with GRDC allows you to get and monitor
            your investments in real-time. Dividends are paid using a US-Dollar
            stablecoin, sent to your wallet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
