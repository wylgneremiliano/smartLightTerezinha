import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from "./dashBoard/DashBoard"


const RotasDoApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <h1>login</h1>
                } />
                <Route path="/login" element={
                    <h1>login</h1>
                } />
                <Route path="/dashboard" element={
          <DashBoard></DashBoard>
                } />
                <Route path="/info" element={
                    <h1>Informações gerais</h1>
                } />
                <Route path="/lista-itens" element={
                    <h1>Lista de Itens</h1>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export { RotasDoApp }