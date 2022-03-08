import React from "react";

export default function WeatherForecastDay() {
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{forecast[0].dt}</div>
      <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(forecast[0].temp.max)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(forecast[0].temp.min)}°
        </span>
      </div>
    </div>
  );
}
