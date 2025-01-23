import './Recommendation.css';
import React, { useState } from 'react';


const options = [
  'Recommended',
  'Newest First',
  'Popular Item',
  'Price: High to Low',
  'Price: Low to High'
];


const Recommendation = () => {
  
  const [selectedOption, setSelectedOption] = useState('Show Recommendations');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  const handleOptionClick = (option) => {
    setSelectedOption(option);  
    setIsDropdownOpen(false);   
  };

  return (
    <div className="container">
    
      <button onClick={toggleDropdown}>
        {selectedOption}
      </button>

     
      {isDropdownOpen && (
        <ul className='dropdown'>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendation;
