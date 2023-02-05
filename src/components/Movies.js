import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return (
      <>
        <h2 className="moviesHeader">Movies</h2>
        <div className="movieCards">
          {this.props.movies.map((element, idx) => {
            return (
              <Movie
                key={idx}
                movieTitle={element.title}
                movieImg={`https://www.themoviedb.org/t/p/w500/${element.img_url}`}
                movieDesc={element.overview}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Movies;
