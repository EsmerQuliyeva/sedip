"use client";
import "./global.css";
import { usePathname } from "next/navigation";
import Navbar from "./compoents/navbar/navbar";
import Footer from "./compoents/footer/Footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname === "register";
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`container ${manrope.className}`}>
        {!hideLayout && <Navbar />}
        <div className="wrapper">{children}</div>
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
