import React from 'react';

const Categories = ({setCategorie, title}) => {
  return (
  <button  className='filter-btn'onClick={() =>setCategorie(title)} > 
  {title}
  </button>)
};

export default Categories;
