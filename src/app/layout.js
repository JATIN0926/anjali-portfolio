import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Anjali Portfolio",
  description: "Generated My portfolio website using create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
