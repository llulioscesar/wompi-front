import { Montserrat } from "next/font/google";
import "./globals.sass";
import {Navbar} from "@components/organisms";
import {StoreProvider} from "@store";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-bg-color ${inter.className}`}>
      <StoreProvider>
          <Navbar />
          {children}
      </StoreProvider>
      </body>
    </html>
  );
}
