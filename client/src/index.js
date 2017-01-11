import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import App from './components/App';
import Home from './components/Home';

let store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
			</Route>
		</Router>
  	</Provider>,
  	document.getElementById('root')
);
