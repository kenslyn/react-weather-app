import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Calgary" />
        <footer>
          This project was coded by <a href="">Mackenzie Percy</a> and is{" "}
          <a
            href="https://github.com/kenslyn/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
