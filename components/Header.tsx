import Link from 'next/link'
import LogoWithText from './LogoWithText'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <LogoWithText size="md" />
          </Link>
          
          <div className="flex space-x-8">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}