import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="flex flex-col items-start space-y-2 p-4 w-auto h-auto border-transparent 
        bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-125 ease-in-out overflow-auto">
      <h1 className="font-bold">Episode 3 - 15% drop in Detroit: Opportunity or threat?</h1>
      <h2 className="text-[#0E7506]">May 22, 2022</h2>
      <p className="font-extralight text-sm">
        15% drop in Detroit: Opportunity or threat? Vous pouvez retrouver le
        version française de cet article en cliquant ici. For some time now, it
        has been possible to find articles or tweets indicating that real estate
        has dropped in the Rust Belt area, where RealT has...
      </p>
      <div className="text-[#0E7506]">
        <Link href="/" className="hover:text-underline underline-offset-1 items-start">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
