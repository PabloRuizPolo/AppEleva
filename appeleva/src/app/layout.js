import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@headlessui/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ElevaTuclub",
  description: "App de preparación física para equipos deportivos",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <div className="flex items-center justify-center h-screen text-2xl">
              CARGANDO...
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <header>
              <SignedOut>
                <div>
                  <Link
                    href={"/sign-in"}
                    className="btn btn-primary flex flex-row justify-center items-center max-w-min"
                  >
                    Acceso
                  </Link>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
