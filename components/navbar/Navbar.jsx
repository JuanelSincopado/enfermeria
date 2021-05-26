import { useState } from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar__container">
            <div className="navbar__accionesContenedor">
                <a href="/historias-clinicas">
                    <img src="logo.png" alt="Logo" className="navbar__logo" />
                </a>

                <div className="navbar__acciones">
                    <button className="navbar__notificacion">
                        <i aria-hidden className="far fa-bell"></i>
                    </button>
                    <button
                        className="navbar__icon"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <i aria-hidden className="fas fa-times"></i>
                        ) : (
                            <i aria-hidden className="fas fa-bars"></i>
                        )}
                    </button>
                </div>
            </div>

            <ul
                className={
                    open
                        ? "navbar__menuContenedor active"
                        : "navbar__menuContenedor"
                }
            >
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
            </ul>
        </div>
    );
};

export default Navbar;
