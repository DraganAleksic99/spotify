import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import YourLibrary from "./components/YourLibrary";
import LeftsideFooter from "./components/LeftsideFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description:
    "Spotify - Web Player: Music for everyone. Preview of Spotify. Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed. Sign up free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen p-2">
          <div className="main h-[90%] rounded-lg flex gap-2">
            <div className="secondary w-[23%] h-full">
              <Navigation />
              <YourLibrary />
              <LeftsideFooter />
            </div>
            <div className="primary w-[77%] rounded-lg bg-[#121212]">
              {children}
            </div>
          </div>
          <div className="flex justify-between pl-[15px] py-2 pr-[24px] bg-red-700 h-[9%] mt-2 bg-gradient-to-r from-[#af2896] to-[#509bf5] text-[14px]">
            <div className="mt-1">
              <p className="font-bold">Preview of Spotify</p>
              <p className="text-base">
                Sign up to get unlimited songs and podcasts with occasional ads.
                No credit card needed.
              </p>
            </div>
            <div>
              <button className="bg-white text-black h-full rounded-full">
                <span className="py-2 px-8 font-bold text-base">
                  Sign up for free
                </span>
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
