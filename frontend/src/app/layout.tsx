import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/organism/Header";
import Footer from "@/components/organism/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Proyecto en proceso...",
  keywords: "cines, cine, cartelera, estrenos, estreno, horarios, horario, preventas, próximos estrenos, proximos estrenos, eventos, compra online, compra candy online, candy, concesión, cine fan, complejos, argentina, PREMIUM, COMFORT, 2D, 3D, 4D, XD, DBOX"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
