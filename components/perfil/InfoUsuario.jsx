import { useEffect, useState } from "react";

const InfoUsuario = ({ data }) => {
    const [usuario, setUsuario] = useState({
        img: "",
        name: "",
        idNumber: "",
        contactInfo: {
            mobileNumber: "",
        },
    });

    useEffect(() => {
        setUsuario(JSON.parse(data));
    }, [data]);

    return (
        <div className="infoUsuario__contenedor">
            <div className="infoUsuario__nombreCedulaFoto">
                <img src={usuario.img} alt="Foto de Perfil" />

                <div className="infoUsuario__nombreCedula">
                    <p className="infoUsuario__nombre">{usuario.name}</p>

                    <p className="infoUsuario__cedula">{usuario.idNumber}</p>
                </div>
            </div>

            <div className="infoUsuario__datosGenerales">
                <p className="infoUsuario__p">
                    {" "}
                    <span className="infoUsuario__span">Teléfono:</span>{" "}
                    {usuario.contactInfo.mobileNumber}
                </p>
                <p className="infoUsuario__p">
                    {" "}
                    <span className="infoUsuario__span">Correo:</span>{" "}
                    {usuario.contactInfo.email}
                </p>
                <p className="infoUsuario__p">
                    <span className="infoUsuario__span">Dirección:</span>
                    {usuario.address}
                </p>
            </div>

            <div className="infoUsuario__historiasClinicas">
                <p className="infoUsuario__historiasClinicasTitulo">
                    Historias Clínicas
                </p>
            </div>
        </div>
    );
};

export default InfoUsuario;
