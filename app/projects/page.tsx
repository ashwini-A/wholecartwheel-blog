export const metadata = {
  title: 'Projects - Ashwini Writes',
  description: 'Career portfolio and project showcase',
}

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard built with React and D3.js for exploring complex datasets.',
      tech: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
      status: 'In Progress',
      link: '#',
    },
    {
      title: 'Blog Analytics Tool',
      description: 'Tool to analyze blog performance and reader engagement patterns.',
      tech: ['Next.js', 'Recharts', 'Vercel Analytics'],
      status: 'Planning',
      link: '#',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-600">
          A showcase of my work, experiments, and learning journey
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                project.status === 'In Progress' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.link}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h2>
        <p className="text-gray-600 mb-6">
          I'm constantly working on new projects and experiments. Check back regularly for updates!
        </p>
        <a 
          href="https://github.com/ashwini-A" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  )
}