import BarVolver from "../components/BarVolver";
import CrearUsuarioBody from "../components/crearUsuario/CrearUsuarioBody";

const Crear = () => {
    return ( 
        <>
            <BarVolver url="/personal" pagina='Crear Personal' />

            <CrearUsuarioBody />
        </>
     );
}
 
export default Crear;