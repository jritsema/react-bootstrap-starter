import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

export default class Menu extends React.Component {

  render () {
    return (
      <Navbar brand="React Bootstrap App">
        <Nav>
          {this.props.navigation.map(function(item) {
            return (
              <NavItem 
                key={item.id} 
                eventKey={item.id} 
                href={'#' + item.path} 
                active={item.path === this.props.selected}>
                {item.display}
              </NavItem>
            );
          }, this)}
        </Nav>
      </Navbar>
    );
  }
}