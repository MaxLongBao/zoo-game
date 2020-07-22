import React from 'react';

const Navbar = (props) => {
    const { name } = props;
    return (
        <div>
            <h1>Night Zookeeper</h1>
            <h1>{name}</h1>
        </div>
    )
}

export default Navbar;