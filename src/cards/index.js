import React from 'react';

import './cards.css';

const Cards = (props) => {
  const { cards, handleClick } = props;
  const cardsList = cards.map(card => {
    return (
      <div key={card.key} onClick={() => {handleClick(card.id, card.key)}} className={"card"} style={card.style}>
        <img src={card.activeImage} alt='animal' />
      </div>
    )
  });

  return (
    <div className='card-container'>
      {cardsList}
    </div>
  )
}

export default Cards;