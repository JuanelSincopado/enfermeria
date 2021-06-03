import { useContext } from "react";
import PersonalContext from "../../context/personal/PersonalContext";
import usePersonal from "../../hooks/personal/usePersonal";
import TarjetaPersonal from "./TarjetaPersonal";
import { useRouter } from "next/router";
import Cargando from "../Cargando";
import BotonCrear from "../BotonCrear";

const ListaPersonal = () => {
    const { status, data } = usePersonal();

    const { setUsuario } = useContext(PersonalContext);
    const router = useRouter();

    const handleOnClick = (data) => {
        setUsuario(data);

        router.push("/perfil");
    };

    return (
        <div className="personal__contenedor">
            <div className="listaPersonal__opciones">
                <div className="listaPersonal__buscador">
                    <i aria-hidden className="fas fa-search"></i>
                    <input type="text" placeholder="Nombre, Apellido, etc" />
                </div>
                <BotonCrear direccion={'/crear-usuario'} title='Crear Usuario' />
            </div>
            <div className="listaPersonal__contenedor">
                {status !== "loading" ? (
                    data.map((doc) => (
                        <TarjetaPersonal
                            data={doc}
                            key={doc.NO_ID_FIELD}
                            handleOnClick={handleOnClick}
                        />
                    ))
                ) : (
                    <Cargando />
                )}
            </div>
        </div>
    );
};

export default ListaPersonal;
