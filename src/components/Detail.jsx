import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Detail = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="d-flex align-items-center">CTTAà</Card.Title>
              <Card.Text>CONDIZIONI METEO</Card.Text>
              <Card.Text>GRADI</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6}>
          <Card className="mb-4 ">
            <Card.Body>
              <Card.Title>PREVISIONI DEI 5 GIORNIO SUCCESSIVI</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item> GIORNI</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
