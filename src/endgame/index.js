import React from 'react';

const EndGame = (props) => {
    const { handleEnd } = props;
    return (
        <div>
            <button onClick={() => {handleEnd()}}>button</button>
        </div>
    )
}

export default EndGame;