const BotonCrear = ({ direccion, title }) => {
    return (
        <a className="botonCrear" href={direccion} title={title}>
            <i aria-hidden className="fas fa-plus"></i>
        </a>
    );
};

export default BotonCrear;
