import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4300);
    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <Alert
        variant="primary"
        className="mt-4"
        style={{
          backgroundColor: "rgba(0, 4, 255, 0.07)",
          color: "white",
        }}
      >
        <Alert.Heading>
          Welcome to <strong>SkyWeather</strong>
        </Alert.Heading>
        <p>Get weather forecasts for your city and beyond! </p>
      </Alert>
    )
  );
}

export default Welcome;
