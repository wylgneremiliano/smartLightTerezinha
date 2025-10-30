import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from "./dashBoard/DashBoard"

import Login from "./pages/Login/login"
import { List } from "./pages/list"
import Info from "./pages/Info/info"

const RotasDoApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Login />
        } />
        <Route path="/login" element={
          <Login />
        } />
        <Route path="/dashboard" element={
          <DashBoard />
        } />
        <Route path="/info" element={
          <Info />
        } />
        <Route path="/lista-itens" element={
          <List />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export { RotasDoApp };
