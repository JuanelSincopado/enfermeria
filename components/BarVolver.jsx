const BarVolver = ({ url, pagina }) => {

    return (
        <div className="barVolver__contenedor">
            <a className="barVolver__a" href={url}>
                <i aria-hidden className="fas fa-arrow-left"></i>
            </a>

            <p className="barVolver__p">
                {pagina}
            </p>
        </div>
    );
};

export default BarVolver;
