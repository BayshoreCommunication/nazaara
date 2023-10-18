// "use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/store/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Nazaara Exclusive Women Wear</title>
      <body>
        <Providers>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          {children}
          {/* <ModalPopup /> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
