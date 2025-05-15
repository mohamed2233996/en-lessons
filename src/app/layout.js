import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./_componant/Navbar";


const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight:["400","700","900"]
});

export const metadata = {
  title: "En Lessons",
  description: "Sponsored by Miss Menna Elshemy❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${merriweather.variable} antialiased bg-white dark:bg-dark`}>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
