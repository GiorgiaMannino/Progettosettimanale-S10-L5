import { BrowserRouter, Routes, Route } from "react-router";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import Forecast from "./components/Forecast";
import Detail from "./components/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
};

export default App;
