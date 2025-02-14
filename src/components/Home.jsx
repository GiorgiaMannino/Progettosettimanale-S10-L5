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
      <h1 className="mt-5 mb-5 text-white">SkyWeather </h1>
      <SearchBar changeCity={searchCity} />

      <Row className="mt-5 mb-5">
        <h3 className="mt-5 mb-1 text-white">News</h3>
        <hr className="mt-2 text-white" />
        <Col sm={12} md={4} className="second-col mt-3 mb-5 p-4">
          <Card className="rounded bg-transparent border-0">
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/photorealistic-style-clouds_23-2151058969.jpg?t=st=1739550260~exp=1739553860~hmac=7b0acce7398742de8c2f0e30018f754304a3d1476848d691dc0530646e267122&w=1380"
              alt="News 1"
              className="rounded"
            />
            <Card.Body>
              <Card.Title className="text-white">News 1</Card.Title>
              <Card.Text className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis vitae nostrum? Numquam aut ab
                ipsa! Aspernatur doloribus deleniti ipsum quo illo, nihil molestias non dolore ad nobis reprehenderit
                consectetur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="second-col mt-3 mb-5 p-4">
          <Card className="rounded bg-transparent border-0">
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/photorealistic-style-clouds_23-2151058969.jpg?t=st=1739550260~exp=1739553860~hmac=7b0acce7398742de8c2f0e30018f754304a3d1476848d691dc0530646e267122&w=1380"
              alt="News 1"
              className="rounded"
            />
            <Card.Body>
              <Card.Title className="text-white">News 1</Card.Title>
              <Card.Text className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis vitae nostrum? Numquam aut ab
                ipsa! Aspernatur doloribus deleniti ipsum quo illo, nihil molestias non dolore ad nobis reprehenderit
                consectetur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="second-col mt-3 mb-5 p-4">
          <Card className="rounded bg-transparent border-0">
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/photorealistic-style-clouds_23-2151058969.jpg?t=st=1739550260~exp=1739553860~hmac=7b0acce7398742de8c2f0e30018f754304a3d1476848d691dc0530646e267122&w=1380"
              alt="News 1"
              className="rounded"
            />
            <Card.Body>
              <Card.Title className="text-white">News 1</Card.Title>
              <Card.Text className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis vitae nostrum? Numquam aut ab
                ipsa! Aspernatur doloribus deleniti ipsum quo illo, nihil molestias non dolore ad nobis reprehenderit
                consectetur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
