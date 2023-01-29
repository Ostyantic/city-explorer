import React from "react";

class Weather extends React.Component{
  render() {
    return(
    <>
      <h2>Daily Forecast</h2>
      <p>Date: {this.props.date}, Forecast: {this.props.forecast}</p>   
    </>
    
    )
  }
}

export default Weather;