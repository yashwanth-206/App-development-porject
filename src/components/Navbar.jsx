import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Cart from './Cart';
import Oil from './Oil';
import './Navbar.css';


const Navbar = () => {
  const navigate=useNavigate();
    const [page,setPage]=useState('');
    
    const onhandleHome=(event)=>{
        event.preventDefault();
        navigate("/HomePage");
      }
      const onhandleAboutus=(event)=>{
      event.preventDefault();
      navigate("/AboutUs");
    }
    const onhandleCart=(event)=>{
      event.preventDefault();
        navigate("/Cart");
    }
    const onhandleDropdown = (event) => {
      const selectedPage = event.target.value;
      setPage(selectedPage);
      if (selectedPage === 'apple' || selectedPage === 'banana' || selectedPage === 'orange') {
        navigate('/Oil');
      }
    };
  return (
    <>
    <div className='Navbar_main'>
      <h1>Monkey Mart</h1>
      <button onClick={onhandleHome}>Home</button>
      <button onClick={onhandleAboutus}>About Us</button>
      <button onClick={onhandleCart}>Cart </button>
      <select onChange={onhandleDropdown}>
        <option value="" disabled hidden>Categories</option>
        <option value="a">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      
    </div>
    <div>
      {(page === "/HomePage")?<HomePage></HomePage>:null}
      {(page === "/AboutUs")?<AboutUs></AboutUs>:null}
      {(page === "/Cart")?<Cart></Cart>:null}


    </div>

    </>
    
  )
}

export default Navbar
