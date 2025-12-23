import Logo from './Logo'

interface LogoWithTextProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
}

export default function LogoWithText({ 
  className = '', 
  size = 'md',
  showTagline = false 
}: LogoWithTextProps) {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Logo size={size} />
      <div className="flex flex-col">
        <div className={`font-bold text-gray-900 ${textSizes[size]}`}>
          whole<span className="text-blue-600">cart</span>wheel
        </div>
        {showTagline && (
          <div className="text-xs text-gray-500 -mt-1">
            Career, Constraint, and Clarity
          </div>
        )}
      </div>
    </div>
  )
}