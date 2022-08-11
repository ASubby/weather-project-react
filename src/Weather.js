import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>
      <ul>
        <li>Thursday 11:29</li>
        <li>Mostly Clear</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="icon"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature ">6</span>{" "}
              <span className="units">⁰C </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 50%</li>
            <li>Humidity: 80%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}