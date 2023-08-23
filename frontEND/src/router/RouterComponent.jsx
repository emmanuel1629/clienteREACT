import { Routes , Route , Outlet } from "react-router-dom";

import HomePage from "../paginas/HomePage";
import RegistrarsePage from "../paginas/RegistrarsePage";
import PruebaPage from "../paginas/PruebasPage.jsx";
import LoginPage from "../paginas/LoginPage.jsx";
import UsuarioPage from "../paginas/UsuarioPage.jsx";

import ValidarAutenticacionComponent from "../components/ValidarAutenticacionComponent";

function RouterComponent() {
  return (
    <div className="rutas">
        <Routes>
          <Route path="/home" element={ <HomePage/> }></Route>
          <Route path="/registrarse" element={ <RegistrarsePage/> }></Route>
          <Route path="/pruebas" element={ <PruebaPage/> }></Route>
          <Route path="/login" element={ <LoginPage/> }></Route>

          <Route element = {  <ValidarAutenticacionComponent/>  }> 

            <Route path="/usuario/:id" element={ <UsuarioPage/> }></Route>

          </Route>
          
        </Routes>

    </div>
  )
}

export default RouterComponent