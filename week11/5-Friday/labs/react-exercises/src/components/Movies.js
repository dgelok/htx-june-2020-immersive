import React, { Component } from 'react';
import Stepper from './Stepper';

class Movies extends Component {

    // api call
    // display title
    // stepper 
    constructor() {
        super();
        this.state = {
            movies : []
        }
    }

    componentDidMount = async () => {
        let url = "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json";
        let response = await fetch(url);
        let result = await response.json();
        
        this.setState({
            movies: result.movies
        })
        console.log(this.state.movies);


    }

  render() {

      let allMovies = this.state.movies.map((movie, index) =>{
          let movieURL = "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/" + movie.poster
          return <div className="m-3" key={index}>
                <h1>{movie.title}</h1>
                <img height="350px" src={movieURL} /> <br />
                <Stepper key={index}/>
                <br />
                <br />
                <br />
          </div>
      })

    return (
      <>
        Here's the Movies
        {allMovies}
      </>
    )
  }
}

export default Movies
