import React from "react";
// Vamos usar o ícone de camiseta como placeholder das fotos
import { Shirt } from "lucide-react";

// Aqui simulamos uma "mini base de dados" de produtos
const products = [
  { id: 1, name: "Camiseta LASI Tech", price: "R$ 49,90" },
  { id: 2, name: "Moletom LASI Pro", price: "R$ 119,90" },
  { id: 3, name: "Camiseta LASI Tech", price: "R$ 49,90" },
  { id: 4, name: "Moletom LASI Pro", price: "R$ 119,90" },
];

export function ShopShowcase() {
  return (
    <div className="flex w-full flex-col gap-6">
      <h3 className="text-2xl font-bold text-zinc-900">Vitrine da Loja</h3>
      
      {/* Grid da loja: 2 colunas no celular, 4 colunas no computador (lg) */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        
        {/* O .map() percorre nossa lista de produtos e cria um card para cada um */}
        {products.map((product) => (
          // O 'group' aqui é um truque do Tailwind para fazer hover em elementos filhos
          <div 
            key={product.id}
            className="group flex flex-col items-center justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10"
          >
            {/* Placeholder da Imagem da Roupa */}
            <div className="mb-4 flex h-32 w-full items-center justify-center rounded-lg bg-zinc-50 transition-colors group-hover:bg-purple-50">
              <Shirt className="h-12 w-12 text-zinc-300 transition-colors group-hover:text-purple-600" />
            </div>
            
            {/* Informações do Produto */}
            <div className="flex w-full flex-col gap-2">
              <span className="text-sm font-semibold text-zinc-900 lg:text-base line-clamp-1">
                {product.name}
              </span>
              
              <div className="flex w-full items-center justify-between">
                <span className="text-sm font-bold text-zinc-600">
                  {product.price}
                </span>
                
                {/* Botão Adicionar */}
                <button className="rounded bg-zinc-100 px-3 py-1.5 text-xs font-bold text-zinc-900 transition-colors hover:bg-purple-600 hover:text-white">
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}