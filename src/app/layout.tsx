import "./globals.css";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import Nav from "./components/Nav";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | UWT - Your Most Trusted Writing Tutors',
    default: 'UWT - Your Most Trusted Writing Tutors',
  },
  description: "For College and Graduate School Application Essays.",
  url: "https://uwt-reading.vercel.app/",
  siteName: "UWT Reading",
  canonical: "https://uwt-reading.vercel.app/",
  openGraph: {
    title: "UWT - Your Most Trusted Writing Tutors",
    description: "For College and Graduate School Application Essays.",
    url: "https://uwt-reading.vercel.app/",
    siteName: "UWT Reading",
    images: [
      {
        url: "/images/ogp.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="pt-[5rem] bg-background">{children}</div>
      </body>
    </html>
  );
}
