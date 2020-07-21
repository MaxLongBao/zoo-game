import React from 'react';

import './cards.css';
// import card_back from '../images/card_back.png';

const Cards = (props) => {
  const { cards, click } = props;
  const cardsList = cards.map(card => {
    return (
      <div key={card.key} onClick={() => {click(card.id, card.key)}} className={"card"} style={card.style}>
        <img src={card.activeImage} alt='animal' />
        {/* <div className="card-name">{card.name}</div> */}
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