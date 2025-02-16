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

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={6}>
          <Card className="text-center bg-transparent border-0">
            <Card.Body>
              <Card.Text className="text-white ">Today, {currentDate}</Card.Text>
              <Card.Title className=" mb-0 text-white" style={{ fontSize: "3rem" }}>
                <span className="fw-light">Now in</span> <span className="fw-bold">{city}</span>
              </Card.Title>

              <Card.Text className="text-white">{weather.weather?.[0]?.description || "No data available"}</Card.Text>

              <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <Card.Text className="text-white mb-0 me-3 fw-semibold" style={{ fontSize: "7rem" }}>
                    {Math.round(weather.main?.temp || 0)}
                    <sup style={{ fontSize: "2rem", verticalAlign: "super" }}>°C</sup>
                  </Card.Text>
                </div>
                <img
                  src={getWeatherIcon(weather.weather?.[0]?.icon || "01d")}
                  alt={weather.weather?.[0]?.description || "No data"}
                  width="180"
                  className="me-2"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Row>
          <Col className="mt-5 mb-5">
            <hr className="text-white" />
            <h5 className="text-white fw-bold mb-4">More details:</h5>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <Card
                xs={12}
                sm={6}
                md={3}
                className="text-white border-0 mb-3"
                style={{ backgroundColor: "rgba(0, 4, 255, 0.07)", width: "250px" }}
              >
                <Card.Body className="d-flex flex-column align-items-start">
                  <i className="bi bi-droplet mb-3" style={{ fontSize: "1.6rem", color: "white" }}></i>
                  <Card.Text className="text-white mb-0">Humidity</Card.Text>
                  <Card.Text className="text-white mb-0 fw-bold">{weather.main?.humidity || "N/A"}%</Card.Text>
                </Card.Body>
              </Card>
              <Card
                xs={12}
                sm={6}
                md={3}
                className="text-white border-0 mb-3"
                style={{ backgroundColor: "rgba(0, 4, 255, 0.07)", width: "250px" }}
              >
                <Card.Body className="d-flex flex-column align-items-start">
                  <i className="bi bi-wind mb-3" style={{ fontSize: "1.6rem", color: "white" }}></i>
                  <Card.Text className="text-white mb-0">Wind Speed</Card.Text>
                  <Card.Text className="text-white mb-0 fw-bold">{weather.wind?.speed || "N/A"} km/h</Card.Text>
                </Card.Body>
              </Card>
              <Card
                xs={12}
                sm={6}
                md={3}
                className="text-white border-0 mb-3"
                style={{ backgroundColor: "rgba(0, 4, 255, 0.07)", width: "250px" }}
              >
                <Card.Body className="d-flex flex-column align-items-start">
                  <i className="bi bi-thermometer-half mb-3" style={{ fontSize: "1.6rem" }}></i>{" "}
                  <Card.Text className="text-white mb-0">Min Temperature</Card.Text>
                  <Card.Text className="text-white mb-0 fw-bold">{Math.round(weather.main?.temp_min || 0)}°C</Card.Text>
                </Card.Body>
              </Card>
              <Card
                xs={12}
                sm={6}
                md={3}
                className="text-white border-0 mb-3"
                style={{ backgroundColor: "rgba(0, 4, 255, 0.07)", width: "250px" }}
              >
                <Card.Body className="d-flex flex-column align-items-start">
                  <i className="bi bi-thermometer-sun mb-3" style={{ fontSize: "1.6rem" }}></i>{" "}
                  <Card.Text className="text-white mb-0">Max Temperature</Card.Text>
                  <Card.Text className="text-white mb-0 fw-bold">{Math.round(weather.main?.temp_max || 0)}°C</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Col sm={12} md={6} className="second-col mt-5 mb-5 p-4">
          <Card className="mb-4 rounded shadow bg-transparent border-0">
            <Card.Body>
              <Card.Title className="text-center text-white mb-4 fw-bold fs-4">Forecast for the Next 5 Days</Card.Title>
              <ListGroup variant="flush">
                {forecast.slice(0, 5).map((day, i) => (
                  <ListGroup.Item key={i} className="rounded bg-dark bg-opacity-50 mb-3 border-0">
                    <div className="d-flex align-items-center justify-content-between pt-3">
                      <img
                        src={getWeatherIcon(day.weather[0].icon)}
                        alt={day.weather[0].description}
                        width="50"
                        className="me-3"
                      />
                      <div className="flex-grow-1">
                        <h6 className="text-white mb-1">{`Day ${i + 1}`}</h6>
                        <p className="text-white mb-0">
                          {Math.round(day.main.temp)}°C - {day.weather[0].description}
                        </p>
                      </div>
                      <div className="text-white fw-bold">
                        <p className="mb-0">{Math.round(day.main.temp)}°C</p>
                        <p className="mb-0">Min: {Math.round(day.main.temp_min)}°C</p>
                        <p className="mb-0">Max: {Math.round(day.main.temp_max)}°C</p>
                      </div>
                    </div>
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
