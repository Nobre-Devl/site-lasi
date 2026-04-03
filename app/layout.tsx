import type { Metadata } from "next";
import { Header } from "../components/layout/header"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "LASI - Liga Acadêmica de Sistemas de Informação",
  description: "Inovação e Tecnologia em Sistemas de Informação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased">
        <Header />
        <main className="flex flex-1 flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}