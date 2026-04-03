import type { Metadata } from "next";
import { Header } from "../components/layout/header"; 
import { Footer } from "../components/layout/footer";
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
      {/* 2. Adicionei flex e flex-col no body para organizar o Header, Main e Footer em coluna */}
      <body className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 antialiased">
        <Header />
        
        {/* 3. O flex-1 faz o main crescer e empurrar o Footer para o fundo da tela */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* 4. Nosso novo Footer! */}
        <Footer />
      </body>
    </html>
  );
}