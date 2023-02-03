import React from "react";
import Error from "./ErrorMsg";
import Location from "./Location";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInfo: false,
      showError: false,
      city: "",
      cityData: "",
      locationLat: "",
      locationLon: "",
      weather: [],
      // date: "",
      // forecast: "",
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

  handleShowError = (e) => {
    this.setState({
      showError: false,
    });
  };

  handleDisplaySearch = async (e) => {
    e.preventDefault();

    try {
      let locationResponse = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
      );

      // console.log(locationResponse.data);
      // console.log(locationResponse.data[0].lat);
      // console.log(locationResponse.data[0].lon);
    

      if (!this.state.showError) {
        this.setState({
          displayInfo: true,
          cityData: locationResponse.data[0],
          locationLat: locationResponse.data[0].lat,
          locationLon: locationResponse.data[0].lon,

          // date: serverResponse.data.date,
          // forecast:serverResponse.data.desc,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        showError: true,
      });
    }
    // console.log(this.state.cityMap);
  };

  handleDisplayWeather = async () => {


    try{

      let serverResponse = await axios.get(
        `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.locationLat}&lon=${this.state.locationLon}`
      );

      this.setState({
        weather: serverResponse.data,
      })

      console.log(serverResponse);
    }
    catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>          
          <Container className="formContainer">
            <Form
              className="d-flex justify-content-center"
              onSubmit={this.handleDisplaySearch}
            >
              <Form.Group>
                <Form.Label style={{ textAlign: "center" }}>City</Form.Label>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="City"
                    onChange={this.handleSearchInput}
                    style={{ width: "200px" }}
                  />
                  <Button onClick={this.handleDisplaySearch}>Explore!</Button>
                </Form.Group>
              </Form.Group>
            </Form>
          </Container>

          {this.state.displayInfo && (
            <Container className="location">
              <Location
                mapImage={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationLat},${this.state.locationLon}&zoom=12&markers=icon:small-red-cutout|${this.state.locationLat},${this.state.locationLon}`}
                cityName={this.state.cityData.display_name}
                cityLat={this.state.cityData.lat}
                cityLon={this.state.cityData.lon}
              />
              {this.state.displayInfo &&
              <Button onClick={this.handleDisplayWeather}>Get Weather!</Button>}
              {this.state.weather.length > 0 &&
              <Weather
                className="weather"
                weather={this.state.weather}
                // date={this.state.date}
                // forecast={this.state.forecast}
              />}
            </Container>
          )}
        {this.state.showError && <Error show={this.handleShowError} />}
      </>
    );
  }
}

export default Main;
