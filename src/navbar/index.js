import React from 'react';

const Navbar = (props) => {
    const { name } = props;
    return (
        <div className='navbar'>
            <div className='hidden'><h1>{name}</h1></div>
            <div className='title'><h1>NIGHT ZOOKEEPER</h1></div>
            <div className='name'><h1>Player: {name}</h1></div>
        </div>
    )
}

export default Navbar;