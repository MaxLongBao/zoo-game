import React, { useState } from 'react';
import Cards from '../cards';

const Game = (props) => {
  const { cards } = props;
  const [newCards, setNewCards] = useState(cards);
  // const [isActive, setisActive] = useState(false);
  const [cardSelected, setCardSelected] = useState([]);

  // const handleClick = (id) => {
  //   console.log(id);
  //   const other = newCards.filter(card => (
  //     card.id !== id)
  //   )
  //   setNewCards(other);
  //   console.log(newCards);
  // }

  const handleClick = (id) => {
    if (cardSelected.length) {
      if (id === cardSelected[0]) {
        const updateCards = newCards.filter(card => (
          card.id !== id
        ))
        setNewCards(updateCards);
        setCardSelected([]);
      } else {
        setCardSelected([]);
      }
    } else {
      setCardSelected([id]);
    }
  };

  return (
    <div>
      <Cards cards={newCards} click={handleClick}/>
    </div>
  );
}

export default Game;