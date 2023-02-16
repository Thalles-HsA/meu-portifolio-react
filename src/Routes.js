import { Route, Routes as RoutesDom } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Inventory from "./pages/Inventory"


const Routes = () => {
  return (
      <RoutesDom>
        <Route path="home" element={<Home /> } />
        <Route path="sobre" element={<Sobre /> } />
        <Route path="inventory" element={<Inventory /> } />
      </RoutesDom>
  )
}

export default Routes