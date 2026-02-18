'use client'

import { useState } from 'react'

interface NewsletterProps {
  variant?: 'default' | 'compact'
  title?: string
  description?: string
  source?: string
}

export default function Newsletter({
  variant = 'default',
  title = "Stay Updated",
  description = "Get notified when I publish new posts about career, constraints, and finding clarity in tech.",
  source = 'Unknown'
}: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for subscribing! You\'ll hear from me when I publish new posts.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${variant === 'compact' ? 'text-center' : ''}`}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">{message}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-6 ${variant === 'compact' ? 'text-center' : ''}`}>
      <div className={variant === 'compact' ? 'space-y-4' : 'space-y-4'}>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3">
            <p className="text-sm text-red-800">{message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className={variant === 'compact' ? 'space-y-3' : 'flex space-x-3'}>
          <div className={variant === 'compact' ? 'w-full' : 'flex-1'}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || !email}
            className={`px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${variant === 'compact' ? 'w-full' : 'flex-shrink-0'
              }`}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        <p className="text-xs text-gray-500">
          No spam, unsubscribe at any time. I typically publish 1-2 posts per month.
        </p>
      </div>
    </div>
  )
}