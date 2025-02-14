import { Container, Row, Col, Card } from "react-bootstrap";
import Welcome from "./Welcome";
import SearchBar from "./SearchBar";

const Home = () => {
  const searchCity = (city) => {
    console.log("città cercata", city);
  };

  return (
    <Container>
      <Welcome />
      <h1 className="mt-5 mb-5">SkyWeather </h1>
      <SearchBar changeCity={searchCity} />

      <Row className="mt-5 mb-5">
        <Col className="second-col mt-5 mb-5 p-4">
          <Card className="mb-4 rounded bg-transparent border-0">
            <Card.Body>
              <Card.Title className="mb-4">Latest Weather News!</Card.Title>
              <p>Lorem ipsum </p>
              <p>find out the details</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
