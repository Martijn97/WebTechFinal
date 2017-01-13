import React from 'react';
import {Row, Col, Button, Icon} from 'react-materialize';
import {Link} from 'react-router';

export default class Index extends React.Component {

	render() {

		return (
			<div>
				<Row>
					<Col s={12} style={{"textAlign": "center"}}><h1 className="teal-text">Welcome to Instagram-world!</h1></Col>
				</Row>
				<Row>
					<Col s={12} style={{"textAlign": "center"}}>
						<Link to={"https://api.instagram.com/oauth/authorize/?client_id=1159204fb5b94378904fa06932f07da6&redirect_uri=http://webtechnologytue.herokuapp.com/home&response_type=token"}>
							<Button style={{"textAlign": "center"}} className="teal">Authenticate<Icon>person</Icon></Button>
						</Link>
					</Col>
				</Row>
			</div>
		);
	}
};