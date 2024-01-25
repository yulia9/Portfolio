import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuliya S. CV",
  description: "Yuliya Samuilik CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
      <footer className="flex items-center text-wenge text-sm justify-center pb-5 pt-2">
        <div>
          <div className="text-center m-1">
            I implemented this Portfolio app using technologies:
            <span className="font-bold ml-1">
              Next.js, TypeScript, React, Material UI, Tailwind CSS
            </span>
          </div>
          <div className="text-center">
            You can see the code
            <a href="https://github.com/yulia9/Portfolio" target="_blank" className="hover:text-crayola underline underline-offset-1 ml-1">
              on my github page
            </a>
          </div>
        </div>
      </footer>
    </html>
  );
}
