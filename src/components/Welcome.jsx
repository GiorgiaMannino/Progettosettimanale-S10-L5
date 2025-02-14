import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <Alert show={show} variant="primary" className="mt-4">
      <Alert.Heading>
        Welcome to <strong> SkyWeather</strong>
      </Alert.Heading>
      <p>Discover the weather forecasts for your city and beyond!</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-primary">
          Close me
        </Button>
      </div>
    </Alert>
  );
}

export default Welcome;
