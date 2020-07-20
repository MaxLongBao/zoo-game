import React, { useState } from 'react';
import Cards from '../cards';

import './game.css';

const Game = (props) => {
  const { cards } = props;
  const [newCards, setNewCards] = useState(cards);
  const [cardSelected, setCardSelected] = useState(null);

  // const handleClick = (id) => {
  //   console.log(id);
  //   const other = newCards.filter(card => (
  //     card.id !== id)
  //   )
  //   setNewCards(other);
  //   console.log(newCards);
  // }

  const handleClick = (id) => {
    if (cardSelected) {
      if (id === cardSelected) {
        // const updateCards = newCards.filter(card => (
        //   card.id !== id
        // ))
        // setNewCards(updateCards);
        newCards.map(card => {
          // card.style = {visibility: card.id === id ? 'hidden'}
          console.log("hi")
          if (card.id === id) {
            card.hidden = {visibility: 'hidden'};
          };
        })
      } else {
      }
      setCardSelected(null);
    } else {
      setCardSelected(id);
      console.log(id);
    }
  };

  return (
    <div className='container'>
      <Cards cards={newCards} click={handleClick}/>
    </div>
  );
}

export default Game;