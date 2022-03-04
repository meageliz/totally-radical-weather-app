import React from "react";

export default function WeatherTemperature() {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{props.data.temperature}</span>
      <span className="unit">°C</span>
    </div>
  );
}
