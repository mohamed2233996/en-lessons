import { Merriweather } from "next/font/google";
import "./globals.css";


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
    <html lang="en">
      <body
        className={`${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
