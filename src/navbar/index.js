import React from 'react';

import './navbar.css';

const Navbar = (props) => {
    const { name, audio } = props;
    return (
        <div className='navbar'>
            <div className='hidden'><img src={audio} alt='volume control' /></div>
            <div className='title'><h1>NIGHT ZOOKEEPER</h1></div>
            <div className='name'><h1>Player: {name}</h1></div>
        </div>
    )
}

export default Navbar;