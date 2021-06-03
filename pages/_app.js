//FIREBASE
import { FirebaseAppProvider } from "reactfire";
import Head from "next/head";
import firebaseConfig from "../firebase";
import PersonalState from "../context/personal/PersonalState";

import "../styles/index.css";
import "../styles/login.css";
import "../styles/navbar.css";
import "../styles/historiasClinicas.css";
import "../styles/personal.css";
import "../styles/perfil.css";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="description" content="Asistencia de enfermería" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Enfermería</title>
                <script
                    src="https://kit.fontawesome.com/0d9050c441.js"
                    crossorigin="anonymous"
                ></script>
            </Head>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <PersonalState>
                    <Component {...pageProps} />
                </PersonalState>
            </FirebaseAppProvider>
        </>
    );
}

export default MyApp;
