import type { Metadata } from "next";
import { Inter, Squada_One } from 'next/font/google'
import "./globals.css";
import "@/app/Header";
import Header from "@/app/Header";


 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const squada_one = Squada_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-squada-one',
  weight: '400'
})

export const metadata: Metadata = {
  title: "MiradaDigital360",
  description: "Pagina de venta de camaras de seguridad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${squada_one.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
