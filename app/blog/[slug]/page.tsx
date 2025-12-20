import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { components } from '@/components/mdx-components'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const url = `https://wholecartwheel.com/blog/${post.slug}`

  return {
    title: `${post.title} - Ashwini Writes`,
    description: post.excerpt,
    authors: [{ name: 'Ashwini A' }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Ashwini A'],
      url,
      siteName: 'Ashwini Writes',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@ashwini_aur', // Replace with your Twitter handle
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": "Ashwini A",
      "url": "https://wholecartwheel.com"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://wholecartwheel.com/blog/${post.slug}`
    },
    "publisher": {
      "@type": "Person",
      "name": "Ashwini A"
    },
    "keywords": post.tags?.join(", "),
    "articleSection": "Blog",
    "inLanguage": "en-US"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-600 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.readingTime && (
              <>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose-custom">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>
    </>
  )
}