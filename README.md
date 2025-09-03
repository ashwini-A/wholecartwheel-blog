# Ashwini Writes - Next.js Blog

A modern blog built with Next.js, optimized for regular content updates and data visualizations.

## Features

- **Fast Publishing**: Write in MDX with React components
- **Data Visualizations**: Built-in Recharts integration
- **Responsive Design**: Tailwind CSS for all devices
- **SEO Optimized**: Automatic metadata and sitemap generation
- **Free Hosting**: Optimized for Vercel deployment

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Create your first post:**
   Create a file at `content/posts/my-first-post.mdx`:
   ```mdx
   ---
   title: "My First Post"
   date: "2025-01-15"
   excerpt: "This is my first blog post!"
   tags: ["first-post", "blogging"]
   ---

   # Hello World

   This is my first post using MDX!
   ```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects showcase
│   └── about/             # About page
├── components/            # Reusable components
├── content/               # Blog posts and content
│   └── posts/            # MDX blog posts
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Writing Posts

Posts are written in MDX format in the `content/posts/` directory. Each post needs frontmatter:

```mdx
---
title: "Your Post Title"
date: "2025-01-15"
excerpt: "Brief description of your post"
tags: ["tag1", "tag2"]
published: true
---

Your content here...
```

## Data Visualizations

Use Recharts components directly in your MDX:

```mdx
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={yourData}>
    <XAxis dataKey="name" />
    <YAxis />
    <Line type="monotone" dataKey="value" stroke="#2563eb" />
  </LineChart>
</ResponsiveContainer>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically on every push

### Other Platforms

This is a standard Next.js app and works with:
- Netlify
- Cloudflare Pages  
- Any Node.js hosting

## Customization

- **Styling**: Edit `app/globals.css` and Tailwind classes
- **Components**: Add new MDX components in `components/mdx-components.tsx`
- **Layout**: Modify `app/layout.tsx` and component files
- **Content**: Update metadata in layout files

## Performance

- Automatic image optimization
- Static generation for blog posts
- Optimized for Core Web Vitals
- Fast builds with Next.js 14

## License

MIT License - feel free to use this as a template for your own blog!