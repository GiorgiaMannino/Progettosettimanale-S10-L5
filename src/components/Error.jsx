import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Error() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Error!</Alert.Heading>
        <p>Sorry, we cannot find this city. Please try a different one.</p>
      </Alert>
    );
  }
}

export default Error;
