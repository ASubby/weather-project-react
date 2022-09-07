import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      description: response.data.weather[0].description,
      city: response.data.name,
      date: `Thursday 11:29`,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
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
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature ">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="units">⁰C </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 50%</li>
              <li>Humidity: 80%</li>
              <li>Wind:{Math.round(weatherData.wind)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `749717f0f4a2e36ed817dec27de38882`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
