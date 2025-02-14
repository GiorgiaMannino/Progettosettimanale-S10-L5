import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNav = () => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-light text-dark">
        <Navbar.Brand href="#">
          <img height="40" src="./src/assets/weather_logo.png" alt="Weather Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="/weather" className="text-dark">
              Forecast
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#" className="me-3 text-dark">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#" className="me-3 text-dark">
              <i className="bi bi-gear"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MyNav;
