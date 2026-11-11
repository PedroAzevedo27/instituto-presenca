import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instituto Presença — Presente na vida de toda criança",
  description:
    "O Instituto Presença é uma organização sem fins lucrativos que promove o desenvolvimento humano e social de crianças, adolescentes e jovens por meio da educação, do esporte e da assistência social.",
  keywords: [
    "instituto presença",
    "ONG",
    "educação",
    "esporte",
    "assistência social",
    "crianças",
    "jovens",
    "doação",
    "voluntário",
  ],
  openGraph: {
    title: "Instituto Presença",
    description: "Presente na vida de toda criança",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
