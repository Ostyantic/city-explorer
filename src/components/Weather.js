import React from "react";

class Weather extends React.Component{
  render() {
    return(
    <>
      <h2 className="weatherHeader">Daily Forecast</h2>
      <ul className="weatherList">
      {this.props.weather.map((element, idx) => {
        return(
          <li className="weatherDay" style={{textAlign:"center"}} key={idx}>
            <h5 style={{background:"black"}}>Date</h5>
            <p>{`${element.date}`}</p>
            <h5 style={{background:"black"}}>Forecast</h5>   
            <p>{`${element.desc}`}</p>
          </li>
        )
      })}
      </ul>
    </>
    
    )
  }
}

export default Weather;