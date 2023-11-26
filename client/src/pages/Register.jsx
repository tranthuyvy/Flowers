import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>REGISTER</h1>
      <form>
        <input required type='email' placeholder='Email'/>
        <input required type='text' placeholder='Username'/>
        <input required type='password' placeholder='Password'/>
        <button>Register</button>
      </form>
      <span>
          Do you have an account <Link to="/login">Login</Link>
      </span>
    </div>
  )
}

export default Register