import React from 'react'
import dynamic from 'next/dynamic'

type MDXComponents = {
  [key: string]: React.ComponentType<any>
}

// Dynamically import the chart component to avoid SSR issues
const SampleChart = dynamic(() => import('./SampleChart'), {
  ssr: false,
  loading: () => (
    <div className="my-8 p-4 border border-gray-200 rounded-lg">
      <h4 className="text-lg font-semibold mb-4">Blog Posts Over Time</h4>
      <div className="bg-gray-100 h-64 flex items-center justify-center rounded">
        <p className="text-gray-600">Loading chart...</p>
      </div>
    </div>
  )
})

// Callout component for highlighting important information
function Callout({ children, type = 'info' }: { children: React.ReactNode, type?: 'info' | 'warning' | 'success' }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    success: 'bg-green-50 border-green-200 text-green-800',
  }

  return (
    <div className={`p-4 border-l-4 rounded-r-lg my-6 ${styles[type]}`}>
      {children}
    </div>
  )
}

// Custom code block with syntax highlighting placeholder
function CodeBlock({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6" {...props}>
      <code className={className}>
        {children}
      </code>
    </pre>
  )
}

// Image component with caption
function ImageWithCaption({ src, alt, caption }: { src: string, alt: string, caption?: string }) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt} className="w-full rounded-lg shadow-lg" />
      {caption && (
        <figcaption className="text-center text-gray-600 text-sm mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export const components: MDXComponents = {
  // Override default HTML elements
  h1: (props) => <h1 className="text-3xl font-bold mb-6 text-gray-900" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800" {...props} />,
  h3: (props) => <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800" {...props} />,
  p: (props) => <p className="mb-4 leading-relaxed text-gray-700" {...props} />,
  ul: (props) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props) => <li className="text-gray-700" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6" {...props} />
  ),
  code: (props) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props} />
  ),
  pre: (props) => <CodeBlock {...props} />,

  // Custom components for MDX
  SampleChart,
  Callout,
  ImageWithCaption,
}