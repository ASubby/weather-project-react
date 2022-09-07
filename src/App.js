import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Adesubomi and is{" "}
          <a
            href="https://github.com/ASubby/weather-project-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-sourced{" "}
          </a>{" "}
          on github
        </footer>
      </div>
    </div>
  );
}
