import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { BrowserRouter } from "react-router-dom";
import { AutenticacionProvider } from "./contexto/AutenticacionContexto.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <AutenticacionProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AutenticacionProvider>
  
)
