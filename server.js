const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route to serve markdown resume for AI agents
// Route to serve markdown resume for AI agents
app.get('/md', (req, res) => {
    const mdPath = path.join(__dirname, 'resume.md');
    const userAgent = req.get('User-Agent') || '';

    // Check if request is from a browser (not curl or AI agent)
    const isBrowser = userAgent.includes('Mozilla') &&
        !userAgent.includes('curl') &&
        !userAgent.includes('bot') &&
        !userAgent.includes('agent');

    // If browser, serve the HTML page
    if (isBrowser && req.accepts('html')) {
        return res.sendFile(path.join(__dirname, 'md.html'));
    }

    // Otherwise, serve raw markdown
    if (fs.existsSync(mdPath)) {
        const markdown = fs.readFileSync(mdPath, 'utf8');

        // Set appropriate headers for markdown
        res.setHeader('Content-Type', 'text/markdown; charset=utf-8');

        // Optional: Add headers to make it more AI-agent friendly
        res.setHeader('X-Content-Type', 'resume/markdown');
        res.setHeader('X-Author', 'Roki Roy');
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow CORS for AI agents

        res.send(markdown);
    } else {
        res.status(404).send('Markdown resume not found');
    }
});

// Route to serve JSON version (bonus for structured data)
app.get('/json', (req, res) => {
    const resumeData = {
        name: "Roki Roy",
        contact: {
            location: "Siliguri",
            email: "rokiroydev@gmail.com",
            phone: "+91 9800 881 300",
            website: "https://royroki.github.io/wowfy",
            linkedin: "https://linkedin.com/in/rokiroy",
            github: "https://github.com/royroki"
        },
        summary: "Full-stack developer with hands-on experience shipping production Flutter, React, and Golang systems. Strong in clean architecture, backend performance optimization, and real-world app delivery (web, mobile, Apple Watch).",
        experience: [
            {
                title: "SDE 1",
                company: "Fordel Studios",
                location: "Onsite",
                period: "Feb 2025 – Present",
                url: "https://Fordelstudios.com/",
                highlights: [
                    "Led end-to-end Flutter app development using clean architecture, supporting 5,000+ active users with 98% crash-free sessions",
                    "Coordinated cross-functional teams (design, backend, QA) across multiple initiatives to deliver features on schedule using Agile workflows",
                    "Designed and implemented Golang backend services, reducing API response time by 25% and improving system reliability",
                    "Optimized a React–Node.js e-commerce platform by integrating complex third-party APIs and reducing page load times by 30%",
                    "Developed and shipped an Apple Watch app in Swift, extending the product ecosystem to wearable platforms"
                ]
            },
            {
                title: "Full Stack Developer Intern",
                company: "Fordel Studios",
                location: "Onsite",
                period: "Aug 2024 – Jan 2025",
                url: "https://Fordelstudios.com/",
                highlights: [
                    "Optimized backend APIs and database queries, improving data retrieval performance and supporting new frontend features",
                    "Participated in Agile sprints, code reviews, and bug triage, contributing production-ready fixes"
                ]
            }
        ],
        projects: [
            {
                name: "ZenliAI – AI-Powered Content Generation Platform",
                description: "Built full-stack platform enabling users to generate eBooks, SVG, clipart, and SEO content with integrated Pinterest automation for pin upload",
                highlights: [
                    "Architected complex backend in Golang with GenAI API integration and S3 for asset storage"
                ],
                stack: ["Golang", "React", "GenAI APIs", "AWS S3", "Pinterest API"]
            },
            {
                name: "BattleManager – Tournament Management PWA",
                description: "Built a tournament management PWA with real-time updates and messaging using React, Firebase, and Capacitor",
                highlights: [
                    "Implemented real-time messaging system with Firebase for instant tournament updates and player communication"
                ]
            },
            {
                name: "LetsGo – Tag-Based Chatting App",
                url: "https://github.com/RoyRoki/LetsGo",
                description: "Built real-time chat app using Golang microservices",
                highlights: [
                    "Used gRPC + Protocol buffers for sub-200ms message latency"
                ],
                stack: ["Golang", "Microservices", "gRPC", "Protobuf", "Docker"]
            }
        ],
        technologies: {
            primary: ["Golang", "React", "Flutter", "PostgreSQL", "Docker"],
            secondary: ["Java (Spring Boot)", "JavaScript (ES6+)", "TypeScript", "Swift", "Firebase", "AWS", "gRPC"]
        },
        education: [
            {
                institution: "University of North Bengal",
                degree: "BCA (pursuing)",
                period: "Sept 2024 – May 2027"
            }
        ]
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow CORS for AI agents
    res.json(resumeData);
});

// Default route serves index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Resume server running at http://localhost:${PORT}`);
    console.log(`Markdown resume available at http://localhost:${PORT}/md`);
    console.log(`JSON resume available at http://localhost:${PORT}/json`);
});
