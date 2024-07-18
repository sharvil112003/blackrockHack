import React from 'react';
import BlogCard from './BlogCard';
import './componentCSS/BlogList.css';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-container">
      <div className="blog-list-header">
        <h1>Investment Education Blogs</h1>
        <p>Explore our comprehensive guides and tips to help you become a savvy investor.</p>
      </div>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
