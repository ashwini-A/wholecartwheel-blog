import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Ashwini Writes
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Insights from life, data visualizations, and projects for my career portfolio
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/blog" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read Blog
          </Link>
          <Link 
            href="/projects" 
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View all posts →
          </Link>
        </div>
        
        {recentPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 mb-4">No posts yet. Ready to start writing?</p>
            <Link 
              href="/blog/new-post-template" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Create your first post →
            </Link>
          </div>
        )}
      </section>

      {/* Quick Stats or Featured Content */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">What You'll Find Here</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">Life Insights</h3>
              <p className="text-gray-600">Personal reflections and lessons learned</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Data Visualizations</h3>
              <p className="text-gray-600">Interactive charts and data stories</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Career Projects</h3>
              <p className="text-gray-600">Portfolio showcasing my work and experiments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}