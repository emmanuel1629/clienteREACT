import  {  useForm   } from "react-hook-form";
import  {  useState , useEffect   } from 'react'
import { usarAutenticacionContexto } from '../contexto/AutenticacionContexto';
import { useNavigate ,Link} from "react-router-dom";

function RegistarsePage() {

  const [styleMensaje, setstyleMensaje] = useState(null);
  const [mnsjNuevoUsuario, setmnsjNuevoUsuario] = useState(null);

  const navegarALaPagina = useNavigate();
  const { register ,handleSubmit ,formState:{errors},} = useForm(); 
  const {registrarDesdeAutenticacionProvider , validarAutenticacion ,validarErrores} = usarAutenticacionContexto();

 useEffect(() => {
    if(validarAutenticacion) navegarALaPagina("/home")
    
  }, [validarAutenticacion])

  const registrarUsuario= handleSubmit((values)=>{
    registrarDesdeAutenticacionProvider(values)
  });
    
  

  return (
    <div className='container m-5 align-items-center text-center'>
      <div className="row mt-1">
          <div className="col-md-8 bg-dark text-white ">
              <p>s</p>
          </div>
          <div className="col-md-4 border pb-2">
            <span className="alert alert-danger  p-1">{validarErrores}</span>

            <div className={`alert alert-${styleMensaje}`}>
              {
                mnsjNuevoUsuario
              }
            </div>

            <form onSubmit={registrarUsuario}>

              <div className="mb-3">
                <input type="text" className="form-control-sm" placeholder="Ingresa Usuario" { ...register( 'usuario',  {required:true}  )}/>
                {
                  errors.usuario && (<p className="text-danger">Usuario Requerido</p>)
                }
              </div>

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
            <p> 
              Tienes Una Cuenta
              <Link to="/login">Ingresa</Link>
            </p>
          </div>

      </div>

    </div>
  )
}

export default RegistarsePage