import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";
import { object } from "zod";
export interface Item {
  id: string;
  name: string;
  image: string;
  description: string;
}
const useItem = () => {
  //getting all items
  const getItems = (collectionName: string) => {
    return new Promise((resolve, reject) => {
      const collectionRef = collection(db, collectionName);
      const unsubscribe = onSnapshot(
        collectionRef,
        (querySnapshot) => {
          const mappedData = querySnapshot.docs.map((doc) => doc.data());
          console.log(mappedData);
          resolve(mappedData);
        },
        (error) => {
          console.error("Error getting documents: ", error);
          reject(error);
        }
      );
    });
  };
  //getting indidual item
  const getItem = (collectionName: string, targetItemId: string) => {
    return new Promise((resolve, reject) => {
      const collectionRef = collection(db, collectionName);
      const unsubscribe = onSnapshot(
        collectionRef,
        (querySnapshot) => {
          const mappedData = querySnapshot.docs.map((doc) => doc.data());

          //still might need logic to handle both base and group
          const [base, group] = mappedData;
          console.log(base?.data);

          const targetedData = base?.data?.find(
            (item: Item) => item.id == targetItemId
          );
          if (targetedData) {
            resolve(targetedData);
          } else {
            reject("Item not found");
          }
        },
        (error) => {
          console.error("Error getting documents: ", error);
          reject(error);
        }
      );
    });
  };
  //adding new items
  const addItems = async (
    collectionName: string,
    newValue: object,
    documentName: string
  ) => {
    //   return new Promise((resolve, reject) => {
    //     const collectionRef = collection(db, collectionName);
    //     const unsubscribe = onSnapshot(collectionRef, async(querySnapshot) => {

    //         const mappedData = querySnapshot.docs.map((doc) => doc.data());
    //         const existingData = mappedData.length > 0 ? mappedData[0].data : [];
    //         ;

    //         const newData = [...existingData, newValue];
    //        try {
    //         await setDoc(doc(db, collectionName, documentName),  {data:newData}, { merge: true });
    //         resolve({ message: "Item added successfully", newData: newData });

    //        } catch (error) {
    //         console.error("Error setting document: ", error);
    //                 reject(error);
    //        }
    //     }, (error) => {
    //         console.error("Error getting documents: ", error);
    //         reject(error);
    //     });
    // });
    try {
      // const docRef = firestore.collection(collectionName).doc(documentId);

      // // Retrieve the document
      // const doc = await docRef.get();
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef);
      const querySnapShot = await getDocs(q);

      const mappedData = querySnapShot.docs.map((doc) => doc.data());
      const existingData = mappedData.length > 0 ? mappedData[0].data : [];
      const newData = [...existingData, newValue];
      await setDoc(
        doc(db, collectionName, documentName),
        { data: newData },
        { merge: true }
      );
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  //deleting item
  const deleteItem = async (
    collectionName: string,
    targetItemId: string,
    documentName: string
  ) => {
    try {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(collectionRef);
      const mappedData = querySnapshot.docs.map((doc) => doc.data());
      console.log(mappedData);

      // Still might need logic to handle both base and group
      const [base, group] = mappedData;
      console.log(base?.data);

      const updatedData = base.data.filter(
        (item: Item) => item.id !== targetItemId
      );
      console.log(updatedData);

      // Update the document with the modified data
      const docRef = doc(db, collectionName, documentName);
      await setDoc(
        doc(db, collectionName, documentName),
        { data: updatedData },
        { merge: true }
      );

      return "Item deleted successfully.";
    } catch (error) {
      console.error("Error deleting item: ", error);
      throw error;
    }
  };
  //updating item
  const updateItem = async (
    collectionName: string,
    targetItemId: string,
    updatedItemData: any,
    documentName: string
  ) => {
    try {
      // Fetch the current data from the collection
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(collectionRef);
      const mappedData = querySnapshot.docs.map((doc) => doc.data());
      console.log(mappedData);

      // Find the correct document containing the item to be updated
      const [base, group] = mappedData;

      // Find and update the specific item within the document's data
      //this will map through original array and update the item id that match the target id
      const updatedData = base.data.map((item: Item) => {
        if (item.id === targetItemId) {
          return { ...item, ...updatedItemData }; // Merge the updatedItemData with the existing item data
        }
        return item;
      });

      // Update the document with the modified data
      const docRef = doc(db, collectionName, documentName);
      await setDoc(docRef, { data: updatedData }, { merge: true });

      return "Item updated successfully.";
    } catch (error) {
      console.error("Error updating item: ", error);
      throw error;
    }
  };

  return { getItems, getItem, addItems, deleteItem, updateItem };
};

export default useItem;
