import React from 'react';
import { Card } from 'react-bootstrap';

class Location extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header>{this.props.cityName}</Card.Header>
        <Card.Body>{this.props.cityLat}, {this.props.cityLon}</Card.Body>
      </Card>
    )
  }
}

export default Location;