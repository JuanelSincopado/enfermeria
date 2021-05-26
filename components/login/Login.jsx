import useLogin from "../../hooks/login/useLogin";

const Login = () => {
    const { error, handleOnChange, submit } = useLogin();

    return (
        <div className="login__contenedor">
            <img src="logo.png" alt="Enfermeria" />

            <form className="login__form" onSubmit={submit}>
                <div className="login__formGroup">
                    <input
                        type="mail"
                        className="login__input"
                        placeholder="Correo"
                        name="correo"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className="login__formGroup">
                    <input
                        type="password"
                        className="login__input"
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button className="login__olvideClave">
                    Olvidé mi contraseña
                </button>
                <br />
                <input
                    type="submit"
                    className="login__iniciarSesion"
                    value="Iniciar Sesión"
                />
            </form>

            {error && (<p className="login__error">{error}</p>)}

            

        </div>
    );
};

export default Login;
