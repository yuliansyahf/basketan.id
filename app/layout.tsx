import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "../components/sidebar";
import Footer from "../components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Basket News - Berita Terkini Dunia Basket",
  description:
    "Website berita basket terupdate dengan analisis mendalam, berita NBA, EuroLeague, pemain, dan tim basket terkini",
  keywords: "basket, NBA, EuroLeague, berita basket, analisis basket, pemain basket, tim basket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="font-poppins bg-[#0f1a2b] antialiased">


        {/* ========== NAVBAR GLOBAL (muncul di semua halaman) ========== */}
        <Navbar />

        {/* ========== SEMUA HALAMAN DI SINI ========== */}
        <main className="pt-16"> 
          {/* pt-16 supaya konten tidak ketiban navbar fixed */}
          {children}
        </main>

        {/* ========== FOOTER GLOBAL ========== */}
        <Footer />
      </body>
    </html>
  );
}
