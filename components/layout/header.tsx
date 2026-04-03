import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        
        {/* 1. Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-900">
          LASI
        </Link>

        {/* 2. Barra de Pesquisa (Mockup visual) */}
        <div className="hidden flex-1 items-center justify-center px-8 lg:flex">
          <div className="flex w-full max-w-md items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600">
            <Search className="mr-2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="w-full bg-transparent text-zinc-900 outline-none placeholder:text-zinc-400"
            />
            <div className="ml-2 flex items-center border-l border-zinc-200 pl-3">
              <span className="cursor-pointer text-xs font-medium text-zinc-600 hover:text-zinc-900">
                Projetos ▾
              </span>
            </div>
          </div>
        </div>

        {/* 3. Navegação e Botões */}
        <div className="flex items-center gap-6">
          
          {/* Menu de Links */}
          <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
            <Link href="/" className="text-purple-600 transition-colors">
              Início
            </Link>
            <Link href="/historia" className="text-zinc-600 transition-colors hover:text-purple-600">
              História
            </Link>
            <Link href="/integrasi" className="text-zinc-600 transition-colors hover:text-purple-600">
              IntegraSI
            </Link>
            <Link href="/loja" className="text-zinc-600 transition-colors hover:text-purple-600">
              Loja
            </Link>
          </nav>

          {/* Botões de Autenticação */}
          <div className="flex items-center gap-3">
            <Link 
              href="/login" 
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              Entrar
            </Link>
            <Link 
              href="/cadastro" 
              className="rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-700"
            >
              Cadastre-se
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}