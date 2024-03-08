import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nchiini",
  description:
    "Nchiini is a web app designed to assist people in learning about their culture in an engaging and interactive manner. The app offers a user-friendly interface and a personalized learning experience to help users explore and understand different aspects of their culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
