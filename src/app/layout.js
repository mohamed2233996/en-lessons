import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./_componant/Navbar";
import ClientProvider from "./ClientProvider";



const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

export const metadata = {
  title: "EN Tips & Tricks",
  description: "Sponsored by Miss Menna Elshemy❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${merriweather.variable} antialiased bg-white dark:bg-dark`}>
        <ClientProvider>
          {children}
          </ClientProvider>
      </body>
    </html>
  );
}
