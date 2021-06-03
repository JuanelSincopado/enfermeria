import PersonalContext from "./PersonalContext";

const PersonalState = ({ children }) => {
    const usuario =
        typeof window !== "undefined" ? localStorage.getItem("usuario") : null;

    const setUsuario = (usuario) => {
        localStorage.setItem("usuario", JSON.stringify(usuario));
    };

    return (
        <PersonalContext.Provider
            value={{
                usuario,
                setUsuario,
            }}
        >
            {children}
        </PersonalContext.Provider>
    );
};

export default PersonalState;
