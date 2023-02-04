import React from "react";

class Movies extends React.Component{
  render() {
    return(
    <>
      <h2>Movies</h2>
      <ul>
      {this.props.movies.map((element, idx) => {
        return(
          <li key={idx}>
            <p>Title: {element.title}</p>
            <p>Release Date: {element.release_date}</p>   
          </li>
        )
      })}
      </ul>
    </>)
  }
}

export default Movies;