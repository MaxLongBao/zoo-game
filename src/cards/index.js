import React from 'react';
import './cards.css'

const Cards = (props) => {
  const { cards, click } = props;
  console.log(cards)
  const cardsList = cards.map(card => {
    return (
      <div key={Math.random()} onClick={() => {click(card.id)}}>
        <img src={card.image} alt='animal' />
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