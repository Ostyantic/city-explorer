import React from "react";
// import Map from "./Map";
import Location from "./Location";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInfo: false,
      city: "",
      cityData: "",
      locationLat: "",
      locationLon: "",
    };
  }

  // event handler that console logs input on search field
  handleSearchInput = (e) => {
    let cityName = e.target.value;
    this.setState(
      {
        city: cityName,
      },
      () => console.log(this.state.city)
    );
  };

  handleDisplaySearch = async (e) => {
    e.preventDefault();

    let locationResponse = await axios.get(
      `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
    );

    console.log(locationResponse.data[0]);
    console.log(locationResponse.data[0].lat);
    console.log(locationResponse.data[0].lon);

    this.setState({
      displayInfo: true,
      cityData: locationResponse.data[0],
      locationLat: locationResponse.data[0].lat,
      locationLon: locationResponse.data[0].lon,
    });

    console.log(this.state.cityMap);

  };

  render() {
    return (
      <>
        <Container className="formContainer">
          <Form>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={this.handleSearchInput}
              />
              <Button onClick={this.handleDisplaySearch}>Explore!</Button>
            </Form.Group>
          </Form>
        </Container>

        {this.state.displayInfo && (
          <>
            <Container>
              {/* <Map /> */}
              <Location
                mapImage={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationLat},${this.state.locationLon}&zoom=10&markers=icon:small-red-cutout|${this.state.locationLat},${this.state.locationLon}`}
                cityName={this.state.cityData.display_name}
                cityLat={this.state.cityData.lat}
                cityLon={this.state.cityData.lon}
              />
            </Container>
          </>
        )}
      </>
    );
  }
}

export default Main;
