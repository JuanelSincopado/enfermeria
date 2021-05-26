import { useEffect, useState } from "react";
import firebase from "firebase/app";
import 'firebase/firestore';

const usePersonal = () => {
    const [personal, setPersonal] = useState([]);

    useEffect(() => {
        traerPersonal();
    });

    const traerPersonal = () => {
        // firebase
        //     .firestore()
        //     .collection("users")
        //     .get()
        //     .then((query) => {
        //         query.docs.map(doc => {
        //             console.log(doc.data());
        //         })
        //     });
    };

    return {
        personal
    };
};

export default usePersonal;
