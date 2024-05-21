import React, { useState, useEffect } from "react";
import TrafficLight from "./TrafficLight";
import TrafficLightWithPurple from "./TrafficLightWithPurple";

const Home = () => {
  const [purpleAdded, setPurpleAdded] = useState(false);

  useEffect(() => {}, [purpleAdded]);

  return (
    <div>
      {purpleAdded ? <TrafficLightWithPurple /> : <TrafficLight />}
      <div className="row d-flex justify-content-center my-3">
        <div className="col-4 d-flex justify-content-center">
          <button
            onClick={() => setPurpleAdded(!purpleAdded)}
            type="button"
            className="btn text-white w-45"
            style={{ backgroundColor: "#952a95" }}
          >
            {purpleAdded ? "Remove Purple" : "Add Purple"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;