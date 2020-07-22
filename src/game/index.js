import React, { useState, useEffect } from 'react';
import Cards from '../cards';

import './game.css';

const Game = (props) => {
  const { cards, handleStart } = props;
  const [newCards, setNewCards] = useState(cards);
  const [cardSelected, setCardSelected] = useState({id: null, key: null});
  const [counter, setCounter] = useState(0);

  useEffect(() => {}, [counter] )

  const handleClick = (id, key) => {
    if (cardSelected.id !== null) {
      if (id === cardSelected.id && key !== cardSelected.key) {
        newCards[key].activeImage = newCards[key].image;
        setCounter(counter - 1)
        setTimeout(() => {
          newCards[key].style = {visibility: 'hidden'}
          newCards[cardSelected.key].style = {visibility: 'hidden'}
          setCounter(counter + 2)
        }, 1000)
        setCardSelected({
          id: null,
          key: null,
        });
      } else {
        newCards[key].activeImage = newCards[key].image
        console.log('card is visible')
        setTimeout(() => {
          newCards[key].activeImage = newCards[key].flipped
          newCards[cardSelected.key].activeImage = newCards[cardSelected.key].flipped
          console.log("card is flipped back")
          setCounter(counter + 1)}, 1000)
        console.log(counter)
        setCardSelected({
          id: null,
          key: null,
        });
      }
    } else {
      setCardSelected({
        id,
        key,
      });
      newCards[key].activeImage = newCards[key].image;
    }
  };
  console.log(cards)

console.log(newCards === [])
   return(
    <div className='container'>
      <Cards cards={newCards} handleClick={handleClick} />
    </div>
  );
}

export default Game;