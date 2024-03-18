import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>Student Details</Navbar.Brand>
          <Nav className='ms-auto'>
            <LinkContainer to={"/"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/create"}>
              <Nav.Link>Create</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
