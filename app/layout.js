import localFont from "next/font/local"
import "./globals.css";
import Topbar from "../components/header/topbar/Topbar";
import Navbar from "../components/header/navbar/Navbar";
import { Providers } from "../lib/redux/Providers";
import Footer from "../components/footer/Footer";

const myFont = localFont({ src: '../fonts/IRANSans/IRANSans.ttf' })

export const metadata = {
  title: "اموزشگاه اپل",
  description: "برترین در کشور",
};

export default async function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="fa">
        <body className={myFont.className}>
          <main>
            <Topbar />
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </Providers>
  );
}
