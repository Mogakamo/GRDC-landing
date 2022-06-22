import React from "react";
import BlogCard from "./Reusables/BlogCard";

const Blog = () => {
  return (
    <div className="bg-[#0E7506] bg-opacity-10 p-20">
      <h1 className="pb-20 font-semibold text-2xl text-center">Learn more about GRDC</h1>
      <div className="md:flex  md:space-x-10 space-y-10 md:space-y-0">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
