import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/login"
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
                    <h1>dashboard</h1>
                } />
                <Route path="/info" element={
                    <Info />
                } />
                <Route path="/lista-itens" element={
                    <h1>Lista de Itens</h1>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export { RotasDoApp }