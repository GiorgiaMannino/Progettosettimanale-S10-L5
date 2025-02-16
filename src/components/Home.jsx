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
      <h1 className="mt-5 mb-5 text-white fs-1">SkyWeather</h1>
      <SearchBar changeCity={searchCity} />

      <Row className="mt-5 mb-5">
        <hr className="text-white mt-4 " />
        <h4 className="text-white mb-4">Latest news</h4>

        <Col sm={12} md={4} className="mb-4">
          <Card
            className="rounded cardhover d-flex"
            style={{
              height: "100%",
              backgroundColor: "rgba(0, 4, 255, 0.07)",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src="https://www.meteo.expert/wp-content/uploads/2018/11/iStock_000028466382_Medium.jpg"
              alt="News 1"
              className="rounded img-fluid "
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="news-card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
              <Card.Title className="text-white fs-4 ">News 1</Card.Title>
              <Card.Text className="text-white fs-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis vitae nostrum? Numquam aut ab
                ipsa!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4} className="mb-4">
          <Card
            className="rounded cardhover d-flex"
            style={{
              height: "100%",
              backgroundColor: "rgba(0, 4, 255, 0.07)",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src="https://primatreviglio.it/media/2017/09/nuvole-sole-meteo-roma-previsioni-del-tempo-giovedi-18-dicembre-2014.jpg"
              alt="News 2"
              className="rounded img-fluid"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="news-card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
              <Card.Title className="text-white fs-4">News 2</Card.Title>
              <Card.Text className="text-white fs-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis vitae nostrum? Numquam aut ab
                ipsa!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4} className="mb-4">
          <Card
            className="rounded cardhover d-flex"
            style={{
              height: "100%",
              backgroundColor: "rgba(0, 4, 255, 0.07)",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src="https://www.lanazione.it/image-service/view/acePublic/alias/contentid/NzYyNjZmMTEtMmQyZS00/0/la-neve-al-pratomagno.webp?f=16%3A9&q=1&w=1280"
              alt="News 3"
              className="rounded img-fluid"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="news-card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
              <Card.Title className="text-white fs-4">News 3</Card.Title>
              <Card.Text className="text-white fs-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis vitae nostrum? Numquam aut ab
                ipsa!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
