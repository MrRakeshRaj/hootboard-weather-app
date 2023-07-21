import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Forecast from "./components/forecast/Forecast";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/forecast" element={<Forecast />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
