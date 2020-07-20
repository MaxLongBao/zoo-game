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
  // return animalArr.map((item) => (
  //   <div key={item.id}>
  //     <div>{item.name}</div>
  //     <img src={item.image} alt=""></img>
  //   </div>
  // ));
  // const { loading, error, data } = useQuery(API);
  // console.log(data);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // let animalObj = {};
  // const animalArr = [];

  // data.topAnimals.map(({ _id, name, artwork}) => (
  //   animalObj = {
  //     _id,
  //     name
  //   }
  //   animalArr.push(animalObj);
  // ));

  return(
    <div>
      hi
      {/* <Login /> */}
      <Game cards={animalArrayDuplicated}/>
        {/* <img src={data.topAnimals[7].artwork.url} alt=""></img> */}
    </div>
  );
}

export default Main;