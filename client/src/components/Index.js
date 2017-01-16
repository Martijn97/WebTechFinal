import React from 'react';
import {Row, Col, Button, Icon} from 'react-materialize';
import jsonp from 'jsonp';

export default class Index extends React.Component {

	constructor(props) {
		super(props);
		this.getAuthLink = this.getAuthLink.bind(this);
	}

	getAuthLink() {
		jsonp('https://api.instagram.com/oauth/authorize/?client_id=1159204fb5b94378904fa06932f07da6&redirect_uri=http://webtechnologytue.herokuapp.com/insta_auth&response_type=code&scope=public_content', 
			null, (err, data) => {
				if (err) {
					console.error(err.message);
				} else {
					console.log(data);
			}
		});
	}

	render() {

		return (
			<div>
				<Row>
					<Col s={12} style={{"textAlign": "center"}}><h1 className="teal-text">Welcome to Instagram world!</h1></Col>
				</Row>
				<Row>
					<Col s={12} style={{"textAlign": "center"}}>
						<Button onClick={this.getAuthLink} style={{"textAlign": "center"}} className="teal">
							Authenticate<Icon>person</Icon>
						</Button>
					</Col>
				</Row>
			</div>
		);
	}
};