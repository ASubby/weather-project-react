import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature ">
                {Math.round(props.data.temperature)}
              </span>{" "}
              <span className="units">⁰C </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 50%</li>
            <li>Humidity: 80%</li>
            <li>Wind:{Math.round(props.data.wind)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
