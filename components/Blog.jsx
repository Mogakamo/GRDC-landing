import React from "react";
import BlogCard from "./Reusables/BlogCard";

const Blog = () => {
  return (
    <div className="bg-[#0E7506] bg-opacity-10 p-10">
      <h1 className="pb-6 font-semibold text-2xl text-center">Learn more about GRDC</h1>
      <div className="flex  space-x-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
