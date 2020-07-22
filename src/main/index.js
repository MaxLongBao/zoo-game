import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Game from '../game';
import Login from '../login';
import Navbar from '../navbar';
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
  const [lastArray, setLastArray] = useState([])
  const [name, setName] = useState('');
  const { loading, error, data } = useQuery(API_REQUEST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const animalArray = [];

  data.topAnimals.forEach((item) => (
    animalArray.push(item)
    ));

  const myFunc = () => {
  shuffleArray(animalArray);
  
  const selectedAnimals = animalArray.slice(0,8);
  const duplicateAnimalsArray = selectedAnimals.concat(selectedAnimals);
  shuffleArray(duplicateAnimalsArray);
  
  setLastArray(duplicateAnimalsArray.map((item, index) => (
    item = {
      id: item._id,
      name: item.name.toLowerCase(),
      image: item.artwork.url,
      flipped: card_back,
      activeImage: card_back,
      key: index,
    }
  )))
  }
  console.log(lastArray);

  const handleStart = (name) => {
    setName(name)
    myFunc()
  }

  return(
    <div>
      <Navbar name={name} />
      { name === ''
      ? <Login handleStart={handleStart}/>
      : name === '' ? null : <Game cards={lastArray} handleStart={handleStart}/>
      }
    </div>
  );
}

export default Main;