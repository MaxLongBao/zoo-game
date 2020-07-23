import React, { useState, useEffect } from 'react';
import Sound from 'react-sound';
import Cards from '../cards';
import sound from '../sounds/zoo.mp3';

const Game = (props) => {
  const { cards, handleEnd, audio } = props;
  const [newCards, setNewCards] = useState(cards);
  const [cardSelected, setCardSelected] = useState({id: null, key: null});
  const [update, setUpdate] = useState(0);
  const [cardsLeft, setCardsLeft] = useState(16);
  const [guesses, setGuesses] = useState(0);

  useEffect(() => {}, [update] )

  const animation = {
    transform: 'rotateY(180deg)',
    transition: 'transform 0.8s',
  }
  
  const resetCard = {
    id: null,
    key: null,
  };
  
  const handleClick = (id, key) => {

      setTimeout(() => {newCards[key].activeImage = newCards[key].image
      setUpdate(update + 1)}, 200);

      newCards[key].style = animation;
      setGuesses(guesses + 0.5);

    if (cardSelected.id !== null) {
      if (id === cardSelected.id && key !== cardSelected.key) {
        setTimeout(() => {
          newCards[key].style = {visibility: 'hidden'}
          newCards[cardSelected.key].style = {visibility: 'hidden'}
          setUpdate(update - 1)
        }, 1000)
        setCardsLeft(cardsLeft - 2);
        setCardSelected(resetCard);
      } else {
        setTimeout(() => {
          newCards[key].activeImage = newCards[key].flipped
          newCards[cardSelected.key].activeImage = newCards[cardSelected.key].flipped
          newCards[key].style = {}
          newCards[cardSelected.key].style = {}
          setUpdate(update - 1)}, 1000)
        setCardSelected(resetCard);
      }
    } else {
      setCardSelected({
        id,
        key,
      });
    }
  };

  let play;

  if (cardsLeft === 0) {
    setTimeout(() => handleEnd(guesses), 1000);
  }

  if (audio === true) {
    play = Sound.status.PLAYING; 
  } else {
    play = Sound.status.PAUSED;
  }
  console.log("aksdgaskjdhgskjdgalkjg", audio)

    return(
    <div className='container'>
      <Cards cards={newCards} handleClick={handleClick} />
      <Sound url={sound} playStatus={play} loop={true}/>
    </div>
  );
}

export default Game;