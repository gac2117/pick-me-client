import React, {Component} from 'react';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer'
import RestaurantList from './components/restaurants/RestaurantList'
import RandomRestaurant from './components/RandomRestaurant'
import Restaurant from './components/restaurants/Restaurant'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Navbar';
import { connect } from 'react-redux';
import { fetchRestaurants } from './actions/restaurantActions'
import { fetchTags } from './actions/tagActions'


class App extends Component {
	componentWillMount() {
		this.props.fetchRestaurants();
		this.props.fetchTags();
	}

  render() {
    return (
    	<BrowserRouter>
		    <div className="App">
			  	<React.Fragment>
				  	<NavBar />
						<Route exact path="/" component={RandomRestaurant} />
					 	<Route exact path="/new" component={RestaurantContainer} />
			        	<Route exact path="/restaurants" component={RestaurantList} />
			        	<Route exact path="/restaurant" component={Restaurant} />
	        	</React.Fragment>
			</div>
		</BrowserRouter>
    );
  }
}

export default connect(null, {fetchRestaurants, fetchTags})(App);
