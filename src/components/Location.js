import React from 'react';
import { Card } from 'react-bootstrap';

class Location extends React.Component {
  render() {
    return (
      <Card bg='dark'>
        <Card.Header as={'h2'}>City Info: {this.props.cityName}</Card.Header>
        <Card.Body>Lat: {this.props.cityLat}, Long: {this.props.cityLon}</Card.Body>
      </Card>
    )
  }
}

export default Location;