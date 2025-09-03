import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/login"

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
                    <h1>dashboard</h1>
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