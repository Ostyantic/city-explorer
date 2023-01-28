import React from "react";
import Error from "./ErrorMsg";
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
      showError: false,
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

  handleShowError = (e) => {
    e.preventDefault();

    if(this.state.locationLat || this.state.locationLon){
      this.setState(
      {
        showError: false,
      });
    } else {
      this.setState(
      {
        showError: true,
      }
      );
    }

  }

  handleDisplaySearch = async (e) => {
    e.preventDefault();

    let locationResponse = await axios.get(
      `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
    );

    // console.log(locationResponse.data[0]);
    // console.log(locationResponse.data[0].lat);
    // console.log(locationResponse.data[0].lon);
    


    if(!this.state.showError){
      this.setState(
      {
        displayInfo: true,
        cityData: locationResponse.data[0],
        locationLat: locationResponse.data[0].lat,
        locationLon: locationResponse.data[0].lon,
      }
      );
    }

    console.log(this.state.cityMap);

  };

  render() {
    return (
      <>
        <Container className="formContainer">
          <Form className="d-flex justify-content-center" onSubmit={this.handleDisplaySearch}>
            <Form.Group>
              <Form.Label style={{textAlign:'center'}}>City</Form.Label>
              <Form.Group className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={this.handleSearchInput}
                  style={{width:'200px'}}
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
          </Container>
        )}

        {this.state.showError && (
          <Error show={this.state.showError}/>
        )}
      </>
    );
  }
}

export default Main;
