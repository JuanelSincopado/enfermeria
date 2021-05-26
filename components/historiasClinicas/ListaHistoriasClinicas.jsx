import TarjetaHistoriaClinica from "./TarjetaHistoriaClinica"

const ListaHistoriasClinicas = () => {
    return ( 
        <div className="listaHistoriasClinicas">
            <TarjetaHistoriaClinica />
            <TarjetaHistoriaClinica />
            <TarjetaHistoriaClinica />
        </div>
     );
}
 
export default ListaHistoriasClinicas;