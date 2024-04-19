"use client";
import Image from "next/image";
import WaitingList from "../components/waiting_list";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 ">
      <WaitingList />
    </main>
  );
}
