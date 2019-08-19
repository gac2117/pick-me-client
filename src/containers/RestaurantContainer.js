import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';

class RestaurantContainer extends Component {
  handleClick() {
    this.props.clearRestaurant();
  }

  render() {
    return (
      <>
        <RestaurantInput />
        <br />
        <Card>
          <CardBody>
            <CardTitle tag='h3'>
              <Link
                to={{
                  pathname: '/restaurant',
                  state: { restaurant: this.props.restaurant }
                }}
                onClick={() => this.handleClick()}
              >
                {this.props.restaurant.attributes.name}
              </Link>
            </CardTitle>
          </CardBody>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurants.item
});

const mapDispatchToProps = dispatch => ({
  clearRestaurant: () => dispatch({ type: 'CLEAR_RESTAURANT' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
