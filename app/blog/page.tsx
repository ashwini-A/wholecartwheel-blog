import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Newsletter from '@/components/Newsletter'

export const metadata = {
  title: 'Blog - Career, Constraint, and Clarity',
  description: 'Reflections on work, life, and building a sustainable path forward',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Reflections on work, life, and building a sustainable path forward
        </p>
      </div>

      {posts.length > 0 ? (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          
          {/* Newsletter subscription */}
          <div className="max-w-2xl mx-auto">
            <Newsletter 
              title="Never miss a post"
              description="Subscribe to get my latest thoughts on career transitions, work-life balance, and navigating tech as a human."
            />
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">No posts yet</h2>
          <p className="text-gray-600 mb-6">
            Ready to start writing? Create your first post in the content/posts directory.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto text-left">
            <h3 className="font-semibold mb-2">Quick start:</h3>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Create a file: <code className="bg-gray-200 px-1 rounded">content/posts/my-first-post.mdx</code></li>
              <li>2. Add frontmatter with title, date, and excerpt</li>
              <li>3. Write your content in Markdown</li>
              <li>4. Refresh this page to see your post</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  )
}