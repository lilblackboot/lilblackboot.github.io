import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,about,contacts,hero,projects,skills,stats
}: Readonly<{
  children: React.ReactNode;
  about: React.ReactNode;
  contacts: React.ReactNode;
  hero: React.ReactNode;
  projects: React.ReactNode;
  skills: React.ReactNode;
  stats: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={` ${montserrat.variable} bg-black  antialiased`}
      >
        {children}
        {hero}
        {about}
        {skills}
        {projects}
        {stats}
        {contacts}
      </body>
    </html>
  );
}
