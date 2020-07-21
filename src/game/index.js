import React, { useState } from 'react';
import Cards from '../cards';

import './game.css';

const Game = (props) => {
  const { cards } = props;
  const [newCards, setNewCards] = useState(cards);
  const [cardSelected, setCardSelected] = useState({id: null, key: null});
  // const [className, setClassName] = useState('card card-back')
  // const [selectedImage, setSelectedImage] = useState(null);

  // console.log('cards', cards);
  const handleClick = (id, key, image) => {
    if (cardSelected.id !== null) {
      if (id === cardSelected.id && key !== cardSelected.key) {
        newCards.map(card => {
          console.log("hi")
          if (card.id === id) {
            card.style = {visibility: 'hidden'};
          }
        })
      }
      setCardSelected({
        id: null,
        key: null,
      });
    } else {
      setCardSelected({
        id,
        key,
      });
      // newCards.map(card => {
      //   if (card.key === key) {
      //     card.image = '';
      //   }
      // })
      // console.log(cardSelected.key);
      // console.log(image);
    }
  };

  return (
    <div className='container'>
      <Cards cards={newCards} click={handleClick} />
    </div>
  );
}

export default Game;