import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component{

  state = {
  }

  componentDidMount(){
    console.log(fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating'));
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    });
    return movies;
  }

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
  
}

export default App;