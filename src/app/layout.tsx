import TopNavbar from "@/components/shared/Navbar/TopNavbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "./lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trendy Fashion",
  description: "Generated by trendy fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TopNavbar />
          <Navbar />
          <div className="min-h-screen pt-32">{children}</div>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
