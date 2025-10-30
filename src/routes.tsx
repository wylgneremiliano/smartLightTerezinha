import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from "./dashBoard/DashBoard"

import Login from "./pages/Login/login"
import { List } from "./pages/list"

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
          <DashBoard></DashBoard>
        } />
        <Route path="/info" element={
          <h1>Informações gerais</h1>
        } />
        <Route path="/lista-itens" element={
          <List />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export { RotasDoApp };
