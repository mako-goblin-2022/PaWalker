import React from 'react';


function Products (productItems){
  return (
    <div>
      {productItems.map((prodItem) => (
        <div>
        <img 
        src={prodItem.image} 
        alt={prodItem.name} 
        />
        </div>
      ))}
      
    </div>
  );
}

export default Products;
