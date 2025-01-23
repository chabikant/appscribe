import './Filters.css';
import React, { useState } from 'react';

// Define filters with their options
const filters = [
    { name: 'IdealFor', options: ['All', 'Men', 'Women', 'Child'] },
    { name: 'Occasion', options: ['Casual', 'Formal', 'Party'] },
    { name: 'Work', options: ['Office', 'Remote', 'Hybrid'] },
    { name: 'Fabric', options: ['Cotton', 'Wool', 'Polyester'] },
    { name: 'Segment', options: ['Luxury', 'Premium', 'Economy'] },
    { name: 'SuitableFor', options: ['Summer', 'Winter', 'All Seasons'] },
    { name: 'RawMaterial', options: ['Natural', 'Synthetic'] },
    { name: 'Pattern', options: ['Solid', 'Striped', 'Checked'] },
];

const Filters = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleFilterToggle = () => {
        setIsFiltersVisible(!isFiltersVisible);
    };

    const handleDropdownToggle = (filterName) => {
        setOpenDropdown(openDropdown === filterName ? null : filterName);
    };

    return (
        <>
            <div className='Container'>
                <button id='Filter-option' onClick={handleFilterToggle}>
                    {isFiltersVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
                </button>
            </div>
            {isFiltersVisible && (
                <div className='filters-container'>
                    {filters.map((filter) => (
                        <div className='dropdown2' key={filter.name}>
                            <button onClick={() => handleDropdownToggle(filter.name)}>
                                {filter.name.toUpperCase()}
                            </button>
                            {openDropdown === filter.name && (
                                <div className='dropdown-content'>
                                    {filter.options.map((option, index) => (
                                        <label key={index}>
                                            <input type='checkbox' />
                                            {option}
                                            <br />
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Filters;
