import React from "react";
import "./Weather.css";

export default function Weather() {
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
      </div>
      Hello from Weather
    </div>
  );
}
