import { Inter } from "next/font/google";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./components/Navbar";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ElevaTuclub",
  description: "App de preparación física para equipos deportivos",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <div className="flex items-center justify-center h-screen text-2xl">
              CARGANDO...
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col h-screen">
                <Navbar />
                {children}
              </div>
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
