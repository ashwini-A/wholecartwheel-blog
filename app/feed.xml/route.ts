import { getAllPosts } from '@/lib/posts'

export async function GET() {
  const posts = await getAllPosts()
  const baseUrl = 'https://ashwiniwrites.com'
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ashwini Writes</title>
    <description>Insights, data visualizations, and career portfolio</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <managingEditor>ashwini@example.com (Ashwini A)</managingEditor>
    <webMaster>ashwini@example.com (Ashwini A)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      ${post.tags?.map(tag => `<category>${tag}</category>`).join('') || ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}