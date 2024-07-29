import React, { useContext } from 'react';
import './Dairy.css';
import { Cheese,GheeImage, Milk, PaneerImage } from './Datas';
import { CartContext } from './CartContext';

const Dairy = () => {
  const { addToCart } = useContext(CartContext);


  const products = [
    {
      id: 1,
      name: 'Milk',
      image: Milk,
      rating: 4.5,
      price:30,
    },
    {
      id: 2,
      name: 'Cheese',
      image:Cheese, // Replace with the actual image path
      rating: 4.7,
      price:50,
    },
    {
      id: 3,
      name: 'Ghee',
      image:GheeImage,
      rating: 4.3,
      price:120,
    },
    {
      id: 4,
      name: 'Paneer',
      image:PaneerImage, // Replace with the actual image path
      rating: 4.3,
      price:100,
    },
  ];

//  const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   }; 

  return (
    <div className='dairy_page'>
      <div className="dairy_image">
        {/* <img src="path/to/your/dairy-main-image.jpg" alt="Dairy Products" /> Replace with actual path */}
      </div>
      <div className="dairy_description">
        {products.map((product) => (
          <div className="dairy_product" key={product.id}>
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

export default Dairy;
