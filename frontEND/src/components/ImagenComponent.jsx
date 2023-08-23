import  Image  from "react-bootstrap/Image";

function imagenRetos(srcImagen){
    return <Image src={`${srcImagen}`} fluid className="imagen-reto"/>;
}

export default imagenRetos;