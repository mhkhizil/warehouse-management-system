"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Link from "next/link";
import useItem from "@/firebase/customhooks/useItem";

import ShowPage from "./components/showPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { addItems, getItems,deleteItem,updateItem } = useItem();
   const [itemData1, setItemData1] = useState([]);
   //fetch data sample logic
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { getItems } = useItem();
  //     try {
  //       const [data] = await getItems("item");
  //       setItemData1(data?.data)// Here you can access the mapped data
  //     } catch (error) {
  //       console.error("Error fetching items:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  //add item sample logic
  const handleAddItem = async () => {
    try {
      const newItem = {
        name: "steering wheel",
        id: uuidv4(),
        image:
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        description: "abcd abcd abcd",
      }; // Assuming newItem is an object with a name property
      const result = await addItems("item", newItem, "base");
      console.log("Item created successfully!"); // Item added successfully
      // Do something else after adding the item, if needed
    } catch (error) {
      console.error("Error adding item:", error);
      // Handle error
    }
  };
  //delete item sample logic
  // const deleteItemHandler = async (targetItemId:string) => {
  //   try {
  //     const result = await deleteItem("item", targetItemId,'base'); // Assuming deleteItem is imported correctly
  //     console.log(result); // Item deleted successfully!
  //   } catch (error) {
  //     console.error("Error deleting item:", error);
  //   }
  // };
  const handleUpdate = async (targetItemId:string) => {
    try {
      const result = await updateItem(
        "item",
        targetItemId,
        {  name: "Updated name" },
        "base"
      );
      console.log(result); // Item updated successfully.
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };
  return (
    <main>
      This is home page
      <Link href={"/items"}>items</Link>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={()=>handleUpdate("9b298c83-3f8d-49b1-a2a5-143c58489532")}>edit Item</button>
      {/* <ShowPage deleteHandler={deleteItemHandler} headings={["name", "image", "description"]} body={itemData1} /> */}
    </main>
  );
}
