import './App.css';
import HomePage from './components/HomePage';

import Login from './components/Login';
import Signup from './components/Signup';
import React from 'react';
import { Routes, Route, useLocation } from'react-router-dom';
import Navbar from './components/Navbar';
import Oil from './components/Oil';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Dairy from './components/Dairy';
import Cleaning from './components/Cleaning';
import Footer from './components/Footer';
import ProfilePage from './components/Profile';
import Employee from './components/Employee';

function App() {
  const curr_loc=useLocation();
  const array=['/Login','/Signup'];
  const nav=array.includes(curr_loc.pathname);
  return (
    <div className="App">
      {!nav && <Navbar/>}
      <header className="App-header">
        <Routes> 
          <Route path ="/" exact element={<HomePage/>}></Route>
          <Route path ="/Signup" exact element={<Signup/>}></Route> 
          <Route path ="/Login" exact element={<Login/>}></Route> 
          <Route path ="/HomePage" exact element={<HomePage/>}></Route>
          <Route path ="/Oil" exact element={<Oil/>}></Route>
          <Route path ="/Cart" exact element={<Cart/>}></Route>
          <Route path ="/AboutUs" exact element={<AboutUs />}></Route>
          <Route path ="/shop" exact element={<shop/>}></Route>
          <Route path ="/Dairy" exact element={<Dairy/>}></Route>
          <Route path ="/Cleaning" exact element={<Cleaning/>}></Route>
          <Route path ="/Profile" exact element={<ProfilePage/>}></Route>
          <Route path ="/Employee" exact element={<Employee/>}></Route>
          
        </Routes>
      {!nav && <Footer/>}
      </header>
    </div>

  );
}

export default App;
