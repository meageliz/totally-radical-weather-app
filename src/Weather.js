import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData ({
        temperature: response.data.main.temp,
        description: response.data.main.weather[0].description,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        date: "Wednesday at 7:09am",
    });
    setReady(true);
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <div className="temperature">{weatherData.temperature}</div>
                <div className="unit">°C</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
    );
} else {
  let apiKey = "53315a4c01471ff10f1bbba4b3a95f94";
  let city = "London";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse); 
  
  return (
      "Loading..."
  );
}

 
  
}
