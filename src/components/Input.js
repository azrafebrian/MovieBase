import React from 'react';

import '../styles/Input.css';

const Input = ({ handleSearch }) => {
  return (
    <div className='input-wrapper'>
      <input
        className='search'
        placeholder='Find Movie'
        onChange={handleSearch}
      />
    </div>
  );
};

export default Input;
