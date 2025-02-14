import { useLocation } from "react-router";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

const Detail = () => {
  const location = useLocation();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (location.state) {
      const { city, weather, forecast } = location.state;
      setCity(city);
      setWeather(weather);
      setForecast(forecast);
    }
  }, [location.state]);

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={6}>
          <Card className="rounded">
            <Card.Body>
              <Card.Title>{city}</Card.Title>
              <Card.Text>Temperature: {Math.round(weather.main?.temp)}°C</Card.Text>
              <Card.Text>Climate: {weather.weather?.[0]?.description}</Card.Text>
              <Card.Text>Humidity: {weather.main?.humidity}%</Card.Text>
              <Card.Text>Wind: {weather.wind?.speed} km/h</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="mb-4 rounded">
            <Card.Body>
              <Card.Title>Forecast for the next 5 days</Card.Title>
              <ListGroup variant="flush">
                {forecast.slice(0, 5).map((day, i) => (
                  <ListGroup.Item key={i} className="rounded">
                    Day {i + 1}: {Math.round(day.main.temp)}°C, Climate: {day.weather[0].description}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
