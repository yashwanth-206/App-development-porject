import React from 'react'
import './Signup.css'
import {useNavigate} from 'react-router-dom';
import { postData } from '../Api';
const Signup = () => {
  const navigate =useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [ConfirmPassword, setConPassword] = React.useState('');
  const Role = "User";
  const onHandleUsername = (e) => {
    setUsername(e.target.value);
  }
  const onHandleEmail = (e) => {
    setEmail(e.target.value);
  }
  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  }
  const onHandleConfirmPassword = (e) => {
    setConPassword(e.target.value);
  }
  const onHandleSignup = (event) => {
    // event.preventDefault();
    if(username==='' && password==='') {
      alert('Username and Password cannot be empty');
    }
    else if(username===''){
      alert('Username cannot be empty');
  
    }
    else if(password!==ConfirmPassword){ 
      alert('Passwords do not match');
      return;
    }
    else if(password==='') {
      alert('Password cannot be empty');
      return;
    }
    
    else{
    postData(username,email,password,ConfirmPassword,Role);
    alert('Successfully registered');
    navigate('/Login');
    }
  }
  return (
    <div className='signup_page'>
        <div className='signup_image'> 

        </div>
        <div className='signup_container'>
            <h1>Signup</h1>
            <div  className='signup_form_div'>
              <form className='signup_form'>
                <label>Username</label><input type='text' placeholder='Enter Username' onChange={onHandleUsername}></input>
                <label>Email</label><input type='email' placeholder='Enter Email' onChange={onHandleEmail}></input>
                <label>Password</label><input type='password' placeholder='Enter Password' onChange={onHandlePassword}></input>
                <label>ConfirmPassword</label><input type='password' placeholder='Enter Confirm Password' onChange={onHandleConfirmPassword}></input>
                <button onClick={onHandleSignup}>SignUp</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
