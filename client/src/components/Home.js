import React from 'react';
import {Row, Input, Icon, Col, Card, CardTitle, Pagination} from 'react-materialize';

export default class Home extends React.Component {

	componentWillMount() {
		this.getToken();
	}

	getToken() {
		// let queryParams = this.props.params.access_token;
		// let accessToken = queryParams.access_token;
		// console.log(queryParams);
		// console.log(accessToken);
		console.log(this.props.location.hash.match(/^#?(.*)$/)[1]);
	}

	render() {

		let cardItems = [];

		for (let i = 0; i < 15; i++) {
			cardItems.push(
				<Col s={12} m={6} l={4} key={i}>
				    <Card className='blue-grey darken-0 materialboxed white-text' header={<CardTitle image='cat_1.jpg'>Funny cat</CardTitle>} style={{minHeight: "350px"}} actions={[<a href='https:/www.instagram.com'>Link to Post</a>]}>
				    	User: username<br></br>
				    	Likes: number
				    </Card>
				</Col>
			);
		}

		return (
			<div>
				<Row>
				  <Input s={6} label="Search" validate><Icon>search</Icon></Input>
				  <Input s={6} label="Location" validate type='tel'><Icon>location_on</Icon></Input>
				</Row>
				<Row>
					{cardItems}
				</Row>
			</div>
		);
	}
};
