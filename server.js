const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reactRouter = require('react-router');
const ReactDOM = require('react-dom');
const RouterContext = require('react-router/RouterContext');
const routes = require('client/src/routes');
const app = express();
// const Post = require('./db/models/posts');

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  	reactRouter.match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
  		if (err) {
  			return res.status(500).send(err.message);
  		}

  		if (redirectLocation) {
  			return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  		}

  		var markup;

  		if (renderProps) {
  			markup = ReactDOM.renderToString(<RouterContext {...renderProps}/>);
  		} else {
  			res.status(404);
  		}

  		return res.render('index' {markup});
  	});
  	// res.sendFile('client/build/index.html');
  });
}

// const database = 'mongodb://username:password@databaseurl';
// const db = mongoose.createConnection(database);
// const PostModel = db.model('Post', Post);

app.get('/api', (req, res) => {
    res.send('This is the api for instagram world.');
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
