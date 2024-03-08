
import { doc, setDoc ,collection, getDocs, query} from "firebase/firestore";
import { db } from "../firebase"


export const addFieldToDocument = async (newValue:object) => {
    try {
        // const docRef = firestore.collection(collectionName).doc(documentId);

        // // Retrieve the document
        // const doc = await docRef.get();
        const collectionRef = collection(db, "data");
        const q = query(collectionRef);
        const querySnapShot = await getDocs(q);
        
        const mappedData = querySnapShot.docs.map((doc) => doc.data());
        const existingData = mappedData.length > 0 ? mappedData[0].data : [];
        ;
        console.log(existingData);
        const newData = [...existingData, newValue];
        await setDoc(doc(db, "data", "warehouse1"),  {data:newData}, { merge: true });
    } catch (error) {
        console.error('Error updating document: ', error);
    }
};
