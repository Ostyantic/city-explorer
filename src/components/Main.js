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
    };
  }

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

    let response = await axios.get(
      `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
    );

    console.log(response.data[0]);

    this.setState({
      displayInfo: true,
      cityData: response.data[0],
    });
  };

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onInput={this.handleSearchInput}
              />
              <Button onClick={this.handleDisplaySearch}>Explore!</Button>
            </Form.Group>
          </Form>
        </Container>

        {this.state.displayInfo && (
          <>
            <Container>
              <Location
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
