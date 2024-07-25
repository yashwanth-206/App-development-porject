import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getData } from '../Api';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [data, setData] = useState([]);

  const onhandleUsername = (e) => {
    setUsername(e.target.value);
  };

  const onhandlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onhandleClick = () => {
    navigate('/Signup');
    // alert(`Username: ${Username} Password: ${Password}`)
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getData();
      setData(res.data);
    };
    fetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (Username === '' && Password === '')
    {
      alert('Please enter both username and password');
    } 
    else if (Password === '') {
      alert('Please enter Password');
    } 
    else if (Username === '') {
      alert('Please enter username');
    } 
    else {
      const uindex = data ? data.findIndex(({Username})=>Username===Username):-1;
      if (uindex === -1) 
      {
        alert('Invalid username');
        console.log(uindex);
      } 
      else if (data[uindex].Password === Password) {
        alert('Invalid password');
         console.log(uindex);
      } 
      else {
        navigate('/HomePage');
      }
    }
  };

  return (
    <>
      <div className='LoginPage'>
        <div className='LoginImage'>
          
        </div>
          <div className='LoginContainer'>
            <h1 className='project_title'>Monkey Mart</h1>
          <h1>Login</h1>
            <form className='form' onSubmit={handleSubmit}>
              <label>Username</label>
              <input type='text' placeholder='Enter Username' onChange={onhandleUsername} />
            
              <label>Password</label>
              <input type='password' placeholder='Enter Password' onChange={onhandlePassword} />

              <button type='submit'>Login</button>
              <p>
                Don't have an account? <button type='button' onClick={onhandleClick}>SignUp</button>
              </p>
            </form>
            </div>
        </div>
      
    </>
  );
};

export default Login;
