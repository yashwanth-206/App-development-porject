// Cleaning.js
import React, { useContext } from 'react';
import './Cleaning.css';
import { DettolImage, DomexImage, HarpicImage, LizolImage } from './Datas';
import { CartContext } from './CartContext';

const Cleaning = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: 'Harpic Cleaner',
      image: HarpicImage, 
      rating: 4.8,
      price:120,
    },
    {
      id: 2,
      name: 'Lizol Cleaner',
      image: LizolImage, 
      rating: 4.7,
      price:85,
    },
    {
      id: 3,
      name: 'Dettol Cleaner',
      image: DettolImage, 
      rating: 4.6,
      price:50,
    },
  ];
  

  return (
    <div className='cleaning_page'>
      <div className="Domex_Image">
        <img src={DomexImage} alt="Domex Cleaning" />
      </div>
      <div className="cleaning_description">
        {products.map((product) => (
          <div className="cleaning_product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Rating: {product.rating} ⭐</p>
            <p>Price:₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cleaning;
