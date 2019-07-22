import React from 'react';
import { connect } from 'react-redux';
import ChosenRestaurant from './restaurants/ChosenRestaurant';
import { Button } from 'reactstrap';

class RandomRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 10,
      number: 1,
      restaurant: {attributes: {name: '', location: '', tags: []}}
    }
  }

  componentDidMount() {
   this.setState({ number: this.generateNumber(this.state.min, this.state.max)})
  }

  onClick(e) {
    this.setState({
      max: this.props.restaurants.length-1,
      number: this.generateNumber(this.state.min, this.state.max),
      restaurant: this.props.restaurants[this.state.number]
    })
  } 
  
  generateNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }
  
  render() {
    return (
      <div className="Container">
      <Button color="danger" onClick={(e) => this.onClick(e)}>Choose a restaurant</Button>
      <ChosenRestaurant restaurant={this.state.restaurant} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.items
})

export default connect(mapStateToProps)(RandomRestaurant);

