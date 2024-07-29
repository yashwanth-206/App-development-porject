import React, { useContext} from 'react';
import './Oil.css';
import { OI1, OI2, OI3, OI4 } from './Datas';
import { CartContext } from './CartContext';
// import oil-image6 from 'D:/App development/loginapp/src/Images/oil-image6.webp';

const Oil = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    {
      id: 1,
      name: 'Gingelly oil',
      image:OI1, 
      rating: 4.5,
      price:100,
    },
    {
      id: 2,
      name: 'Coconut Oil',
      image: OI2, 
      rating: 4.7,
      price:60,

    },
    {
      id: 3,
      name: 'Sunflower Oil',
      image:OI3, 
      rating: 4.3,
      price:210,
    },
    {
      id: 4,
      name: 'Mustard oil',
      image:OI4, 
      rating: 4.3,
      price:150,
    },
  ];

  // const addToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);
  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  return (
    <div className='oil_page'>
      <p></p>
      <br />
      <br />
      <div className="oil_image"></div>
      <div className="oil_description">
        {products.map((product) => (
          <div className="oil_product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Rating: {product.rating} ⭐</p>
            <p>Price:₹{product.price}</p>
            <button onClick={()=>{addToCart(product)}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oil;
