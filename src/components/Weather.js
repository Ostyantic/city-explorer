import React from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component{
  render() {
    return(
    <>
      <h2 className="weatherHeader">Daily Forecast</h2>
      <ul className="weatherList">      
      {this.props.weather.map((element, idx) => {
        return(
          <WeatherDay 
          key={idx}
          currentDate={element.date}
          currentForecast={element.desc}
          />
        )
      })}
      </ul>
    </>
    
    )
  }
}

export default Weather;