import usePersonal from "../../hooks/personal/usePersonal";
import TarjetaPersonal from "./TarjetaPersonal";

const ListaPersonal = () => {
    
    const {personal} = usePersonal();

    return (
        <div className="listaPersonal__contenedor">
            {personal.map(doc => (
                <TarjetaPersonal data={doc.data()} key={doc.id} />
            ))}
        </div>
    );
};

export default ListaPersonal;
