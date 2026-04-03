This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### 🧭 Navegação

- **Componente Header:** Implementado com Flexbox para distribuir Logotipo, Barra de Pesquisa (Mockup) e Menu Principal.
- **Roteamento:** Utiliza o componente `<Link>` do Next.js para Client-Side Routing, garantindo alta performance sem recarregar a página.
- **Responsividade Inicial:** Elementos não essenciais (como a barra de pesquisa completa) são ocultados em dispositivos móveis para preservar a usabilidade.

### 🦸 Hero Section

- **Layout Dinâmico:** Implementado utilizando CSS Grid para criar uma divisão visual clara entre o conteúdo textual (esquerda) e os elementos gráficos (direita), adaptando-se para coluna única em dispositivos móveis.
- **Tipografia:** Uso da paleta de cores para destacar palavras-chave no `h1`, guiando a leitura do usuário.
- **Microinterações:** Botão de Call-to-Action (CTA) com efeitos de sombra difusa e translação no eixo Y para feedback tátil (hover states).