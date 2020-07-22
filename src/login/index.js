import React, { useState } from 'react';

const Login = (props) => {
    const { handleStart } = props;

    const [name, setName] = useState('');

    return (
        <div>
            <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                onChange={e => setName(e.target.value)}
              />
              <small className="form-text text-muted">
                This is a memory game
              </small>
            </div>
            <button onClick={() => {handleStart(name)}}>Submit</button>
          </form>
        </div>
    )
}

export default Login;