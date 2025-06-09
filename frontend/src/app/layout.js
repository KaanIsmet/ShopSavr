import { Inter } from "next/font/google";
import "./globals.css";
import "../style/style.css"
import { SmoothScrolling } from "@/components/smooth_scroll";

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
      <body>
          {children}
      </body>
    </html>
  );
}
