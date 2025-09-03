#!/usr/bin/env node

// Quick publishing script for fast content creation
const fs = require('fs');
const path = require('path');

function createPost(title, content = '') {
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const date = new Date().toISOString().split('T')[0];
    const filename = `posts/${slug}.html`;
    
    // Read template
    const template = fs.readFileSync('posts/template.html', 'utf8');
    
    // Replace placeholders
    const html = template
        .replace('Your Post Title Here', title)
        .replace('January 15, 2025', new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }))
        .replace('Start writing your content here. This template makes it easy to publish new posts quickly.', content || 'Start writing your content here.');
    
    // Write file
    fs.writeFileSync(filename, html);
    
    // Update content in script.js
    updateContentList('posts', {
        title,
        date,
        excerpt: content.substring(0, 150) + (content.length > 150 ? '...' : ''),
        link: filename
    });
    
    console.log(`✅ Created post: ${filename}`);
    return filename;
}

function createProject(title, description = '') {
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const projectDir = `projects/${slug}`;
    
    // Create directory
    if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir, { recursive: true });
    }
    
    // Read template
    const template = fs.readFileSync('projects/template/index.html', 'utf8');
    
    // Replace placeholders
    const html = template
        .replace(/Project Name/g, title)
        .replace('Brief description of what this AI project does', description || 'AI project description');
    
    // Write files
    fs.writeFileSync(`${projectDir}/index.html`, html);
    
    // Create demo file
    const demoHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} Demo</title>
    <link rel="stylesheet" href="../../styles.css">
</head>
<body>
    <header>
        <nav>
            <h1><a href="../../index.html">Your Domain</a></h1>
        </nav>
    </header>
    <main style="max-width: 800px; margin: 0 auto; padding: 2rem;">
        <h1>${title} Demo</h1>
        <p>Interactive demo interface goes here</p>
        <a href="index.html">← Back to project</a>
    </main>
</body>
</html>`;
    
    fs.writeFileSync(`${projectDir}/demo.html`, demoHtml);
    
    // Update content list
    updateContentList('projects', {
        title,
        description: description || 'AI project description',
        link: `${projectDir}/`,
        demo: `${projectDir}/demo.html`
    });
    
    console.log(`✅ Created project: ${projectDir}/`);
    return projectDir;
}

function updateContentList(type, item) {
    const scriptPath = 'script.js';
    let script = fs.readFileSync(scriptPath, 'utf8');
    
    // Find the content object and add new item
    const regex = new RegExp(`(${type}:\\s*\\[)`, 'g');
    const replacement = `$1\n        ${JSON.stringify(item, null, 8).replace(/\n/g, '\n        ')},`;
    
    script = script.replace(regex, replacement);
    fs.writeFileSync(scriptPath, script);
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];

if (command === 'post') {
    const title = args[1];
    const content = args.slice(2).join(' ');
    if (!title) {
        console.log('Usage: node quick-publish.js post "Post Title" "Optional content"');
        process.exit(1);
    }
    createPost(title, content);
} else if (command === 'project') {
    const title = args[1];
    const description = args.slice(2).join(' ');
    if (!title) {
        console.log('Usage: node quick-publish.js project "Project Title" "Optional description"');
        process.exit(1);
    }
    createProject(title, description);
} else {
    console.log('Usage:');
    console.log('  node quick-publish.js post "Post Title" "Content"');
    console.log('  node quick-publish.js project "Project Title" "Description"');
}

module.exports = { createPost, createProject };