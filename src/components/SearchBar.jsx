import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";

const SearchBar = ({ changeCity }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=bb5d1147afc96159e576456b97bf104c`
      );
      const [location] = await response.json();

      if (location) {
        const { lat, lon } = location;

        const weatherCity = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb5d1147afc96159e576456b97bf104c&units=metric`
        );
        const currentWeather = await weatherCity.json();

        changeCity({
          city,
          lat,
          lon,
          weather: currentWeather,
        });
        navigate("/detail", { state: { city, lat, lon } });
      } else {
        console.error("città non presente");
      }
    } catch (error) {
      console.error("errore", error);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <Form.Control
        className="mt-4 ps-5"
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
      />
      <i
        className="bi bi-search"
        onClick={fetchWeather}
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

export default SearchBar;
