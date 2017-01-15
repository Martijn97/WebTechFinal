const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
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

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.get('/auth', (req, res) => {
	res.redirect('https://api.instagram.com/oauth/authorize/?client_id=1159204fb5b94378904fa06932f07da6&redirect_uri=http://webtechnologytue.herokuapp.com/home&response_type=code&scope=public_content');
});

app.get('/home', (req, res) => {
	let accessCode = req.query.code;

	request.post(
	{
		form: {
			client_id: '1159204fb5b94378904fa06932f07da6',
			client_secret: '07dbbb23552d4c77929cd70986bbe8a3',
			grant_type: 'authorization_code',
			redirect_uri: 'http://webtechnologytue.herokuapp.com/home',
			code: accessCode
		},
		url: 'https://api.instagram.com/oauth/access_token'
	}, (err, response, body) => {
		if (err) {
			console.log("Error in posting", err);
		} else {
			console.log(response);
			console.log(body.json());
		}
	})
})

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
