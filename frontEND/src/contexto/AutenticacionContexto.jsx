import { createContext , useContext , useState , useEffect } from 'react';
import  {  registrarPeticion , loginPeticion } from "../api/autenticacion";

const AutenticacionContexto = createContext();

export const usarAutenticacionContexto = ()=>{
   const  contextoAutenticacion = useContext(AutenticacionContexto)
   if(!contextoAutenticacion){
    throw new Error("Debes Usar El Contexto Autenticacion Y Envolver La Aplicacion")
   }

   return contextoAutenticacion;
};

export const AutenticacionProvider= ({children})=>
{
    const [usuario, setusuario] = useState(null)
    const [validarAutenticacion, setvalidarAutenticacion] = useState(false)
    const [validarErrores, setvalidarErrores] = useState([])

    useEffect(() => {
        if(validarErrores.length > 0){
            const tiempoErrores = setTimeout(() => {
                setvalidarErrores([])
            }, 6000);

            return () =>clearTimeout(tiempoErrores)
        }
    }, [validarErrores]);

    const registrarDesdeAutenticacionProvider = async (usuario)=>
    {
        try {
            const newUsuario = await registrarPeticion(usuario);
            setusuario(newUsuario)
            setvalidarAutenticacion(true);
        } catch (error) {
            setvalidarErrores(error.response.data.mensaje)
        }
    }

    const loginDesdeAutenticacionProvider = async (usuario)=>
    {  
        // No se cambia la autenticacion a true 
        setvalidarAutenticacion(true)
        // try {
        //     const loginUsuario = await loginPeticion(usuario);
        //     if(loginUsuario.data.mensaje)
        //     {
        //         setvalidarErrores(loginUsuario.data.mensaje)
        //     }
        //     setvalidarAutenticacion(true);
        //     console.log(validarAutenticacion)
        //     console.log(loginUsuario.data.token)
        //     console.log(loginUsuario);

        // } catch (error) {
        //     console.log(error)
        // }
    }

    return(
        <AutenticacionContexto.Provider
        value={{
            registrarDesdeAutenticacionProvider,
            loginDesdeAutenticacionProvider,
            usuario,
            validarAutenticacion,
            validarErrores
        }}>
            
        {children}
        </AutenticacionContexto.Provider>
    )
}