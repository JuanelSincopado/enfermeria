const TarjetaPersonal = ({data}) => {
    return ( 
        <div className="tarjetaPersonal__contenedor">
            <div className="tarjetaPersonal__identidad">
                <img src={data.img} alt="Foto" />

                <p className="tarjetaPersonal__nombre">{data.firstName} {data.lastName}</p>
            </div>
        </div>
     );
}
 
export default TarjetaPersonal;