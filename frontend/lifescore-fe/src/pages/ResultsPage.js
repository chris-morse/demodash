import React, { useState } from 'react';
import {Link } from "react-router-dom";
import '../styles/ResultsPage.css'; // Import CSS for styling

function ResultsPage() {

	return (

		<div className="resultspage-container">
			<div className="button-container">
				<Link to="/address"><button className="address-button">Edit Address</button></Link>
				<Link to="/home"><button className="param-button">Edit Parameters</button></Link>
			</div>
			<div className="results-container">
				<h1 className="resultspage-title">Results</h1>
				<p clasName="score-text">Life Score: </p>
			</div>
		</div>

	);
}

export default ResultsPage;
