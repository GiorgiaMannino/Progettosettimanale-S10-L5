import { useLocation } from "react-router";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

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

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={6}>
          <Card className="text-center bg-transparent border-0">
            <Card.Body>
              <Card.Title className="mt-4 mb-0 text-white" style={{ fontSize: "3rem" }}>
                {city}
              </Card.Title>

              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={getWeatherIcon(weather.weather?.[0]?.icon)}
                  alt={weather.weather?.[0]?.description}
                  width="160"
                  className="me-2"
                />
                <div className="text-center">
                  <Card.Text className="text-white mb-0" style={{ fontSize: "2rem" }}>
                    {Math.round(weather.main?.temp)} °C
                  </Card.Text>
                  <Card.Text className="text-white">{weather.weather?.[0]?.description}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} className="second-col mt-5 mb-5 p-4">
          <Card className="mb-4 rounded bg-transparent border-0">
            <Card.Body>
              <Card.Title className="text-center text-white mb-4 fw-bold">Forecast for the Next 5 Days</Card.Title>
              <ListGroup variant="flush">
                {forecast.slice(0, 5).map((day, i) => (
                  <ListGroup.Item key={i} className="rounded bg-transparent border-0">
                    <div className="d-flex align-items-center">
                      <img
                        src={getWeatherIcon(day.weather[0].icon)}
                        alt={day.weather[0].description}
                        width="40"
                        className="me-3"
                      />
                      <div>
                        <h6 className="text-white mb-1">Day {i + 1}</h6>
                        <p className="text-white mb-0">
                          {Math.round(day.main.temp)}°C - {day.weather[0].description}
                        </p>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="second-col mt-5 mb-5 p-4">
          <h5 className="text-center text-white">More details:</h5>
          <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center me-3">
              <i className="bi bi-droplet me-2" style={{ fontSize: "1.5rem", color: "white" }}></i>
              <Card.Text className="text-white mb-0">{weather.main?.humidity}%</Card.Text>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-wind me-2" style={{ fontSize: "1.5rem", color: "white" }}></i>
              <Card.Text className="text-white mb-0">{weather.wind?.speed} km/h</Card.Text>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
