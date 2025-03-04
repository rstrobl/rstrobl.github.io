import type { Metadata } from "next";
import "./globals.css";

import NavBar from "../components/navbar";
import Link from "next/link";

import LinkedInIcon from '../components/icons/linkedin';
import GithubIcon from '../components/icons/github';
import MailIcon from '../components/icons/mail';

export const metadata: Metadata = {
  title: "Robert Strobl",
  description: "AI & Data. Product Development. Digital Strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="min-h-screen px-8 pt-8 container mx-auto">
          {children}
        </div>
        <footer className="flex flex-col gap-1 items-center justify-center py-20">
          <div className="flex flex-wrap gap-6 pb-10">
            <Link href="https://www.linkedin.com/in/robert-strobl/"><LinkedInIcon /></Link>
            <Link href="https://github.com/rstrobl"><GithubIcon /></Link>
            <Link href="mailto:mail@rstrobl.com"><MailIcon /></Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Robert Strobl
          </p>
          <p>
            <a href="/impressum">Imprint / Impressum</a>
          </p>
        </footer>
      </body>
    </html>
  );
}

