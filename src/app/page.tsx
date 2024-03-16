"use client"
import Image from "next/image";
import WaitingList from "./components/waiting_list";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 ">
      <Head>
        <title>Nchiini | cameroon</title>
        <meta
          property={`og:title`}
          content={`nchiini | Bringing you closer to your culture.`}
        />
        <meta
          property={`og:description`}
          content={`Nchiini is a web app designed to assist people in learning about their culture in an engaging and interactive manner. The app offers a user-friendly interface and a personalized learning experience to help users explore and understand different aspects of their culture`}
        />
        <meta property="og:type" content="nchiini" />
        <meta property="og:image" content={`/unnamed.jpg`} />
        {/* <meta property="og:image" content={`https://firebasestorage.googleapis.com/v0/b/nchiini-86492.appspot.com/o/unnamed.jpg?alt=media&token=2de34df1-d3f1-4a94-985f-0d083fd6aa12`} /> */}

        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content={`https://nchiini-web.vercel.app/`} />
      </Head>
      <WaitingList />
    </main>
  );
}
