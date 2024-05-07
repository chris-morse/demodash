import React, { useState } from 'react';
import {Link } from "react-router-dom";
import '../styles/AddressPage.css'; // Import CSS for styling

function AddressPage() {
  
	const [text, setText] = useState(''); // State to store the text input value

	const [scorep, setScorep] = useState(''); 

	const handleChange = (e) => {
		setText(e.target.value); // Update the text state when input changes
	};

	const getScore = () => {
		setScorep(`Life Score: ${text}`);
	};

	return (
		<div className="addresspage-container">
			<h1 className="addresspage-title">Input Address</h1>
			<div>
				<label htmlFor='textInput'>Enter Address:</label>
				<input
				type='text'
				id='textInput'
				value={text}
				onChange={handleChange}
				placeholder='Enter address...'
				/>
			</div>		
			<Link to="/results"><button className="calc-button">Submit</button></Link>
			<p clasName="score-text">{scorep}</p>
		</div>

	);
}

export default AddressPage;
