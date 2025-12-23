interface TextLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function TextLogo({ className = '', size = 'md' }: TextLogoProps) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl', 
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  return (
    <div className={`font-bold ${sizes[size]} ${className}`}>
      <span className="text-gray-900">whole</span>
      <span className="text-blue-600">cart</span>
      <span className="text-gray-900">wheel</span>
    </div>
  )
}