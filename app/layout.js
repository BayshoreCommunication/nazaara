import Footer from "@/components/footer/Footer";
import MainNavbar from "@/components/navbar/MainNavbar";
import { Providers } from "@/store/provider";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Loading from "./loading";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <title>Nazaara Exclusive Women Wear</title>
      <body>
        <Providers>
          <Toaster position="top-center" reverseOrder={false} />
          <MainNavbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
