import { useLocation } from "react-router";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Detail = () => {
  const location = useLocation();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [openDetails, setOpenDetails] = useState(null);

  useEffect(() => {
    if (location.state && location.state.city && location.state.weather && location.state.forecast) {
      const { city, weather, forecast } = location.state;
      setCity(city);
      setWeather(weather);
      setForecast(forecast);
    }
  }, [location.state]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setCurrentDate(date.toLocaleDateString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const toggleDetails = (index) => {
    setOpenDetails(openDetails === index ? null : index);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="text-center bg-transparent border-0">
            <Card.Body>
              <Card.Text className="text-white fs-5">Today, {currentDate}</Card.Text>
              <Card.Title className="mb-0 text-white fs-3">
                <span className="fw-light">Now in</span> <span className="fw-bold">{city}</span>
              </Card.Title>

              <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <Card.Text className="text-white mb-0 me-3 fw-semibold" style={{ fontSize: "7rem" }}>
                    {Math.round(weather.main?.temp)}
                    <sup style={{ fontSize: "2rem", verticalAlign: "super" }}>°C</sup>
                  </Card.Text>
                </div>
                <img
                  src={getWeatherIcon(weather.weather?.[0]?.icon)}
                  alt={weather.weather?.[0]?.description}
                  width="180"
                  className="me-2"
                />
              </div>

              <Card.Text
                className="text-white p-2 mb-5 fs-5 cardhover"
                style={{
                  backgroundColor: "rgba(0, 4, 255, 0.07)",
                }}
              >
                The weather now is
                <span>
                  <strong> {weather.weather?.[0]?.description}</strong>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr className="text-white" />
          <h5 className="text-white fw-bold mb-5">More details, {currentDate}</h5>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <Card
              xs={12}
              sm={6}
              md={3}
              className="text-white border-0 mb-3 cardhover"
              style={{ backgroundColor: "rgba(0, 4, 255, 0.07)", width: "250px" }}
            >
              <Card.Body className="d-flex flex-column align-items-start">
                <i className="bi bi-thermometer-half mb-3 fs-4" style={{ fontSize: "1.6rem" }}></i>
                <Card.Text className="text-white mb-0 fs-6">Min Temperature</Card.Text>
                <Card.Text className="text-white mb-0 fw-bold fs-5">
                  {weather.main?.temp_min && Math.round(weather.main.temp_min)}°C
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              xs={12}
              sm={6}
              md={3}
              className="text-white border-0 mb-3 cardhover"
              style={{ backgroundColor: "rgba(0, 4, 255, 0.07)", width: "250px" }}
            >
              <Card.Body className="d-flex flex-column align-items-start">
                <i className="bi bi-thermometer-sun mb-3 fs-4" style={{ fontSize: "1.6rem" }}></i>
                <Card.Text className="text-white mb-0 fs-6">Max Temperature</Card.Text>
                <Card.Text className="text-white mb-0 fw-bold fs-5">
                  {weather.main?.temp_max && Math.round(weather.main.temp_max)}°C
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              xs={12}
              sm={6}
              md={3}
              className="text-white border-0 mb-3 cardhover"
              style={{ backgroundColor: "rgba(0, 4, 255, 0.07)", width: "250px" }}
            >
              <Card.Body className="d-flex flex-column align-items-start">
                <i className="bi bi-droplet mb-3 fs-4" style={{ fontSize: "1.6rem", color: "white" }}></i>
                <Card.Text className="text-white mb-0 fs-6">Humidity</Card.Text>
                <Card.Text className="text-white mb-0 fw-bold fs-5">{weather.main?.humidity ?? "N/A"}%</Card.Text>
              </Card.Body>
            </Card>

            <Card
              xs={12}
              sm={6}
              md={3}
              className="text-white border-0 mb-3 cardhover"
              style={{ backgroundColor: "rgba(0, 4, 255, 0.07)", width: "250px" }}
            >
              <Card.Body className="d-flex flex-column align-items-start">
                <i className="bi bi-wind mb-3 fs-4" style={{ fontSize: "1.6rem", color: "white" }}></i>
                <Card.Text className="text-white mb-0 fs-6">Wind Speed</Card.Text>
                <Card.Text className="text-white mb-0 fw-bold fs-5">{weather.wind?.speed ?? "N/A"} km/h</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <hr className="text-white mt-3" />
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} className="mb-5">
          <Card className="mb-4 rounded bg-transparent border-0 ">
            <Card.Body>
              <Card.Title className="text-white mb-4 fw-bold fs-5">Forecast for the Next 5 Days</Card.Title>
              <ListGroup variant="flush">
                {forecast.slice(0, 5).map((day, i) => (
                  <ListGroup.Item
                    key={i}
                    className="rounded mb-3 border-0 cardhover"
                    style={{ backgroundColor: "rgba(0, 4, 255, 0.07)" }}
                  >
                    <div className="d-flex align-items-center justify-content-between pt-3 ">
                      <img
                        src={getWeatherIcon(day.weather[0].icon)}
                        alt={day.weather[0].description}
                        width="50"
                        className="me-3"
                      />
                      <div className="flex-grow-1">
                        <h6 className="text-white mb-1 fs-6">{`Day ${i + 1}`}</h6>
                        <p className="text-white mb-0 fs-5">
                          {Math.round(day.main.temp)}°C - {day.weather[0].description}
                        </p>
                      </div>
                      <div className="text-white fw-bold">
                        <p className="mb-0">
                          <span
                            style={{ cursor: "pointer", textDecoration: "underline" }}
                            onClick={() => toggleDetails(i)}
                          >
                            More details
                          </span>
                        </p>
                      </div>
                    </div>

                    {openDetails === i && (
                      <div className="mt-2" style={{ textAlign: "right" }}>
                        <p className="text-white mb-0 fs-6">
                          <i className="bi bi-thermometer-half mb-1" style={{ fontSize: "1.2rem" }}></i>{" "}
                          <strong>Min:</strong> {Math.round(day.main.temp_min)}°C
                        </p>
                        <p className="text-white mb-0 fs-6">
                          <i className="bi bi-thermometer-sun mb-1" style={{ fontSize: "1.2rem" }}></i>{" "}
                          <strong>Max:</strong> {Math.round(day.main.temp_max)}°C
                        </p>
                        <p className="text-white mb-0 fs-6">
                          <i className="bi bi-droplet mb-1" style={{ fontSize: "1.2rem", color: "white" }}></i>{" "}
                          <strong>Humidity:</strong> {day.main.humidity}%
                        </p>
                        <p className="text-white mb-0 fs-6">
                          <i className="bi bi-wind mb-1" style={{ fontSize: "1.2rem", color: "white" }}></i>{" "}
                          <strong>Wind Speed:</strong> {day.wind.speed} km/h
                        </p>
                      </div>
                    )}
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
