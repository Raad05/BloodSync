import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Vollkorn, Noto_Serif } from "next/font/google";
import Footer from "./components/Footer/Footer";

// Import Noto Serif with desired weights and styles
const notoSerif = Noto_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blood Donation",
  description: "First ever blood donation platform in Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
