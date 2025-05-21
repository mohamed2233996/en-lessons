import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import ClientProvider from "./ClientProvider";


const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ["100","200","300","400", "700"],
  display: 'swap',
})


export const metadata = {
  title: "EN Tips & Tricks",
  description: "Sponsored by Miss Menna Elshemy❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ibmArabic.variable} antialiased bg-white dark:bg-dark`}>
        <ClientProvider>
          {children}
          </ClientProvider>
      </body>
    </html>
  );
}
