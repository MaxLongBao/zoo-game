import React, { useState, useEffect } from 'react';
import Cards from '../cards';

import './game.css';

const Game = (props) => {
  const { cards, handleEnd } = props;
  const [newCards, setNewCards] = useState(cards);
  const [cardSelected, setCardSelected] = useState({id: null, key: null});
  const [counter, setCounter] = useState(0);
  const [cardsLeft, setCardsLeft] = useState(4);

  useEffect(() => {}, [counter] )

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
      setCounter(counter + 1)}, 200)
      newCards[key].style = animation;

    if (cardSelected.id !== null) {
      if (id === cardSelected.id && key !== cardSelected.key) {
        setTimeout(() => {
          newCards[key].style = {visibility: 'hidden'}
          newCards[cardSelected.key].style = {visibility: 'hidden'}
          setCounter(counter - 1)
        }, 1000)
        setCardsLeft(cardsLeft - 2);
        setCardSelected(resetCard);
      } else {
        // console.log('card is visible')
        setTimeout(() => {
          newCards[key].activeImage = newCards[key].flipped
          newCards[cardSelected.key].activeImage = newCards[cardSelected.key].flipped
          newCards[key].style = {}
          newCards[cardSelected.key].style = {}
          // console.log("card is flipped back")
          setCounter(counter - 1)}, 1000)
        console.log(counter)
        setCardSelected(resetCard);
      }
    } else {
      setCardSelected({
        id,
        key,
      });
    }
  };
  console.log(cardsLeft)
    if (cardsLeft === 0) {
      setTimeout(handleEnd, 1000);
    }
   return(
    <div className='container'>
      <Cards cards={newCards} handleClick={handleClick} />
    </div>
  );
}

export default Game;