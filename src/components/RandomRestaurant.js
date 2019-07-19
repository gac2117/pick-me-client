import React from 'react';
import { connect } from 'react-redux';

class RandomRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: this.props.restaurants.length,
      number: 1
    }
  }

  componentDidMount() {
   this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
  }
  
  generateNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }
  
  render() {
    
    return (
      this.state.number
    )
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.items
})

export default connect(mapStateToProps)(RandomRestaurant);

