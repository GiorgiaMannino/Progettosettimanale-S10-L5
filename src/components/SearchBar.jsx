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
      console.log("Location:", location);

      if (location) {
        const { lat, lon } = location;

        // dati giornata corrente
        const weatherCityResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb5d1147afc96159e576456b97bf104c&units=metric`
        );
        const weatherCity = await weatherCityResponse.json();
        console.log("weatherCity:", weatherCity);

        // dati dei prossimi giorni
        const forecastCityResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=bb5d1147afc96159e576456b97bf104c&units=metric`
        );
        const forecast = await forecastCityResponse.json();
        console.log("Forecast:", forecast);

        changeCity({
          city,
          lat,
          lon,
          weather: weatherCity,
          forecast: forecast.list,
        });
        navigate("/detail", {
          state: { city, lat, lon, weather: weatherCity, forecast: forecast.list },
        });
      } else {
        console.error("Città non presente");
      }
    } catch (error) {
      console.error("Errore", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Form.Control
        className="mt-4 ps-5"
        type="text"
        placeholder="Search for a city"
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
