const TarjetaPersonal = ({ data, handleOnClick }) => {

    return (
        <div
            href="/perfil"
            className="tarjetaPersonal__contenedor"
            onClick={() => handleOnClick(data)}
        >
            <div className="tarjetaPersonal__identidad">
                <img src={data.img} alt="Foto" />

                <p className="tarjetaPersonal__nombre">
                    {data.name}
                </p>
            </div>
        </div>
    );
};

export default TarjetaPersonal;
