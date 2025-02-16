import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNav = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar expand="lg" className="navbar">
          <Navbar.Brand href="#">
            <img height="40" src="https://cdn-icons-png.freepik.com/512/234/234336.png" alt="SkyWeather Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
              </Nav.Item>
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

      {/* Navbar visibile solo sul formato mobile */}
      <div
        className="d-block d-md-none position-fixed bottom-0 w-100"
        style={{
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.815)",
          boxShadow: "0 4px 6px rgb(0, 0, 0)",
        }}
      >
        <Nav className="justify-content-around">
          <Nav.Item className="text-center">
            <Link to="/" className="nav-link text-white d-flex flex-column align-items-center">
              <i className="bi bi-house-door-fill me-2 fs-3"></i>
              <span>Home</span>
            </Link>
          </Nav.Item>
          <Nav.Item className="text-center">
            <Link to="/search" className="nav-link text-white d-flex flex-column align-items-center">
              <i className="bi bi-search me-2 fs-3"></i>
              <span>Cerca</span>
            </Link>
          </Nav.Item>
          <Nav.Item className="text-center">
            <Link to="#" className="nav-link text-white d-flex flex-column align-items-center">
              <i className="bi bi-collection-fill me-2 fs-3"></i>
              <span>La tua libreria</span>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default MyNav;
