import React from 'react';
import { CiHeart } from "react-icons/ci";
import './Products.css';

const Products = ({ img, title }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={img} alt={title} className="card-img" />
      </div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          Sign in or create an account to see pricing
        </p>
        <CiHeart className="heart-icon" />
      </div>
    </div>
  );
};

export default Products;
