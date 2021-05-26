import { useState } from "react";
import firebase from "firebase";

const useLogin = () => {
    const [usuario, setUsuario] = useState({
        correo: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [sesion, setSesion] = useState(null)

    const handleOnChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        if (usuario.password.length < 6) {
            setError("Contraseña demasiado corta");
            setTimeout(() => {
                setError('')
            }, 2000);
            return;
        }

        // const nuevaSesion = await firebase.auth().signInWithEmailAndPassword(usuario.correo, usuario.password);

    };

    return {
        error,
        setUsuario,
        handleOnChange,
        submit,
    };
};

export default useLogin;
