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

  const animalArray = [];

  data.topAnimals.forEach((item) => (
    animalArray.push(item)
  ));
  shuffleArray(animalArray);
  
  const selectedAnimals = animalArray.slice(0,8);
  const duplicateAnimalsArray = selectedAnimals.concat(selectedAnimals);
  // animalArrayDuplicated.forEach((item) => (
    //   animalArrayDuplicated.push(item)
    // ))
  shuffleArray(duplicateAnimalsArray);
  const lastArray = duplicateAnimalsArray.map((item, index) => (
    item = {
      id: item._id,
      name: item.name,
      image: item.artwork.url,
      key: index,
    }
  ))
  console.log(lastArray);
    

  return(
    <div>
      hi
      {/* <Login /> */}
      <Game cards={lastArray}/>
    </div>
  );
}

export default Main;