import  {  useForm   } from "react-hook-form";

import { usarAutenticacionContexto } from "../contexto/AutenticacionContexto";

import { Link } from "react-router-dom";
function LoginPage() {

  const { loginDesdeAutenticacionProvider ,validarErrores } = usarAutenticacionContexto();
  const { register ,handleSubmit ,formState:{errors}} = useForm(); 
 
  const manejarEnvio = handleSubmit(valores=>{
    loginDesdeAutenticacionProvider(valores);
  })


  return (
    <div className='container m-5 '>
      <div className="card  mt-1 align-items-center text-center">
          <div className="card-body pb-2">
            <h5 className="card-title">LOGIN</h5>
          
            <span className="bg-danger text-white mt-5" >{validarErrores}</span>
            
            <form onSubmit={manejarEnvio}>

              <div className="mb-3">
                <input type="email" className="form-control-sm" placeholder="Ingresa Email" { ...register( 'email',  {required:true}  )}/>
                {
                  errors.email && (<p className="text-danger">Email Requerido</p>)
                }
              </div>

              <div className="mb-3">
                <input type="password" className="form-control-sm" placeholder="Ingresa Contraseña" { ...register( 'password',  {required:true}  )}/>
                {
                  errors.password && (<p className="text-danger">Password Requerido</p>)
                }
              </div>

              <div className="mb-3">
                <input type="hidden" className="form-control-sm" placeholder="Ingresa Contraseña" { ...register( 'roles' )}/>
              </div>
      
              <button type="submit" className="btn btn-success">Enviar</button>
            </form>

          </div>
          <p className="d-block">
            No Tienes Una Cuenta?
              <Link to="/registrarse">Registrate</Link>
          </p>
        
      </div>

    </div>
  )
}

export default LoginPage