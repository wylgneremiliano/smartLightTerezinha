import { BrowserRouter, Route, Routes } from "react-router-dom"


import Login from "./pages/Login/login"
import { List } from "./pages/list"
import Info from "./pages/Info/info"
import DashBoard from "./pages/dashBoard/DashBoard"
import { PAGE } from "./constants"

const RotasDoApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE.ROOT()} element={
          <Login />
        } />
        <Route path={PAGE.LOGIN()} element={
          <Login />
        } />
        <Route path={PAGE.DASHBOARD()} element={
          <DashBoard />
        } />
        <Route path={PAGE.INFO()} element={
          <Info />
        } />
        <Route path={PAGE.LISTA_ITENS()} element={
          <List />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export { RotasDoApp };
