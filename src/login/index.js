import React, { useState } from 'react';

import './login.css';

const Login = (props) => {
  const { handleStart } = props;

  const [name, setName] = useState('');

  return (
  <div className='form-container'>
    <div className='form-background'>
    </div>
    <div className='form-box'>
      <form>
      <div className="form-group">
        <div className="form-text">
          <h1>WELCOME!</h1>
        </div>
          <input
            type="name"
            className="form-control"
            placeholder='Insert your name'
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button className='form-button' onClick={() => {handleStart(name)}}>PLAY!</button>
      </form>
    </div>
  </div>
  )
}

export default Login;