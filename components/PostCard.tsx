import Link from 'next/link'
import { Post } from '@/lib/posts'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
      </Link>
      
      <div className="flex items-center text-sm text-gray-500 mb-3">
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
      
      {post.excerpt && (
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      )}
      
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}