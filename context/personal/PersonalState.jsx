import { useState } from "react";
import PersonalContext from "./PersonalContext";

const PersonalState = ({ children }) => {

    const [usuario, setUsuario] = useState({});

    return ( 
        <PersonalContext.Provider value={{
            usuario,
            setUsuario
        }}>
            {children}
        </PersonalContext.Provider>
     );
}
 
export default PersonalState;