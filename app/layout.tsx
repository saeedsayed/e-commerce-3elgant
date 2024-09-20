import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
// import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import ShopProvider from "@/context/ShopContext";
import CartProvider from "@/context/CartContext";
import WishlistProvider from "@/context/WishlistContext";
import AuthProvider from "@/context/AuthProvider";
import InternetChecker from "@/components/common/InternetChecker";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "3elegant | Home",
    template: "3elegant | %s ",
  },
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <ShopProvider>
            <WishlistProvider>
              <CartProvider>
                <NavBar />
                <Toaster
                  position="top-left"
                  toastOptions={{
                    duration: 5000,
                    className: "text-xl sm:text-2xl font-semibold",
                  }}
                />
                {children}
                <Footer />
              </CartProvider>
            </WishlistProvider>
          </ShopProvider>
        </AuthProvider>
        <InternetChecker />
      </body>
    </html>
  );
}
