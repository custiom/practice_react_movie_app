import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component{

  state = {
    greeting : 'Hello!',
    movies : [
      {
        title : "Matrix",
        poster : "https://miro.medium.com/max/20000/1*6YEZ5H5c5U-P5y_B4isT4w.jpeg"
      },
      {
        title : "Full Metal Jacket",
        poster : "https://t1.daumcdn.net/cfile/tistory/9915D6355CC497ED03"
      },
      {
        title : "Oldboy",
        poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7z7fPJ4CQETPsGc5jvt-dz3kuXhtMW4kJEgfjMv5zIAlBbZjiDw&s"
      },
      {
        title : "Star Wars",
        poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTvDvmU9CdIlcdLFCeXxf-RwvvcMTIjD6SyoJNu0xOPlDY49g&s"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "transpotting",
            poster : 'https://cdn.collider.com/wp-content/uploads/2015/09/trainspotting.jpg'
          }
          ...this.state.movies,
        ]
      });
    }, 5000);
  }

  render(){
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => (
          <Movie title={movie.title} poster={movie.poster} key={index} />
        ))}
      </div>
    );
  }

  
}

export default App;