import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kaleb Mesfin - Full Stack Engineer",
  description:
    "Result-driven Full Stack Engineer building robust, scalable solutions across web, mobile, and backend to power exceptional user experiences and drive business success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </>
      </body>
    </html>
  );
}
