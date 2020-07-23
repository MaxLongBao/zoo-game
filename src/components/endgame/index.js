import React from 'react';

import './endgame.css';

const EndGame = (props) => {
  const { guesses } = props;
  return (
    <div className='endgame-container'>
      <div className='endgame-card'>
        <div className='endgame-text'>
          <h1>GAME OVER!</h1>
          <div className='endgame-guesses'>
            <h1>You guessed in</h1>
            <div className='endgame-guesses-num'>
              <h1>{guesses}</h1>
            </div>
            <h1>attempts!</h1>
          </div>
        </div>
        <a href='https://maxlongbao.github.io/zoo-game/'><button className='endgame-button'>PLAY AGAIN!</button></a>
      </div>
    </div>
    )
}

export default EndGame;