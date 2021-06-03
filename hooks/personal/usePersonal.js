import { useFirestore, useFirestoreCollectionData } from "reactfire";
import "firebase/firestore";

const usePersonal = () => {

    const referencia = useFirestore().collection('users');
    const {status, data} = useFirestoreCollectionData(referencia);

    return {
        status,
        data
    };
};

export default usePersonal;
