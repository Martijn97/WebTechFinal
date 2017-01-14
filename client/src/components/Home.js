import React from 'react';
import {Row, Input, Icon, Col, Card} from 'react-materialize';

export default class Home extends React.Component {

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
				  <Input s={6} label="Search" validate><Icon>search</Icon></Input>
				  <Input s={6} label="Location" validate type='tel'><Icon>location_on</Icon></Input>
				</Row>
				<Row>
					<Col s={3}>
					    <Card className='blue-grey darken-0 materialboxed' textClassName='white-text' title='Title Example 1' actions={[<a href='#'>Link to Post</a>]}>
					    I am a very simple card.
					    </Card>
					</Col>
					<Col s={3}>
					    <Card className='blue-grey darken-0 materialboxed' textClassName='white-text' title='Title Example 2' actions={[<a href='#'>Link to Post</a>]}>
					    I am a very simple card.
					    </Card>
					</Col>
					<Col s={3}>
					    <Card className='blue-grey darken-0 materialboxed' textClassName='white-text' title='Title Example 2' actions={[<a href='#'>Link to Post</a>]}>
					    I am a very simple card.
					    </Card>
					</Col>
					<Col s={3}>
					    <Card className='blue-grey darken-0 materialboxed' textClassName='white-text' title='Title Example 2' actions={[<a href='#'>Link to Post</a>]}>
					    I am a very simple card.
					    </Card>
					</Col>
				</Row>
			</div>
		);
	}
};
