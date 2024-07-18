import React from 'react';
import { useNavigate } from 'react-router-dom';
import './componentCSS/BlogCard.css';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    window.open(blog.url, '_blank'); // Open the blog URL in a new tab
  };

  return (
    <div className="blog-card" onClick={handleCardClick}>
      <img src={blog.image} alt={blog.title} className="blog-card-image" />
      <div className="blog-card-content">
        <h2 style={{fontWeight:"bold"}}>{blog.title}</h2>
        <p>{blog.excerpt}</p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
