import React, {Component} from 'react';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer'

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>Pick Me Pick Me!</h1>
      <RestaurantContainer />
    </div>
    );
  }
}

export default App;
