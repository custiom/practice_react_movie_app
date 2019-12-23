import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name : "kimchi",
    image :  "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating : 5.0
  },
  {
    id:2,
    name : "bibimbap",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnX9Bhtg6wTcsIep6812oCPF2er1jqzxyW3MBVRhmIcrwVE7C&s",
    rating : 4.8
  },
  {
    id:3,
    name : "kimbap",
    image : "https://ryukoch.com/images/food-blog/kimbap-t.jpg",
    rating : 3.5
  },
  {
    id:4,
    name : "samgyeopsal",
    image : "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1",
    rating : 2.8
  }
]

function App(){
  return (
      <div>
        {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
      </div>
  );
}

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt ={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export default App;