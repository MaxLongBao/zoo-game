import React, { useState } from 'react';
import Cards from '../cards';

import './game.css';

const Game = (props) => {
  const { cards } = props;
  const [newCards, setNewCards] = useState(cards);
  const [cardSelected, setCardSelected] = useState({id: null, key: null});

  // const handleClick = (id) => {
  //   console.log(id);
  //   const other = newCards.filter(card => (
  //     card.id !== id)
  //   )
  //   setNewCards(other);
  //   console.log(newCards);
  // }

  const handleClick = (id, key) => {
    if (cardSelected.id !== null) {
      if (id === cardSelected.id && key !== cardSelected.key) {
        newCards.map(card => {
          console.log("hi")
          if (card.id === id) {
            card.hidden = {visibility: 'hidden'};
          }
        })
      }
      setCardSelected({
        id: null,
        key: null,
      });
    } else {
      setCardSelected({
        id: id,
        key: key,
      });
      console.log(cardSelected.key);
    }
  };

  return (
    <div className='container'>
      <Cards cards={newCards} click={handleClick}/>
    </div>
  );
}

export default Game;