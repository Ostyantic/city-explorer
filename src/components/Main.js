import React from "react";
import Error from "./ErrorMsg";
import Location from "./Location";
import Weather from "./Weather";
import Movies from "./Movies";
import Search from "./Search";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInfo: false,
      showError: false,
      city: "",
      cityData: [],
      locationLat: "",
      locationLon: "",
      weather: [],
      movies:[],
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

  handleShowError = () => {
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
      if (!this.state.showError) {
        this.setState({
          displayInfo: true,
          cityData: locationResponse.data[0],
          locationLat: locationResponse.data[0].lat,
          locationLon: locationResponse.data[0].lon,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        showError: true,
      });
    }
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

  handleDisplayMovies = async () => {
    try {
      let movieResponse = await axios.get(
        `${process.env.REACT_APP_SERVER}/movie?city=${this.state.city}`
      );
      this.setState({
        movies: movieResponse.data,
      })
      console.log(movieResponse);
    }
    catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>          
          <Container className="formContainer">
            <Search 
              changeInput={this.handleSearchInput}
              submit={this.handleDisplaySearch}
            />
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
              {this.state.displayInfo &&
              <Button className="weatherButton" onClick={this.handleDisplayWeather}>Get Weather!</Button>}
              {this.state.displayInfo &&
              <Button className="moviesButton" onClick={this.handleDisplayMovies}>List Movies!</Button>}
              {this.state.weather.length > 0 &&
              <Weather
                className="weather"
                weather={this.state.weather}
              />}
              {this.state.movies.length > 0 &&
              <Movies 
                className="movies"
                movies={this.state.movies}
              />}

        {this.state.showError && <Error show={this.handleShowError} />}
      </>
    );
  }
}

export default Main;
