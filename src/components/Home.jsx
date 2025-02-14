import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Welcome from "./Welcome";

const SearchBar = ({ changeCity }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    const cityName = e.target.value;
    setCity(cityName);
    changeCity(cityName);
  };

  return (
    <div style={{ position: "relative" }}>
      <Form.Control
        className="mt-4 ps-5"
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={handleChange}
      />
      <i
        className="bi bi-search"
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></i>
    </div>
  );
};

const Home = () => {
  const searchCity = (city) => {
    console.log("città cercata", city);
  };

  return (
    <Container>
      <Welcome />
      <SearchBar changeCity={searchCity} />
    </Container>
  );
};

export default Home;
