import React from 'react'
import Container from 'react-bootstrap/Container';
import { AiFillBank } from 'react-icons/ai';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {

  const navbarStyle = {
    backgroundColor: 'primary',
    dataBsTheme: 'dark',
    padding: '10px'
  };

  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark" style={navbarStyle}>
        <AiFillBank/>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/registrarse">Registrarse</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/pruebas">Pruebas Page</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default NavBarComponent