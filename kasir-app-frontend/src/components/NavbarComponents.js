import react from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const NavbarComponents = () => {

  return (
    <div>
      <Navbar variant="dark" expand="lg" className="height">
        <Container>
          <Navbar.Brand href="#home"><strong>Kasir</strong>{" "} Kedai XXX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;