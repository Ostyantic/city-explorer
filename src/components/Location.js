import React from 'react';
import { Card } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image'

class Location extends React.Component {
  render() {
    return (
      <Card bg='dark'>
        <Card.Header as={'h2'}>{this.props.cityName}</Card.Header>
        <Card.Body>Lat: {this.props.cityLat}, Long: {this.props.cityLon}</Card.Body>
        <Card.Img src={this.props.mapImage}/>
      </Card>
    )
  }
}

export default Location;