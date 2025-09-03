// Content management for fast publishing
const content = {
    posts: [
        {
            title: "Getting Started with AI Projects",
            date: "2025-01-15",
            excerpt: "My journey into building AI applications and what I've learned so far.",
            link: "posts/getting-started-ai.html"
        }
    ],
    projects: [
        {
            title: "AI Chat Assistant",
            description: "A simple chat interface powered by AI APIs",
            link: "projects/chat-assistant/",
            demo: "projects/chat-assistant/demo.html"
        }
    ]
};

function renderPosts() {
    const postGrid = document.querySelector('.post-grid');
    if (!postGrid) return;
    
    postGrid.innerHTML = content.posts.map(post => `
        <div class="card">
            <h4>${post.title}</h4>
            <div class="date">${post.date}</div>
            <p>${post.excerpt}</p>
            <a href="${post.link}">Read more →</a>
        </div>
    `).join('');
}

function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;
    
    projectGrid.innerHTML = content.projects.map(project => `
        <div class="card">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div>
                <a href="${project.link}">View Project</a>
                ${project.demo ? ` | <a href="${project.demo}">Live Demo</a>` : ''}
            </div>
        </div>
    `).join('');
}

// Initialize content when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderProjects();
});

// Helper function to add new content quickly
function addPost(title, excerpt, filename = null) {
    const date = new Date().toISOString().split('T')[0];
    const link = filename || `posts/${title.toLowerCase().replace(/\s+/g, '-')}.html`;
    
    content.posts.unshift({
        title,
        date,
        excerpt,
        link
    });
    
    renderPosts();
    console.log(`Added post: ${title}`);
}

function addProject(title, description, folder = null) {
    const link = folder || `projects/${title.toLowerCase().replace(/\s+/g, '-')}/`;
    
    content.projects.unshift({
        title,
        description,
        link,
        demo: `${link}demo.html`
    });
    
    renderProjects();
    console.log(`Added project: ${title}`);
}