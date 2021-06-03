import useCrearUsuario from "../../hooks/personal/useCrearUsuario";

const CrearUsuarioBody = () => {
    const { handleOnChangeImg, handleOnChange } = useCrearUsuario();

    return (
        <div className="crearUsuarioBody__contenedor">
            <div className="crearUsuarioBody__imagen">
                <input type="file" name="img" onChange={handleOnChangeImg} />
                <img id="img" src="user.png" alt="Foto" />
            </div>

            <input
                type="text"
                spellCheck="false"
                className="crearUsuarioBody__input"
                placeholder="Nombres"
                onChange={e => handleOnChange('name', e.target.value)}
            />
            <div className="crearUsuarioBody__cedula">
                <select onChange={e => handleOnChange('carnet', e.target.value)}>
                    <option value="CI" selected>C.I.</option>
                    <option value="PT">P.T.</option>
                </select>
                <input
                    type="text"
                    placeholder="Número de identificación"
                    onChange={e => handleOnChange('idNumber', e.target.value)}
                />
            </div>

            <select
                name="sex"
                className="crearUsuarioBody__sexo"
                onChange={handleOnChange}
            >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>

            <textarea
                placeholder="Dirección"
                className="crearUsuarioBody__input crearUsuarioBody__input-textarea"
                name="address"
                onChange={handleOnChange}
            ></textarea>

            <div className="crearUsuarioBody__infoContact">
                <p className="crearUsuarioBody__p">Información de Contacto:</p>

                <input
                    type="number"
                    className="crearUsuarioBody__input"
                    placeholder="Número de Teléfono"
                    name="mobileNumber"
                    onChange={handleOnChange}
                />
                <input
                    type="mail"
                    className="crearUsuarioBody__input"
                    placeholder="Correo"
                    name="email"
                    onChange={handleOnChange}
                />
            </div>

            <button className="crearUsuarioBody__botonCrear">
                Crear Usuario
            </button>
        </div>
    );
};

export default CrearUsuarioBody;
