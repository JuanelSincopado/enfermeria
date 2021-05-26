import usePersonal from "../../hooks/personal/usePersonal";
import TarjetaPersonal from "./TarjetaPersonal";

const ListaPersonal = () => {
    const { personal } = usePersonal();

    return (
        <div className="personal__contenedor">
            <div className="listaPersonal__opciones">
                <div className="listaPersonal__buscador">
                    <i aria-hidden className="fas fa-search"></i>
                    <input type="text" placeholder="Nombre, Apellido, etc" />
                </div>

                <button className="listaPersonal__boton">
                    Crear Usuario
                </button>
            </div>
            <div className="listaPersonal__contenedor">
                {personal.map((doc) => (
                    <TarjetaPersonal data={doc.data()} key={doc.id} />
                ))}

                <button className="listaPersonal__boton-mobile">
                    <i aria-hidden className="fas fa-plus"></i>
                </button>
            </div>
        </div>
    );
};

export default ListaPersonal;
