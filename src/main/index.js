import React from 'react';
import { useQuery, gql } from '@apollo/client';
import shuffleArray from '../helpers'
import Game from '../game';

const API = gql`
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

  const { loading, error, data } = useQuery(API);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const animalArr = [];

  data.topAnimals.forEach((item) => (
    animalArr.push({
      id: item._id,
      name: item.name,
      image: item.artwork.url,
    })
  ));

  shuffleArray(animalArr);

  const animalArrayDuplicated = animalArr.slice(0,8);
  animalArrayDuplicated.forEach((item) => (
    animalArrayDuplicated.push(item)
  ))

  shuffleArray(animalArrayDuplicated);

  return(
    <div>
      hi
      {/* <Login /> */}
      <Game cards={animalArrayDuplicated}/>
    </div>
  );
}

export default Main;