import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.main.weather[0].description,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: "Wednesday at 7:09am",
    });
  }

  if (weatherData.ready) {
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "53315a4c01471ff10f1bbba4b3a95f94";
    let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
