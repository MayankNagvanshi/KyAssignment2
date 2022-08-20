import React from 'react';

const Categories = ({categories,filterItems}) => {
  return (
    <div className="btn-container">
      {categories.map((category,index)=>{
        //map h to index must h
        //ye bhi must return inside return due to map
        return(
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={()=> filterItems(category)}
        >
          {category}
        </button>
        );
      })}
    </div>
  
    );
};

export default Categories;
