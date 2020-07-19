import React from 'react';
import { useQuery, gql } from '@apollo/client';
import shuffleArray from '../helpers'

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
const Game = () => {

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

  console.log(animalArr);

  shuffleArray(animalArr);

  console.log(animalArr[0].name)

  const slicedAnimalArr = animalArr.slice(0,8);
  const animalArrayDuplicated = slicedAnimalArr;
  
  slicedAnimalArr.forEach((item) => (
    animalArrayDuplicated.push(item)
  ))

  shuffleArray(animalArrayDuplicated);
  console.log(animalArrayDuplicated[0].name);

  // return animalArr.map((item) => (
  //   <div key={item.id}>
  //     <div>{item.name}</div>
  //     <img src={item.image} alt=""></img>
  //   </div>
  // ));
  return (
    <div>
      hello
    </div>
  );
}

export default Game;