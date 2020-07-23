import React from 'react';

import './navbar.css';

const Navbar = (props) => {
    const { name, audio, handleAudio } = props;
    return (
        <div className='navbar'>
            <div onClick={() => {handleAudio()}}>
                <img src={audio} alt='volume control' className='audio' / >
            </div>
            <div className='title'><h1>NIGHT ZOOKEEPER</h1></div>
            <div className='name'><h1>Player: {name}</h1></div>
        </div>
    )
}

export default Navbar;
