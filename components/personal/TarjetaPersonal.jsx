import { useContext } from "react";
import PersonalContext from "../../context/personal/PersonalContext";

const TarjetaPersonal = ({data}) => {

    const { setUsuario } = useContext(PersonalContext);

    return ( 
        <div href="/perfil" className="tarjetaPersonal__contenedor" onClick={() => setUsuario(data)}>
            <div className="tarjetaPersonal__identidad">
                <img src={data.img} alt="Foto" />

                <p className="tarjetaPersonal__nombre">{data.firstName} {data.lastName}</p>
            </div>
        </div>
     );
}
 
export default TarjetaPersonal;