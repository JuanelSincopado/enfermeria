import { useState } from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar__container">
            <a href="/historias-clinicas">
                <img src="logo.png" alt="Logo" className="navbar__logo" />
            </a>

            <button className="navbar__icon" onClick={() => setOpen(!open)}>
                {open ? (
                    <i aria-hidden className="fas fa-times"></i>
                ) : (
                    <i aria-hidden className="fas fa-bars"></i>
                )}
            </button>

            <ul
                className={
                    open
                        ? "navbar__menuContenedor active"
                        : "navbar__menuContenedor"
                }
            >
                <ActiveLink
                    activeClassName="active"
                    href="/historias-clinicas"
                >
                    <li className="navbar__li">
                        <a className="navbar__enlace">Historias Clinicas</a>
                    </li>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="!#">
                    <li className="navbar__li">
                        <a className="navbar__enlace">Pacientes</a>
                    </li>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/personal">
                    <li className="navbar__li">
                        <a className="navbar__enlace">Personal</a>
                    </li>
                </ActiveLink>

                <ActiveLink activeClassName="active" href="!#">
                    <li className="navbar__li">
                        <a className="navbar__enlace">Perfil</a>
                    </li>
                </ActiveLink>
            </ul>
        </div>
    );
};

export default Navbar;
