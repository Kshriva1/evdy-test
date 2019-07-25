/* This component displays the search box used for filtering the memorials */

import React from 'react';

const SearchBox = ({ searchBoxChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--black bg-lightest-yellow'
        type='search'
        placeholder='search by date'
        onChange={e=>searchBoxChange(e)}
      />
    </div>
  );
}

export default SearchBox;