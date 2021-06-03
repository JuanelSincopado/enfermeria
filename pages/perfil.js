import { useContext } from "react";
import InfoUsuario from "../components/perfil/InfoUsuario";
import PersonalContext from "../context/personal/PersonalContext";
import BarVolver from "../components/BarVolver";

const Perfil = () => {
    const { usuario } = useContext(PersonalContext);

    return (
        <>
            <BarVolver url={"/personal"} pagina={'Perfil'} />
            <InfoUsuario data={usuario} />
        </>
    );
};

export default Perfil;
