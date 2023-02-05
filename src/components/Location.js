import React from 'react';
import { Card } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image'

class Location extends React.Component {
  render() {
    return (
      <Card bg='dark' style={{width:"450px", height:"auto", margin:"auto"}}>
        <Card.Header as={'h2'}>{this.props.cityName}</Card.Header>
        <Card.Img src={this.props.mapImage}/>
        <Card.Body>Lat: {this.props.cityLat}, Long: {this.props.cityLon}</Card.Body>
      </Card>
    )
  }
}

export default Location;