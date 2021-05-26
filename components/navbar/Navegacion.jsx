import ActiveLink from "./ActiveLink";

const Navegacion = () => {
    return ( 
        <div className="navegacion__contenedor">
            <ActiveLink activeClassName="active" href="/historias-clinicas">
                    <a className="navbar__enlace">Historias Clinicas</a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="#">
                    <a className="navbar__enlace">Pacientes</a>
                </ActiveLink>
                <ActiveLink activeClassName=" active" href="/personal">
                    <a className="navbar__enlace">Personal</a>
                </ActiveLink>

                <ActiveLink activeClassName=" active" href="#">
                    <a className="navbar__enlace">Perfil</a>
                </ActiveLink>
        </div>
     );
}
 
export default Navegacion;