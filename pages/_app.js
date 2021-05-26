//FIREBASE
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "../firebase";
import Head from "next/head";

import "../styles/index.css";
import "../styles/login.css";
import "../styles/navbar.css";
import "../styles/historiasClinicas.css";
import "../styles/personal.css";
import PersonalState from "../context/personal/PersonalState";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Enfermería</title>
                <meta name="description" content="Asistencia de enfermería" />
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
