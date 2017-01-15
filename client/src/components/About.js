import React from 'react';
import {} from 'react-materialize';

export default class About extends React.Component {
	render() {

		return (
			<div style={{"textAlign":"center"}}>
				<h1>About</h1>
				<p>
					Hey, Welcome at our webpage. This page is made as final project for the subject 2ID60, Web Technology. The subject has the goal to teach student how 
					to program for the world wide web. The first and second assignment were both individual. The first assignment was about making a static webpages with some interaction and the second assignment was about making you own webapplication. The last assignment was a group project. 
					The goal of the last assignment was to build our own webapplication, using a web framework as a backend and a well designed and interactive frontend. 
				</p>
				<p>
					We are group <h7>39</h7> and we decided to make a page to display instagram posts.
				</p>
				<p>
					With kind regards,<br></br>
					<b>Julia Hofs, Surja chaudhuri and Martijn Noordhof</b>
				</p>
			</div>
		);
	}
};