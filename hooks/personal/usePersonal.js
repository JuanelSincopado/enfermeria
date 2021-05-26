import { useEffect, useState } from "react";
import firebase from "firebase";

const usePersonal = () => {
    const [personal, setPersonal] = useState([]);

    useEffect(() => {
        traerPersonal();
    });

    const traerPersonal = () => {
        firebase
            .firestore()
            .collection("users")
            .get()
            .then((query) => {
                setPersonal(query.docs);
            });
    };

    return {
        personal
    };
};

export default usePersonal;
