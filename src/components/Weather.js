import React from "react";

class Weather extends React.Component{
  render() {
    return(
    <>
      <h2>Daily Forecast</h2>
      <ul>
      {this.props.weather.map((element, idx) => {
        return(
          <li key={idx}>
            <p>Date: {element.date}</p>
            <p>Forecast: {element.desc}</p>   
          </li>
        )
      })}
      </ul>
    </>
    
    )
  }
}

export default Weather;