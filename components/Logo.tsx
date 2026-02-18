interface LogoProps {
    className?: string
    size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12'
    }

    return (
        <div className={`${sizes[size]} ${className}`}>
            <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Outer wheel */}
                <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-gray-700"
                />

                {/* Inner circle representing "whole" */}
                <circle
                    cx="20"
                    cy="20"
                    r="12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    className="text-blue-600"
                />

                {/* Spokes of the wheel */}
                <g className="text-gray-600">
                    <line x1="20" y1="2" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="20" y1="32" x2="20" y2="38" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="2" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="32" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1.5" />

                    {/* Diagonal spokes */}
                    <line x1="6.86" y1="6.86" x2="11.51" y2="11.51" stroke="currentColor" strokeWidth="1" />
                    <line x1="28.49" y1="28.49" x2="33.14" y2="33.14" stroke="currentColor" strokeWidth="1" />
                    <line x1="33.14" y1="6.86" x2="28.49" y2="11.51" stroke="currentColor" strokeWidth="1" />
                    <line x1="11.51" y1="28.49" x2="6.86" y2="33.14" stroke="currentColor" strokeWidth="1" />
                </g>

                {/* Center dot */}
                <circle
                    cx="20"
                    cy="20"
                    r="2"
                    fill="currentColor"
                    className="text-blue-600"
                />
            </svg>
        </div>
    )
}