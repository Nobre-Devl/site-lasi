import React from "react";
import Link from "next/link";
import { CalendarDays, Network } from "lucide-react";

export function EventCard() {
  return (
    <div className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-white p-6 shadow-xl shadow-zinc-200/50 sm:p-8 lg:flex-row lg:items-center">
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-100 blur-[40px]"></div>

      {/* Ícone/Logo do Evento */}
      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 text-purple-600 shadow-sm">
        <Network className="h-10 w-10" />
      </div>

      {/* Conteúdo do Card */}
      <div className="relative flex flex-1 flex-col items-start gap-3">
        <h3 className="text-xl font-bold text-zinc-900 md:text-2xl">
          Próximo Evento: IntegraSI
        </h3>
        
        <div className="flex items-center gap-2 text-sm font-semibold text-purple-600">
          <CalendarDays className="h-4 w-4" />
          {/* Corrigir a data do seu design para fazer sentido cronológico */}
          <span>data do evento</span>
        </div>
        
        <p className="text-sm leading-relaxed text-zinc-600">
          O IntegraSI impulsiona o conhecimento em SI através de eventos, palestras e desenvolvimento de software.
        </p>
        
        <Link
          href="/integrasi"
          className="mt-2 rounded-md bg-purple-600 px-6 py-2 text-sm font-bold text-white shadow-md shadow-purple-600/20 transition-all hover:-translate-y-0.5 hover:bg-purple-700"
        >
          Inscreva-se
        </Link>
      </div>
    </div>
  );
}