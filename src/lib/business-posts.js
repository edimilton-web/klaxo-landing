export const businessPosts = [
  {
    slug: 'quanto-gastam-pmes-portuguesas-software-2026',
    title: 'Quanto gastam as PMEs portuguesas em software em 2026',
    date: '1 de junho de 2026',
    readTime: '8 min leitura',
    description: 'Análise dos gastos reais em software nas PMEs portuguesas — ferramentas mais usadas, valores médios e onde está o desperdício.',
    category: 'Controlo de Custos',
    author: 'Eddie Reis',
    content: `## Em construção

Este artigo está a ser preparado. Volta em breve.`,
  },
]

export function getBusinessPostBySlug(slug) {
  return businessPosts.find((p) => p.slug === slug) || null
}
