import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Maitree } from "@next/font/google";

export const metadata: Metadata = {
  title: "Blood Donation",
  description: "First ever blood donation platform in Bangladesh",
};

const maitree = Maitree({
  subsets: ["latin"],
  weight: ["200", "400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={maitree.className} suppressHydrationWarning={true}>
        <Navbar></Navbar>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
