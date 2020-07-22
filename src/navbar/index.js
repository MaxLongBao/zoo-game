import React from 'react';

const Navbar = (props) => {
    const { name } = props;
    return (
        <div className='navbar'>
            <div></div>
            <div className='title'><h1>Night Zookeeper</h1></div>
            <div className='name'><h1>{name}</h1></div>
        </div>
    )
}

export default Navbar;