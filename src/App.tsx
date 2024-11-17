import { Home } from "./pages";
import { DetailTemplate } from "./templates/DetailTemplate";
import { MainTemplate } from "./templates/MainTemplate";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/menu/*" element={<MainTemplate />} />
      <Route path="/menu/platillo/:id" element={<DetailTemplate />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
