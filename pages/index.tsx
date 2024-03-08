"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { getItems } from "../firebase/items/getItems";
import { useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      This is home page
      <Link href={"/items"}>
      items
      </Link>
    </main>
  );
}
