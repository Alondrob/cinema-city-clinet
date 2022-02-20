import React, {useState} from 'react';


const SearchBar = ({handleChange}) => {

    return(
        <div className='search-bar'> 
            <input placeholder='Search A Movie...' type='text' onChange={handleChange}  />
        </div>
    )
};

export default SearchBar;