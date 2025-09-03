export const metadata = {
  title: 'About - Ashwini Writes',
  description: 'Learn more about Ashwini and this blog',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        
        <div className="prose-custom">
          <p className="text-xl text-gray-600 mb-8">
            Welcome! I'm Ashwini, and this is where I share insights from life, 
            create data visualizations, and showcase projects for my career portfolio.
          </p>

          <h2>What I Write About</h2>
          <p>
            This blog covers three main areas that I'm passionate about:
          </p>
          
          <ul>
            <li><strong>Life Insights:</strong> Personal reflections, lessons learned, and thoughts on growth</li>
            <li><strong>Data Visualizations:</strong> Interactive charts, data stories, and analysis projects</li>
            <li><strong>Career Projects:</strong> Portfolio pieces, experiments, and technical learning</li>
          </ul>

          <h2>Why This Blog Exists</h2>
          <p>
            I created this space to document my journey and share what I learn along the way. 
            The focus is on regular, authentic updates rather than polished perfection.
          </p>

          <h2>The Technical Setup</h2>
          <p>
            This blog is built with Next.js, MDX, and Tailwind CSS, hosted on Vercel. 
            The setup prioritizes fast publishing and easy content creation, so I can focus 
            on writing rather than wrestling with technology.
          </p>

          <h2>Get in Touch</h2>
          <p>
            I'd love to connect! You can find me on:
          </p>
          
          <div className="flex space-x-6 mt-6">
            <a 
              href="https://github.com/ashwini-A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}