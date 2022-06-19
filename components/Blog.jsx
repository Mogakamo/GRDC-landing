import React from 'react'
import BlogCard from "./Reusables/BlogCard"

const Blog = () => {
  return (
    <div className='bg-[#0E7506] flex space-x-10 bg-opacity-10 p-10'>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}

export default Blog