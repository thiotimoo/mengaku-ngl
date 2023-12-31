import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TimeAgo from 'javascript-time-ago'

const font = Gabarito({ subsets: ["latin"] });
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

export const metadata: Metadata = {
  title: "MengakuNGL",
  description: "Simple NGL created by @thiotimoo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className + ' min-h-screen flex flex-col bg-pattern'}>
        <Navbar />
        <div className="flex-grow flex justify-center items-center">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
