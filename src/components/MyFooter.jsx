import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: "#FFFFFF" }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <div className="iconsSocial text-secondary fs-4 mb-3">
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-youtube me-3"></i>
            </div>
            <p className="text-secondary">© 2025 SkyWeather, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
