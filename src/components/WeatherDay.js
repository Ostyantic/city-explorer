import React from "react";

class WeatherDay extends React.Component{
  render() {
    return(
    <div>
        <li className="weatherDay" style={{textAlign:"center"}}>
          <h5 style={{background:"black"}}>Date</h5>
          <p>{`${this.props.currentDate}`}</p>
          <h5 style={{background:"black"}}>Forecast</h5>   
          <p>{`${this.props.currentForecast}`}</p>  
        </li>

    </div>
    )
  }
}

export default WeatherDay;