import React from 'react';
import {Row, Input, Icon, Col, Card, CardTitle} from 'react-materialize';
import axios from 'axios';


export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tagSearchValue: '',
			locationSearchValue: '',
			data: {}
		};
		this.access_token = '';
		this.handleTagSearch = this.handleTagSearch.bind(this);

	}

	componentWillMount() {
		this.getToken();
	}

	getToken() {
		let hash = this.props.location.hash.match(/^#?(.*)$/)[1];
		this.access_token = hash.substring(hash.indexOf("=")+1, hash.length);
	}

	handleTagSearch(e) {
		const value = e.target.value;
		console.log(value);
		console.log(this.state.tagSearchValue);

		this.setState({
			tagSearchValue: value,
		});

		if (value === '') {
			this.setState({
				tagSearchValue: ''
			});

		} else {
			let _this = this;
			this.apiRequest = 
				axios
					.get('https://api.instagram.com/v1/tags/' + value + '/media/recent?access_token=' + this.access_token)
					.then(result => {
						_this.setState({
							data: result.data
						});
					})
			console.log(this.state.data)
		}
	}

	componentWillUnmount() {
		this.serverRequest.abort();
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
					<Input s={6} value={this.state.tagSearchValue} onChange={this.handleTagSearch} label="Search" validate><Icon>search</Icon></Input>
					<Input s={6} value={this.state.locationSearchValue} label="Location" validate type='tel'><Icon>location_on</Icon></Input>
				</Row>
				<Row>
					{cardItems}
				</Row>
			</div>
		);
	}
};
