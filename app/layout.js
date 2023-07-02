"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ModalPopup from "@/components/modal/ModalPopup";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const router = usePathname();
  return (
    <html lang="en">
      <title>Nazara</title>
      <body>
        {router === "/payment" ? (
          children
        ) : (
          <>
            <Navbar />
            {children}
            {/* <ModalPopup /> */}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
