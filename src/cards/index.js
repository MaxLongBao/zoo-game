import React from 'react';

import './cards.css'

const Cards = (props) => {
  const { cards, click } = props;
  const cardsList = cards.map(card => {
    return (
      <div key={Math.random()} onClick={() => {click(card.id, card.key)}} className="card" style={card.hidden}>
        <div><img src={card.image} alt='animal' /></div>
        <div>{card.name}</div>
      </div>
    )
  });

  return (
    <div className="card-container">
      {cardsList}
    </div>
  )
}

export default Cards;