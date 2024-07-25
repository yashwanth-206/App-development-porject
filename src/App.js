import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

import Login from './components/Login';
import Signup from './components/Signup';
import React from 'react';
import { Routes, Route, useLocation } from'react-router-dom';
import Navbar from './components/Navbar';
import Oil from './components/Oil';
import Cart from './components/Cart';

function App() {
  const curr_loc=useLocation();
  const array=['/','/Signup'];
  const nav=array.includes(curr_loc.pathname);
  return (
    <div className="App">
      {!nav && <Navbar/>}
      <header className="App-header">
        <Routes> 
          <Route path ="/" exact element={<Login/>}></Route>
          <Route path ="/Signup" exact element={<Signup/>}></Route>
          <Route path ="/HomePage" exact element={<HomePage/>}></Route>
          <Route path ="/Oil" exact element={<Oil/>}></Route>
          <Route path ="/Cart" exact element={<Cart/>}></Route>
        </Routes>
      </header>
    </div>

  );
}

export default App;
