import { useState } from "react";

const useCrearUsuario = () => {
    const [usuario, setUsuario] = useState({
        name: "",
        identification: {
            carnet: "CI",
            idNumber: "",
        },
        sex: "",
        address: "",
        contactInfo: {
            mobileNumber: "",
            email: "",
        },
        img: null,
    });

    const handleOnChangeImg = (e) => {
        const value = e.target.files[0];
        if (value) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.getElementById("img");
                img.src = e.target.result;
            };
            reader.readAsDataURL(value);
            setUsuario({
                ...usuario,
                img: e.target.value
            })
        }
    };

    const handleOnChange = (name, value) => {
        switch (name) {
            case "name":
                setUsuario({
                    ...usuario,
                    name: value,
                });
                break;
            case "carnet":
                setUsuario({
                    ...usuario,
                    identification: {
                        carnet: value,
                    },
                });
                break;
            case "idNumber":
                setUsuario({
                    ...usuario,
                    identification: {
                        idNumber: value,
                    },
                });
                break;
            default:
                break;
        }
    };

    return {
        handleOnChangeImg,
        handleOnChange,
    };
};

export default useCrearUsuario;
