import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.sass";
import {Navbar} from "@components/organisms";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike Vomero 17",
  description: "Descubre el Nike Vomero 17, diseñado para brindarte la máxima comodidad y soporte durante tus carreras. Experimenta la revolución en amortiguación y estabilidad con nuestra última tecnología Zoom Air. Ideal para corredores que buscan un calzado resistente y de alto rendimiento. Compra ahora y lleva tus entrenamientos al próximo nivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-bg-color ${inter.className}`}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
