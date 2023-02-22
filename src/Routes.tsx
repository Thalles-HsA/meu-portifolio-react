import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Inventory from "./pages/Inventory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  );
};

export default AppRoutes;