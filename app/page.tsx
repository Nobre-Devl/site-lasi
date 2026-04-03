// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-8 lg:py-24">
      <section className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        
        {/* --- Coluna da Esquerda: Textos (Inalterada) --- */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Inovação e <span className="text-purple-600">Tecnologia</span> em{" "}
            Sistemas de Informação
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-zinc-600">
            A LASI impulsiona o conhecimento em SI através de eventos, pesquisa e desenvolvimento de software.
          </p>
          <Link
            href="/sobre"
            className="rounded-md bg-purple-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/20 transition-all hover:-translate-y-1 hover:bg-purple-700"
          >
            LEIA MAIS
          </Link>
        </div>

        {/* --- Coluna da Direita: Composição Visual (Nova!) --- */}
        {/* O container pai precisa ser 'relative' para prender os elementos absolutos dentro dele */}
        <div className="relative mx-auto flex h-[400px] w-full max-w-[550px] items-center justify-center lg:h-[500px]">
          
          {/* Efeitos de Luz no Fundo (Glow) */}
          <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-purple-600/20 blur-[80px]"></div>
          <div className="absolute bottom-10 left-0 h-64 w-64 rounded-full bg-purple-600/20 blur-[80px]"></div>

          {/* Número "2" Gigante (Fundo) */}
          {/* Usamos classes arbitrárias do Tailwind [-webkit-text-stroke:...] para criar o contorno vazado */}
          <span className="absolute -left-2 top-16 z-10 text-[160px] font-black leading-none text-transparent [-webkit-text-stroke:3px_#9333ea] lg:-left-10 lg:text-[200px]">
            2
          </span>

          {/* Imagem Superior (Laboratório) */}
          <div className="absolute right-4 top-4 z-20 h-48 w-64 overflow-hidden rounded border-[4px] border-zinc-900 shadow-2xl lg:right-12 lg:h-64 lg:w-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
              alt="Alunos no laboratório da LASI"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Imagem Inferior (Código) */}
          <div className="absolute bottom-8 left-8 z-30 h-40 w-56 overflow-hidden rounded border-[4px] border-zinc-900 shadow-2xl lg:bottom-12 lg:left-12 lg:h-48 lg:w-72">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
              alt="Desenvolvimento de Software"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Número "4" Gigante (Frente) */}
          <span className="absolute -right-2 bottom-16 z-40 text-[160px] font-black leading-none text-transparent [-webkit-text-stroke:3px_#9333ea] lg:-right-6 lg:text-[200px]">
            6
          </span>

        </div>
      </section>
    </div>
  );
}