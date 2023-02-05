import React from "react";
import { Card } from "react-bootstrap";

class Movies extends React.Component{
  render() {
    return(
    <>
      <h2 className="moviesHeader">Movies</h2>
      <div className="movieCards">
      {this.props.movies.map((element, idx) => {
        return(
          <Card bg="dark" key={idx} style={{width:"14rem"}}>
            <Card.Header>{element.title}</Card.Header>
            <Card.Img src={`https://www.themoviedb.org/t/p/w500/${element.img_url}`} alt={element.title} height={300} width={200}/>
            <Card.Body>{element.overview}</Card.Body>
          </Card>
        )
      })}
      </div>
    </>)
  }
}

export default Movies;