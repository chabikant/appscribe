import React from 'react';
import { CiHeart } from "react-icons/ci";
import './Products.css';  

const Products = ({ img, title }) => {
  return (
    <div className='card'>
      <img src={img} alt="Product" className='card-img' />
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <h6 className='login'>Sign in or <br></br>create an <br></br>account to <br></br>see pricing<br></br> <CiHeart/></h6>
      </div>
    </div>
  );
};

export default Products;
