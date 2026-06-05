# Prompt — Claude Code: Infraestrutura Blog business.klaxo.app/blog

Trabalha de forma autónoma. Não faças perguntas. Implementa tudo e faz deploy.

---

## CONTEXTO

Repositório: klaxo-landing (business.klaxo.app)
Stack: Next.js App Router + TypeScript + Tailwind CSS
Objetivo: criar a infraestrutura completa do blog em /blog
O blog vive em subdiretório — NÃO em subdomínio. Crítico para SEO.

---

## DEPENDÊNCIAS

```bash
npm install next-mdx-remote gray-matter reading-time
npm install @vercel/og
npm install -D @types/mdx
```

---

## ESTRUTURA DE PASTAS

```
app/
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       ├── page.tsx
│       └── opengraph-image.tsx
content/
└── blog/
    └── .gitkeep
lib/
└── blog.ts
components/
└── blog/
    └── CtaBox.tsx
```

---

## lib/blog.ts

```ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  author: string
  readingTime: number
  featured: boolean
  published: boolean
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data, content } = matter(raw)
      return {
        ...data,
        slug: data.slug || file.replace('.mdx', ''),
        readingTime: Math.ceil(readingTime(content).minutes),
        content,
      } as BlogPost
    })
    .filter(p => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find(p => p.slug === slug) || null
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(p => p.category === category)
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(p => p.featured).slice(0, 3)
}
```

---

## FRONTMATTER DE CADA ARTIGO

```mdx
---
title: "Título do artigo"
description: "Descrição SEO — máximo 160 caracteres"
slug: "slug-do-artigo"
date: "2026-06-01"
category: "controlo-custos"
author: "Eddie Reis"
readingTime: 8
featured: false
published: true
---
```

Categorias:
- controlo-custos
- ferramentas-comparativos
- gestao-equipas
- mercado-saas-europeu

---

## app/blog/page.tsx

Página de listagem com:
- Hero: "Blog — Gestão de Software para PMEs"
- Filtros por categoria (pills clicáveis)
- Grid 2 colunas (1 mobile) de cards de artigos
- Card: badge categoria + título + descrição + data + tempo leitura
- Empty state quando sem artigos
- Metadata SEO completo

Cores dos badges por categoria:
- controlo-custos → #5856D6
- ferramentas-comparativos → #3B82F6
- gestao-equipas → #10B981
- mercado-saas-europeu → #F59E0B

---

## app/blog/[slug]/page.tsx

Estrutura:
- Breadcrumb: Blog → Categoria → Título
- Header: badge + H1 + descrição + autor + data + tempo leitura
- Conteúdo MDX com classe .prose
- CtaBox após o conteúdo
- Artigos relacionados (mesma categoria, máx 3)
- Botões partilha: LinkedIn, WhatsApp, copiar link

Metadata dinâmica + generateStaticParams com getAllPosts().

---

## app/blog/[slug]/opengraph-image.tsx

OG image 1200x630 gerada via @vercel/og:
- Fundo: #09090B
- Logo K em quadrado #5856D6
- "Klaxo Business" ao lado
- Badge da categoria
- Título do artigo em branco, grande
- "business.klaxo.app/blog" no rodapé em #71717A

---

## ESTILOS PROSE (adicionar a globals.css)

```css
.prose { color: var(--text); max-width: 680px; line-height: 1.75; }
.prose h2 { font-size: 1.5rem; font-weight: 600; margin: 2rem 0 1rem; color: var(--text); letter-spacing: -0.02em; }
.prose h3 { font-size: 1.2rem; font-weight: 500; margin: 1.5rem 0 0.75rem; color: var(--text); }
.prose p { margin-bottom: 1.25rem; color: var(--muted); font-weight: 300; }
.prose strong { color: var(--text); font-weight: 500; }
.prose ul, .prose ol { margin: 1rem 0 1.25rem 1.5rem; color: var(--muted); }
.prose li { margin-bottom: 0.5rem; font-weight: 300; }
.prose blockquote { border-left: 3px solid var(--primary); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--primary-15); border-radius: 0 var(--radius) var(--radius) 0; color: var(--text); font-style: italic; }
.prose table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.875rem; }
.prose th { background: var(--surface-2); padding: 10px 14px; text-align: left; font-weight: 500; color: var(--text); border-bottom: 1px solid var(--border); }
.prose td { padding: 10px 14px; border-bottom: 1px solid var(--border); color: var(--muted); }
.prose code { background: var(--surface-2); border: 1px solid var(--border); border-radius: 4px; padding: 2px 6px; font-family: var(--mo); font-size: 0.85em; color: var(--primary); }
.prose a { color: var(--primary); text-decoration: underline; text-underline-offset: 3px; }
```

---

## components/blog/CtaBox.tsx

Caixa CTA que aparece no fim de cada artigo:
- Fundo: var(--primary-15) + border var(--primary-ring)
- Título: "Descobre quanto a tua empresa gasta em software"
- Sub: "Entra na lista de espera e garante 3 meses grátis com o coupon EARLYACCESS. Apenas para os primeiros 50 utilizadores."
- Botão primário → https://form.typeform.com/to/FClmuFNN
- Nota: "Sem cartão · Trial 14 dias · Desenvolvido em Portugal"

---

## SITEMAP

Atualizar app/sitemap.ts para incluir:
- /blog (priority 0.8, weekly)
- /blog/[slug] para cada artigo publicado (priority 0.7, monthly)

---

## ARTIGO DE TESTE

Criar content/blog/quanto-gastam-pmes-portuguesas-software-2026.mdx:

```mdx
---
title: "Quanto gastam as PMEs portuguesas em software em 2026"
description: "Análise dos gastos reais em software nas PMEs portuguesas — ferramentas mais usadas, valores médios e onde está o desperdício."
slug: "quanto-gastam-pmes-portuguesas-software-2026"
date: "2026-06-01"
category: "controlo-custos"
author: "Eddie Reis"
readingTime: 8
featured: true
published: true
---

## Em construção

Este artigo está a ser preparado. Volta em breve.
```

---

## APÓS IMPLEMENTAR

1. git add -A
2. git commit -m "feat: infraestrutura blog MDX com OG images, estilos prose e CtaBox"
3. git push
4. Cloudflare → Purge Everything → business.klaxo.app
5. Confirmar business.klaxo.app/blog acessível
6. Confirmar OG image em /blog/quanto-gastam-pmes-portuguesas-software-2026
