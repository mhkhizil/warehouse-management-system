// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from "../firebase"
// export const getItems = async () => {
//   const collectionRef = collection(db, "data");
//   const q = query(collectionRef);
//   const querySnapShot = await getDocs(q);
  
//   const mappedData = querySnapShot.docs.map((items) => {
//     const { data } = items.data();
//    console.log(data);
//     return data;

//   })

//   ;
//   console.log(mappedData);
//   return mappedData;


// }

