import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import AddCard from '../../modules/Modals/AddCard';

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link>
            <AddCard />
          </Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </>
    );
  }
}
