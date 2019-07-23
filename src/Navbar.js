import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';


class NavBar extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#4F6367', border: '2px solid #4F6367',
  borderRadius: '3px'}} dark expand="lg">
          <NavbarBrand tag={Link} exact to="/">Pick Me!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} exact to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/new">Add a Restaurant</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/restaurants">List of Restaurants</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };
};

export default NavBar;