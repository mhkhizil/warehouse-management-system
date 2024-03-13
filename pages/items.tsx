"use client";
import React, { useEffect, useState } from "react";
import showPage, { bodyType } from "./components/showPage";
import { getItems } from "@/firebase/customhooks/getItems";
import ShowPage from "./components/showPage";
import { addFieldToDocument } from "@/firebase/customhooks/addItems";
const Items: React.FC = () => {
  // const [itemData1, setItemData1] = useState([]);
  // const [itemData2, setItemData2] = useState([]);
  // useEffect(() => {
  //   const getDataMap = async () => {
  //     const [warehouse1] = await getItems();

  //     setItemData1(warehouse1);
  //   };
  //   getDataMap();
  //   addFieldToDocument({name:"abufb0",price:5555,category:"xfdvss"});
  // }, []);

  return (
    <div>
    
    </div>
  );
};

export default Items;
