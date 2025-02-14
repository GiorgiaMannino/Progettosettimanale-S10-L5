import { Container } from "react-bootstrap";
import Welcome from "./Welcome";
import SearchBar from "./SearchBar";

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
