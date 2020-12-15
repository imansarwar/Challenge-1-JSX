import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

ReactDOM.render(
  <>
    <h1 className="head">Iman Sarwar Netflix Picks</h1>
    <div className="body">
      <p className="text">Here are my picks for the Netflix Movies</p>
      <ol>
        <li> Dark </li>
        <li> Alive </li>
        <li> Stranger Things </li>
        <li> The WIilloughbys </li>
        <li>Over The Moon</li>
      </ol>
    </div>
  </>,
  document.getElementById("root")
);
