import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RotasDoApp } from "./routes.tsx";
import "./global.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RotasDoApp />
  </StrictMode>
);
