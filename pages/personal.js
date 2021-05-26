import Navbar from "../components/navbar/Navbar";
import Navegacion from "../components/navbar/Navegacion";
import ListaPersonal from "../components/personal/ListaPersonal";

const Personal = () => {
    return (
        <>
            <Navbar />
            
            <div className="personal__divisor">
                <Navegacion />
                <ListaPersonal />
            </div>
        </>
    );
};

export default Personal;
