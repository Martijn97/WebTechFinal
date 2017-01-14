import React, {PropTypes} from 'react';
import {Footer, Navbar, NavItem} from 'react-materialize';

const App = ({children}) => (
	<div>
		<Navbar className="teal lighten-2" brand='Instagram World!' style={{paddingLeft: "1em", paddingRight: "1em"}}right>
		  <NavItem href='#'>About</NavItem>
		  <NavItem href='#'>Help</NavItem>
		</Navbar>
		<div className="container">
			{children}
		</div>
		<Footer className="teal lighten-2" copyrights="&copy; 2017 Copyright Text" style={{bottom: 0, position: "absolute", width: "100vw"}}>
		    <h5 className="white-text">InstaWorld</h5>
		    <p className="grey-text text-lighten-4">Final project of the course Web technology. Made by Surja, Julia and Martijn.</p>
		</Footer>
	</div>
);

App.propTypes = {
	children: PropTypes.object
};

export default App;