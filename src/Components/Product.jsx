import React, { useState } from 'react';
import Style from '../CSS/product.module.css'

const Product = ({ product, toggleDescription }) => {
  const { id, title, price, image , description, showDescription } = product;
  const [buttonText, setButtonText] = useState('Show Detail');

  const handleToggleDescription = () => {
    toggleDescription(id);
    setButtonText(showDescription ? 'Show Detail' : 'Hide Detail');
  };

  return (
    <div className={Style.product}>
      <h3>{title}</h3>
      <img src={image} className={Style.myimage}/>
      <p>Price: ${price}</p>
      {showDescription && <p>{description}</p>}
      <button onClick={handleToggleDescription}>{buttonText}</button>
    </div>
  );
};

export default Product;
