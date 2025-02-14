import { BrowserRouter, Routes, Route } from "react-router";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import Forecast from "./components/Forecast";

const App = () => {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
};

export default App;
