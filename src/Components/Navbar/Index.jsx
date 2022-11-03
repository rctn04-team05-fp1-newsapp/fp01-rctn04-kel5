import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Index() {
  return (
    <div>
      <Navbar
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="indonesia">NEWS APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my- my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="indonesia">Indonesia</Nav.Link>
              <Nav.Link href="programming">Programming</Nav.Link>
              <Nav.Link href="covid19">COVID19</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Index;
