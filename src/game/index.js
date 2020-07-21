import React, { useState, useEffect } from 'react';
import Cards from '../cards';

import './game.css';

const Game = (props) => {
  const { cards } = props;
  const [newCards, setNewCards] = useState(cards);
  const [cardSelected, setCardSelected] = useState({id: null, key: null});
  const [isUpdate, setIsUpdate] = useState(0);

  useEffect(() => {}, [isUpdate] )

  const handleClick = (id, key) => {
    if (cardSelected.id !== null) {
      if (id === cardSelected.id && key !== cardSelected.key) {
        newCards[key].activeImage = newCards[key].image;
        setIsUpdate(isUpdate - 1)
        setTimeout(() => {
          newCards[key].style = {visibility: 'hidden'}
          newCards[cardSelected.key].style = {visibility: 'hidden'}
          setIsUpdate(isUpdate + 2)
        }, 1000)
        setCardSelected({
          id: null,
          key: null,
        });
        // newCards[key].style = {visibility: 'hidden'};
        // newCards[cardSelected.key].style = {visibility: 'hidden'};
      } else {
        newCards[key].activeImage = newCards[key].image
        console.log('card is visible')
        setTimeout(() => {
          newCards[key].activeImage = newCards[key].flipped
          newCards[cardSelected.key].activeImage = newCards[cardSelected.key].flipped
          console.log("card is flipped back")
          setIsUpdate(isUpdate + 1)}, 1000)
        console.log(isUpdate)
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

  return (
    <div className='container'>
      <Cards cards={newCards} click={handleClick} />
    </div>
  );
}

export default Game;