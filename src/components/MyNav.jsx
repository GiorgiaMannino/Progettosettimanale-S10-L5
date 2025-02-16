import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNav = () => {
  return (
    <div style={{ backgroundColor: "rgba(3, 6, 20, 0.81)" }}>
      <Container>
        <Navbar
          expand="lg"
          className="navbar d-none d-lg-block w-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.815)" }}
        >
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto ">
              <Nav.Item>
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
              </Nav.Item>
            </Nav>

            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#" className="me-3 text-dark">
                <i className="bi bi-bell me-1 fs-5 "></i>
              </Nav.Link>
              <Nav.Link href="#" className="me-3 text-dark">
                <i className="bi bi-gear fs-5"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      {/* Navbar visibile solo sul formato mobile */}
      <div
        className="d-block d-lg-none position-fixed bottom-0 w-100"
        style={{
          zIndex: 9999,
          backgroundColor: "rgba(3, 6, 20, 0.81)",
          boxShadow: "0 4px 6px rgb(0, 0, 0)",
        }}
      >
        <Nav className="justify-content-around">
          <Nav.Item className="text-center">
            <Link to="#" className="nav-link text-white d-flex flex-column align-items-center">
              <i className="bi bi-bell me-2 fs-3 "></i>
            </Link>
          </Nav.Item>
          <Nav.Item className="text-center">
            <Link to="/" className="nav-link text-white d-flex flex-column align-items-center">
              <i className="bi bi-house  me-2 fs-3 "></i>
            </Link>
          </Nav.Item>
          <Nav.Item className="text-center">
            <Link to="#" className="nav-link text-white d-flex flex-column align-items-center">
              <i className="bi bi-gear me-2 fs-3"></i>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default MyNav;
