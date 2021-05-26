//FIREBASE
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "../firebase";

import "../styles/index.css";
import "../styles/login.css";
import "../styles/navbar.css";
import "../styles/historiasClinicas.css";
import "../styles/personal.css";

function MyApp({ Component, pageProps }) {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Component {...pageProps} />
        </FirebaseAppProvider>
    );
}

export default MyApp;
