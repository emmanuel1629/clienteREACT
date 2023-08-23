import { Navigate , Outlet} from "react-router-dom";
import { usarAutenticacionContexto } from '../contexto/AutenticacionContexto'


function ValidarAutenticacionComponent() {
    const { usuario , validarAutenticacion } = usarAutenticacionContexto();
    console.log(validarAutenticacion);
    // if(!validarAutenticacion) return  <Navigate to="/login"/>
  return (
   <Outlet/>
  )
}

export default ValidarAutenticacionComponent