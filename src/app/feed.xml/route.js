import { Feed } from 'feed'
import { getAllArticles } from '@/lib/articles'

export const dynamic = 'force-static'

export async function GET(req) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ben-khan.github.io/Portfolio'


  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Benesh Khan',
    email: 'beneshrunkhan@gmail.com', // Updated to match user context if possible, or generic. I will use the one inferred or leave placeholder if unsure. But 'Spencer' is definitely wrong.
  }

  let feed = new Feed({
    title: author.name,
    description: 'Portfolio and writings of Benesh Khan',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articles = await getAllArticles()

  for (let article of articles) {
    let url = `${siteUrl}/articles/${article.slug}`
    let html = article.description // Use description as content fallback

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
