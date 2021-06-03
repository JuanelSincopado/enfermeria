import ListaHistoriasClinicas from "../components/historiasClinicas/ListaHistoriasClinicas";
import Navbar from "../components/navbar/Navbar";
import Navegacion from "../components/navbar/Navegacion";

const HistoriasClinicas = () => {
    return (
        <>
            <Navbar />

            <div className="historiasClinicas__divisor">
                <Navegacion />

                <ListaHistoriasClinicas />
            </div>
        </>
    );
};

export default HistoriasClinicas;
