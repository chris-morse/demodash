import React, { useState } from 'react';
import {Link } from "react-router-dom";
import '../styles/Home.css'; // Import CSS for styling

function ScaleSlider({ prompt }) {
	const [value, setValue] = useState(1); // Initial value is 3
  
	const handleChange = (e) => {
	  setValue(parseInt(e.target.value)); // Update the value when slider changes
	};

	const getTextForValue = (val) => {
		switch (val) {
		  case 5:
			return 'Short walk/very important';
		  case 4:
			return 'Medium walk/important';
		  case 3:
			return 'Medium commute/less important';
		  case 2:
			return 'Long commute/unimportant';
		  case 1:
			return 'Do not include/never';
		  default:
			return '';
		}
	};
  
	return (
	  <div className="scale-slider">
		<p>{prompt}</p>
		<input
		  type="range"
		  min={1}
		  max={5}
		  value={value}
		  onChange={handleChange}
		/>
		<span>{getTextForValue(value)}</span> {/* Display the current value */}
	  </div>
	);
}

function Home() {

	return (

	<div className="home-container">
      <h1 className="home-title">Input Parameters</h1>
	  <div className="scrollable-content">
		<ScaleSlider prompt="Grocery Store" />
		<ScaleSlider prompt="Restaurants" />
		<ScaleSlider prompt="Coffee Shop" />
		<ScaleSlider prompt="Subway Station" />
		<ScaleSlider prompt="Library" />
		<ScaleSlider prompt="Bars/Nightclubs" />
		<ScaleSlider prompt="Gym" />
		<ScaleSlider prompt="Park" />
	  </div>
	  <Link to="/address"><button className="proceed-button">Proceed</button></Link>
	</div>

  );
}

export default Home;
