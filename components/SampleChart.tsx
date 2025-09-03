'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function SampleChart() {
  const data = [
    { month: 'Jan', posts: 2 },
    { month: 'Feb', posts: 4 },
    { month: 'Mar', posts: 3 },
    { month: 'Apr', posts: 6 },
  ]

  return (
    <div className="my-8 p-4 border border-gray-200 rounded-lg">
      <h4 className="text-lg font-semibold mb-4">Blog Posts Over Time</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="posts" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}