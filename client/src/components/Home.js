import React from 'react';
import {Row, Input, Icon, Col, Footer, Navbar, NavItem, Card} from 'react-materialize';

// martijn was here
const Home = () => (
	<div>
		<Navbar className="teal lighten-2" brand='Instagram World!' right>
		  <NavItem href='About.html'>About</NavItem>
		  <NavItem href='Help.html'>Help</NavItem>
		</Navbar>
		<Row>
		  <Input s={6} label="Search" validate><Icon>search</Icon></Input>
		  <Input s={6} label="Location" validate type='tel'><Icon>location_on</Icon></Input>
		</Row>
		<Col m={3} s={3}>
		    <Card className='blue-grey darken-0 materialboxed' textClassName='white-text' title='Title Example 1' actions={[<a href='#'>Link to Post</a>]}>
		    I am a very simple card.
		    </Card>
		</Col>
		<Col m={6} s={3}>
		    <Card className='blue-grey darken-0 materialboxed' textClassName='white-text' title='Title Example 2' actions={[<a href='#'>Link to Post</a>]}>
		    I am a very simple card.
		    </Card>
		</Col>
		<Col s={12}>
			<Footer className="teal lighten-2" copyrights="&copy; 2017 Copyright Text">
			    <h5 className="white-text">InstaWorld</h5>
			    <p className="grey-text text-lighten-4">Final project of the course Web technology. Made by Surja, Julia and Martijn.</p>
			</Footer>
		</Col>
	</div>
);

export default Home;
