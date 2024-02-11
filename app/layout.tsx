import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Rasa, Vollkorn, Noto_Serif } from 'next/font/google';
import Footer from "./components/Footer/Footer";

// Import Rasa with desired weights and styles
const rasa = Rasa({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

// Import Vollkorn with desired weights and styles
const vollkorn = Vollkorn({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'], 
  subsets: ['latin']
});

// Import Noto Serif with desired weights and styles
const notoSerif = Noto_Serif({
  weight: ['400', '700'], 
  style: ['normal', 'italic'], 
  subsets: ['latin']
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
      <body style={{ fontFamily: rasa.style.fontFamily }}>
        <Navbar></Navbar>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
