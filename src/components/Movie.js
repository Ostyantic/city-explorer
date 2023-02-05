import React from "react";
import { Card } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card bg="dark" style={{ width: "14rem" }}>
          <Card.Header>{this.props.movieTitle}</Card.Header>
          <Card.Img
            src={this.props.movieImg}
            alt={this.props.movieTitle}
            height={300}
            width={200}
          />
          <Card.Body>{this.props.movieDesc}</Card.Body>
        </Card>
      </>
    );
  }
}

export default Movie;
