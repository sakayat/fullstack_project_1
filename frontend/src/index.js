import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProjectContext } from "./context/ProjectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectContext.Provider>
        <App />
      </ProjectContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
