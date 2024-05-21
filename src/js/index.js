import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';
import TrafficLight from './component/TrafficLight';
import TrafficLightWithPurple from './component/TrafficLightWithPurple';
import "./component/TrafficLight.css";


// Render the TrafficLight component into the DOM
ReactDOM.render(<Home />, document.querySelector('#app'));