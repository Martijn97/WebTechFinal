import React from 'react';
import {Row, Col} from 'react-materialize';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.getToken();
	}

	getToken() {
		let queryParams = this.props.location.query;
		let accessToken = queryParams.access_token;
		console.log(queryParams);
		console.log(accessToken);
	}

	render() {

		return (
			<div>
				<Row>
					<Col s={12}><h1 style={{"textAlign": "center"}} className="teal-text">Authentication succeeded, yay!</h1></Col>
				</Row>
			</div>
		);
	}
};
