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
              placeholder="Enter a City.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Calgary</h1>
      <ul>
        <li>Tuesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 4%</li>
            <li>Humidity: 63%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
