const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// const Post = require('./db/models/posts');

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
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
})


// const database = 'mongodb://username:password@databaseurl';
// const db = mongoose.createConnection(database);
// const PostModel = db.model('Post', Post);

app.get('/api', (req, res) => {
    res.send('This is the api for instagram world.');
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
