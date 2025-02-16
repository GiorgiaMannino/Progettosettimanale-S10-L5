import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <Alert
      show={show}
      variant="primary"
      className="mt-4"
      style={{
        backgroundColor: "rgba(0, 4, 255, 0.07)",
        color: "white",
      }}
    >
      <Alert.Heading>
        Welcome to <strong> SkyWeather</strong>
      </Alert.Heading>
      <p>Discover the weather forecasts for your city and beyond!</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-light">
          Close me
        </Button>
      </div>
    </Alert>
  );
}

export default Welcome;
