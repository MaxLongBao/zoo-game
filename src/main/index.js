import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Game from '../game';
import Login from '../login';
import Navbar from '../navbar';
import EndGame from '../endgame';
import card_back from '../images/card_back.png';
import shuffleArray from '../helpers';

import './main.css';

const API_REQUEST = gql`
  {
    topAnimals {
      _id
      name
      artwork {
        url
      }
    }
  }
`

const Main = () => {
  const [gameCards, setGameCards] = useState([])
  const [name, setName] = useState('');
  const [endGame, setEndGame] = useState(false);
  const [guesses, setGuesses] = useState(0);
  const { loading, error, data } = useQuery(API_REQUEST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const animalArray = [];

  data.topAnimals.forEach((item) => (
    animalArray.push(item)
    ));

  const startGame = (name) => {

    shuffleArray(animalArray);
    
    const selectedAnimals = animalArray.slice(0,8);
    const duplicateAnimalsArray = selectedAnimals.concat(selectedAnimals);
    shuffleArray(duplicateAnimalsArray);
    
    setGameCards(duplicateAnimalsArray.map((item, index) => (
      item = {
        id: item._id,
        name: item.name.toLowerCase(),
        image: item.artwork.url,
        flipped: card_back,
        activeImage: card_back,
        key: index,
      }
    )))
    setName(name)
  }

  const handleStart = (name) => {
    startGame(name)
  }

  const handleEnd = (guesses) => {
    setGuesses(guesses);
    setEndGame(true);
  }

  return(
    <div className='main-container'>
      <Navbar name={name} />
      { name === ''
      ? <Login handleStart={handleStart} />
      : <Game cards={gameCards} handleEnd={handleEnd} /> }
      { endGame ? <EndGame guesses={guesses} /> : null }
    </div>
  );
}

export default Main;