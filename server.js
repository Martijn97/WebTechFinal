const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./client/src/routes');
const match = require('react-router').match;
const RoutingContext = require('react-router').RouterContext;
const ReactDOM = require('react-dom/server');
const request = require('request');
const instagram = require('instagram-node').instagram();
// const Post = require('./db/models/posts');

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/client/build'));
}

instagram.use({
	client_id: "1159204fb5b94378904fa06932f07da6",
	client_secret: "07dbbb23552d4c77929cd70986bbe8a3"
});

let redirect_uri = "http://webtechnologytue.herokuapp.com/insta_auth";

exports.authorize_user = (req, res) => {
	res.redirect(instagram.get_authorization_url(redirect_uri, {scope: ['public_content']}));
};

exports.insta_auth = (req, res) => {
	instagram.authorize_user(req.query.code, redirect_uri, (err, result) => {
		if (err) {
			console.log(err.body);
			res.send("Didn't work");
		} else {
			let homeRedirectUrl = '/home/' + result.access_token;
			res.redirect(homeRedirectUrl);
		}
	});
};

app.get('/home/:access_token', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.get('/auth', exports.authorize_user);
app.get('/insta_auth', exports.insta_auth);

app.get('/*', (req, res) => {
	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message);
		} else if(redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			res.status(200).send(ReactDOM.renderToString(React.createElement(RouterContext, renderProps)));
		} else {
			res.status(404).send('Not found!');
		}
	});
});

// app.get('/searchbytag/:tag', (req, res) => {
// 	let tagName = req.params.tag;

// 	if (!tagName) {
// 		res.json({
// 			error: 'Missing required parameter "tag"'
// 		});

// 		return;
// 	} else {

// 		let apiRequest = request('https://api.instagram.com/v1/tags/' + tagName + '/media/recent?access_token=' + this.access_token + '&callback=?', 
// 			(err, response, body) => {
// 				if (!err && response.statusCode == 200) {
// 					console.log(body.json());
// 				} 
// 			})
// 	}


// })

// const database = 'mongodb://username:password@databaseurl';
// const db = mongoose.createConnection(database);
// const PostModel = db.model('Post', Post);

app.get('/api', (req, res) => {
    res.send('This is the api for instagram world.');
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
