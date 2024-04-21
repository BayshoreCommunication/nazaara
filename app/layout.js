import Footer from "@/components/footer/Footer";
import MainNavbar from "@/components/navbar/MainNavbar";
import { Providers } from "@/store/provider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Nazaara Exclusive Women Wear",
    template: "%s | Nazaara Exclusive Women Wear",
  },
  description:
    "Reveal the latest exclusive woman wear at Nazaara. Shop trendy and high-quality clothing for women in Bangladesh. Dress yourself with our exclusive collection for your bridal, party, and regular occasion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {/* <title>Nazaara Exclusive Women Wear</title> */}
      <body>
        <Providers>
          <Toaster position="top-center" reverseOrder={false} />
          <MainNavbar />
          {/* <Suspense fallback={<Loader height={"h-[60vh]"} />}> */}
          <main className="mt-16 lg:mt-[5.5rem]">{children}</main>
          {/* </Suspense> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
