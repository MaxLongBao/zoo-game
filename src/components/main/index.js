import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Game from '../game';
import Login from '../login';
import Navbar from '../navbar';
import EndGame from '../endgame';
import card_back from '../../assets/images/card_back.png';
import shuffleArray from '../../helpers';
import play from '../../assets/images/play.png';
import pause from '../../assets/images/pause.png';

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
  const [audioIcon, setAudioIcon] = useState(pause);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const { loading, error, data } = useQuery(API_REQUEST);

  if (loading) return (
    <div className='loading'>
      <h1>Loading... Please wait</h1>
    </div>
  );

  if (error) return (
    <div className='error'>
      <h1>Loading Error</h1>
      <a href='https://maxlongbao.github.io/zoo-game/'>Click here</a>
      <p>to reload the page or manually refresh your browser</p>
    </div>
  );

  const responseArray = [];

  data.topAnimals.forEach((item) => (
    responseArray.push(item)
    ));

  const startGame = (name) => {

    shuffleArray(responseArray);
    
    const selectedAnimals = responseArray.slice(0,8);
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

  const handleAudio = () => {
    if (audioIcon === pause) {
      setAudioIcon(play);
      setIsAudioOn(false);
    } else {
      setAudioIcon(pause);
      setIsAudioOn(true);
    }
  }

  return(
    <div className='main-container'>
      <Navbar name={name} audio={audioIcon} handleAudio={handleAudio}/>
      { name === ''
      ? <Login handleStart={handleStart} />
      : <Game cards={gameCards} handleEnd={handleEnd} audio={isAudioOn}/> }
      { endGame ? <EndGame guesses={guesses} /> : null }
    </div>
  );
}

export default Main;