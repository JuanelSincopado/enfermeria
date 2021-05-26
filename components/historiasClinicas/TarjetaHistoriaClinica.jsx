const TarjetaHistoriaClinica = () => {
    return (
        <div className="tarjeta__contenedor">
            <div className="tarjeta__identidad">
                <img src="Jhoa.jpg" alt="Foto" />

                <div className="tarjeta__identidad-datos">
                    <p className="tarjeta__nombre">Jhoannell Rosario</p>
                    <p className="tarjeta__sexoEdad">Mujer de 16 años</p>
                </div>
            </div>

            <p className="tarjeta__fecha">26 de may. del 2021 - 2:14 a.m.</p>

            <p className="tarjeta__evaluacion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                saepe quibusdam molestias omnis maiores cumque eos placeat
                numquam, alias adipisci officia corrupti commodi aliquid cum
                sunt quis a ipsa? Obcaecati.
            </p>

            <p className="tarjeta__asignado">
                Asignado a Juan Cabello
            </p>
        </div>
    );
};

export default TarjetaHistoriaClinica;
