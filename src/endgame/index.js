import React from 'react';

const EndGame = (props) => {
  const { guesses } = props;
  return (
    <div>
      you guessed in {guesses} guesses!
      {/* <button onClick={() => {handleEnd()}}>button</button> */}
    </div>
  )
}

export default EndGame;