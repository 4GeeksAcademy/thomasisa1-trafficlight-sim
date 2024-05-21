import React, { useState, useEffect } from "react";
import './TrafficLight.css';

const TrafficLight = () => {
  const [color, setColor] = useState("");
  const colors = ["red", "yellow", "green"];
  const [isRunning, setIsRunning] = useState(false);

  function highlightColor(clickedColor) {
    setColor(clickedColor);
  }

  function startLights() {
    let currentIndex = colors.indexOf(color);
    currentIndex = (currentIndex + 1) % colors.length;
    setColor(colors[currentIndex]);
  }

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        startLights();
      }, 2500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, color]);

  return (
    <>
      <div className="traffic-light-container">
        <div className="traffic-light-stand"></div>
        <div className="traffic-light">
          <button
            onClick={() => highlightColor("red")}
            className={`light red ${color === "red" ? "glow-red" : ""}`}
          ></button>
          <button
            onClick={() => highlightColor("yellow")}
            className={`light yellow ${color === "yellow" ? "glow-yellow" : ""}`}
          ></button>
          <button
            onClick={() => highlightColor("green")}
            className={`light green ${color === "green" ? "glow-green" : ""}`}
          ></button>
        </div>
      </div>
      <div className="buttons-container">
        <div className="controls">
          {isRunning ? (
            <button
              onClick={() => setIsRunning(false)}
              className="btn btn-danger"
            >
              Stop the lights
            </button>
          ) : (
            <button
              onClick={() => {
                setColor("red");
                setIsRunning(true);
              }}
              className="btn btn-success"
            >
              Start the lights
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TrafficLight;