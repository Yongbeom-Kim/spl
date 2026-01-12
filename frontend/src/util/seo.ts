interface SeoMetaConfig {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
  type?: 'website' | 'article'
  noIndex?: boolean
}

export const generateSeoMeta = (config: SeoMetaConfig) => {
  const baseUrl = 'https://senpailearn.org'
  const fullUrl = `${baseUrl}${config.path}`
  const defaultImage = `${baseUrl}/logo_rounded_rectangle.webp`

  const meta: any[] = [
    { name: 'description', content: config.description },
    { name: 'keywords', content: config.keywords?.join(', ') || '' },
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:type', content: config.type || 'website' },
    { property: 'og:url', content: fullUrl },
    { property: 'og:image', content: config.image || defaultImage },
    { property: 'og:site_name', content: 'SenpaiLearn | Fung Lab' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description },
    { name: 'twitter:image', content: config.image || defaultImage },
    {title: config.title},
  ]

  if (config.noIndex) {
    meta.push({ name: 'robots', content: 'noindex, nofollow' })
  }

  return {
    meta,
    links: [
      {
        rel: 'canonical',
        href: fullUrl,
      },
    ],
  }
}
