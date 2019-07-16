import React from 'react';

class RandomRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: this.props.num,
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
      
    );
  }
}

export default RandomRestaurant

