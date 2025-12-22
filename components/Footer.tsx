export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Career, Constraint, and Clarity. Built with Next.js.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/ashwini-A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="/rss.xml" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}