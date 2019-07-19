import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RestaurantInput from './components/restaurants/RestaurantInput'
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link,  } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<React.Fragment>
				<Route path='/' component={App} />
				<Route exact path='/new' component={RestaurantInput} />
			</React.Fragment>
		</Router>
	</Provider>,
	document.getElementById('root')
	);
