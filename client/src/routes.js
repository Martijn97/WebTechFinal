import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Index from './components/Index';
import About from './components/About';
import Help from './components/Help';

const routes = (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Index}/>
			<Route path="home" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/help" component={Help}/>
		</Route>
	</Router>
);

export default routes;