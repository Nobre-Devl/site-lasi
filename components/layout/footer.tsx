import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 py-8 text-zinc-300">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:px-8 lg:flex-row">
        
        {/* Esquerda: Logo da LASI */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-white">
            LASI
          </span>
        </div>

        {/* Centro: Redes Sociais */}
        <div className="flex items-center gap-4">
          <Link href="#" className="rounded-md bg-purple-600 p-2 text-white transition-transform hover:scale-110 hover:bg-purple-500">
            <FaInstagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="rounded-md bg-purple-600 p-2 text-white transition-transform hover:scale-110 hover:bg-purple-500">
            <FaFacebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="rounded-md bg-purple-600 p-2 text-white transition-transform hover:scale-110 hover:bg-purple-500">
            <FaLinkedin className="h-5 w-5" />
          </Link>
        </div>

        {/* Direita: Links de Navegação */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-purple-400">
            Início
          </Link>
          <Link href="/historia" className="transition-colors hover:text-purple-400">
            História
          </Link>
          <Link href="/integrasi" className="transition-colors hover:text-purple-400">
            IntegraSI
          </Link>
          <Link href="/contact" className="transition-colors hover:text-purple-400">
            Contact
          </Link>
        </nav>

      </div>
    </footer>
  );
}