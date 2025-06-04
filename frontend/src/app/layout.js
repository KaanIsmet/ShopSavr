import { Inter } from "next/font/google";
import "./globals.css";
import "../style/style.css"

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
})

export const metadata = {
  title: "Shop.Savr",
  description: "Save money while shopping with our mobile app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
