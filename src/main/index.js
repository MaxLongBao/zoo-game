import React from 'react';
import Game from '../game';

const Main = () => {

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
      <Game />
        {/* <img src={data.topAnimals[7].artwork.url} alt=""></img> */}
    </div>
  );
}

export default Main;