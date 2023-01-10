import { Route, Routes as RoutesDom } from "react-router-dom"
import Home from "./pages/Home/Home"
import Sobre from "./pages/Sobre/Sobre"
import Inventory from "./pages/Inventory/Inventory"


const Routes = () => {
  return (
      <RoutesDom>
        <Route index element={<Home /> } />
        <Route path="sobre" element={<Sobre /> } />
        <Route path="inventory" element={<Inventory /> } />
      </RoutesDom>
  )
}

export default Routes