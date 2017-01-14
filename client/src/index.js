import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from  './routes';

let store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history} routes={routes}>
		</Router>
  	</Provider>,
  	document.getElementById('root')
);
