import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {

  state = {
    isLoading:true,
    movies: []
  }

  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies:movies, isLoading:false});
  }

  async componentDidMount(){
   this.getMovies(); 
  }

  render(){
    const {isLoading, movies} = this.state;
    return(
      <div>
        {isLoading ? "Loading..." : movies.map(movie =>{
          console.log(movie);
          return <Movie key={movie.id} id={movie.id} years={movie.year} title={movie.title} summary={movie.summary}/>
        })}
      </div>
    );
  }
}

export default App;