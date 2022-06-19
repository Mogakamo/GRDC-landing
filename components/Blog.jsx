import React from "react";
import BlogCard from "./Reusables/BlogCard";

const Blog = () => {
  return (
    <div className="bg-[#0E7506] text-center bg-opacity-10 p-10">
    <h1 className="pb-6 font-bold text-4xl">Learn more about GRDC</h1>
      <div className=" flex flex-row items-center mx-auto">
        <BlogCard />
        
      </div>
    </div>
  );
};

export default Blog;
