import React from 'react';

import './endgame.css';

const EndGame = (props) => {
  const { guesses } = props;
  return (
    <div className='endgame-container'>
      <div className='endgame-card'>
        <div className="endgame-text">
          <h1>GAME OVER!</h1>
        </div>
        <div className="endgame-guesses">
          <h1>You guessed in</h1>
          <h1>{guesses}</h1>
          <h1>attempts!</h1>
        </div>
        <button className='endgame-button' onClick={() => {console.log("restart")}}>PLAY!</button>
      </div>
    </div>
    )
}

export default EndGame;