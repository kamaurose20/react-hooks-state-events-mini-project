import React from "react";

function 
CategoryFilter({categories,handleFilterCategory,selectedCategory}) {
  const buttons = categories.map(category=>{
    return(
      <button className={selectedCategory === category?"selected":""} key={category} id={category} onClick={()=>handleFilterCategory(category)}>{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttons}
    </div>
  );
}

export default CategoryFilter;
