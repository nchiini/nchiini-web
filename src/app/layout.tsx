import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nchiini",
  description:
    "Nchiini is a web app designed to assist people in learning about their culture in an engaging and interactive manner. The app offers a user-friendly interface and a personalized learning experience to help users explore and understand different aspects of their culture.",
  applicationName: "Nchiini",
  openGraph: {
    type: "website",
    url: "https://nchiini-web.vercel.app/",
    title: "Nchiini | Culture",
    description:
      "Nchiini is a web app designed to assist people in learning about their culture in an engaging and interactive manner. The app offers a user-friendly interface and a personalized learning experience to help users explore and understand different aspects of their culture",
    siteName: "Nchiini",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/nchiini-86492.appspot.com/o/unnamed.jpg?alt=media&token=2de34df1-d3f1-4a94-985f-0d083fd6aa12",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
