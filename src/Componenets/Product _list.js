import React from 'react';
import Products from './Products'; 
import Data from '../Data/Data';
import './productList.css'; 

const Product_list = () => {
  return (
    <div className='card-container'>
      {Data.map((item, index) => (
        item.img && item.title && ( 
          <Products
            key={index} 
            img={item.img}
            title={item.title}
          />
        )
      ))}
    </div>
  );
};

export default Product_list;
