import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
      <h1>LOGIN</h1>
      <form>
        <input required type='text' placeholder='Username'/>
        <input required type='password' placeholder='Password'/>
        <button>Login</button>
      </form>
      <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
    </div>
  )
}

export default Login