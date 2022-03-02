import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
  }

if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mt-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Pick a city, any city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday, 7:30am CEST</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
                className="float-left"
              />
              <div className="float-left">
                <div className="temperature">6</div>
                <div className="unit">°C</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 60%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
    );
}

  const apiKey = "53315a4c01471ff10f1bbba4b3a95f94";
  let city = "London";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  
}
