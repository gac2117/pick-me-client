import React, {Component} from 'react';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer'
import RandomRestaurant from './components/RandomRestaurant'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Navbar';
import { connect } from 'react-redux';
import { fetchRestaurants } from './actions/restaurantActions'

const Home = () => {
  return (
    <div>
      <h1>Will put something here later</h1>
    </div>
  );
};


class App extends Component {
	componentDidMount() {
		this.props.fetchRestaurants();
	}



  render() {
    return (
    	<BrowserRouter>
		    <div className="App">
			  	<React.Fragment>
				  	<NavBar />
					    <h1>Pick Me Pick Me!</h1>
						<Route exact path="/" component={Home} />
					 	<Route exact path="/new" component={RestaurantContainer} />
			        	<Route exact path="/random" component={RandomRestaurant} />
	        	</React.Fragment>
			</div>
		</BrowserRouter>
    );
  }
}

export default connect(null, {fetchRestaurants})(App);
