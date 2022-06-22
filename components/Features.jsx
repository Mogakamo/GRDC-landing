import React from "react";

const Features = () => {
  return (
    <div className="h-96 mx-32">
      <div className="intro-desc">
        <div className="inner">
          {[
            {
              icon: icons.token,
              title: "Unique Tokens",
              content:
                "Ownership of each property is distributed across a finite number of representative tokens. Based on token share, owners can collect revenue from rent, and vote on property decisions.",
            },
            {
              icon: icons.property,
              title: "Property Managed",
              content:
                "Each GRDC property has a property management company managing the property on RealToken owners behalf. The property management company sources tenants, collects rent, and manages repairs, so the diverse group of GRDC owners don’t have to.",
            },
            {
              icon: icons.owned,
              title: "LLC Owned",
              content:
                "Real estate can’t directly be tokenized, but legal entities can. Each property is owned by company (either an Inc or an LLC). Each company is tokenized as a unique set of GRDC and made available for purchase. ",
            },
            {
              icon: icons.money,
              title: "Instant Payments",
              content:
                "With blockchains, we no longer need to wait 30 days to receive a bank transfer. Owning property with GRDC allows you to get and monitor you investment real-time. Dividends are paid using a US-Dollar stablecoin, sent to your wallet.",
            },
          ].map((each, i) => (
            <div className="each-desc" key={i}>
              <span
                className="icon"
                dangerouslySetInnerHTML={{ __html: each.icon }}
              ></span>
              <div className="content">
                <h1>{each.title}</h1>
                <p>{each.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
