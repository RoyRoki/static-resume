# Static Resume - Professional Resume Website

**Type:** Node.js/Express Static Site  
**Status:** 🟢 Production Ready  
**Stack:** Node.js, Express, LaTeX, HTML/CSS, GitHub Actions

---

## Project Overview

A professional resume website with multiple specialized variants and AI-agent-friendly endpoints.

**Key Features:**
- **LaTeX Resume Compilation** - Professional PDFs via GitHub Actions
- **Multiple Resume Variants** - App Dev, Backend, DevOps, Web Dev
- **AI-Friendly Endpoints** - `/md` (markdown) and `/json` (structured data)
- **Auto-Download Page** - Beautiful HTML page for resume distribution
- **GitHub Pages Deployment** - Automated CI/CD pipeline

---

## Project Structure

```
static-resume/
├── server.js              # Express server (port 3001)
├── index.html             # Main landing page
├── md.html                # Markdown resume viewer
│
├── resume.tex             # General purpose resume (LaTeX)
├── resume-app.tex         # App developer variant
├── resume-backend.tex     # Backend developer variant
├── resume-devops.tex      # DevOps engineer variant  
├── resume-web.tex         # Web developer variant
│
├── resume.md              # Markdown resume for AI agents
├── resume.json            # Structured resume data
│
├── about/index.html       # About page
├── app/index.html         # App dev resume page
├── backend/index.html     # Backend resume page
├── devops/index.html      # DevOps resume page
├── web/index.html         # Web dev resume page
│
└── .github/workflows/     # GitHub Actions for LaTeX compilation
```

---

## Tech Stack

**Core:**
- Node.js + Express (server)
- HTML/CSS (static pages)
- LaTeX (resume compilation)

**Deployment:**
- GitHub Actions (LaTeX→PDF compilation)
- GitHub Pages (hosting)

**Resume Formats:**
- LaTeX → PDF (professional)
- Markdown (AI agents)
- JSON (structured data)

---

## API Endpoints

### `/` - Main Landing Page
Serves the primary resume download page

### `/md` - Markdown Resume
- **Browsers:** Serves `md.html` (formatted viewer)
- **AI Agents/curl:** Returns raw markdown
- Headers: `Content-Type: text/markdown`
- CORS enabled for AI access

### `/json` - Structured Data
Returns complete resume as structured JSON
- Contact info
- Experience (2 roles at Fordel Studios)
- Projects (ZenliAI, BattleManager, LetsGo)
- Technologies (Golang, React, Flutter, etc.)
- Education

### Variant Pages
- `/app/` - App developer resume
- `/backend/` - Backend developer resume
- `/devops/` - DevOps engineer resume
- `/web/` - Web developer resume

---

## Resume Content Summary

**Name:** Roki Roy  
**Role:** Full-Stack Developer  
**Location:** Sili guri  
**Current Position:** SDE 1 @ Fordel Studios (Feb 2025 - Present)

**Key Technologies:**
- **Primary:** Golang, React, Flutter, PostgreSQL, Docker
- **Secondary:** Java (Spring Boot), TypeScript, Swift, Firebase, AWS, gRPC

**Notable Projects:**
1. **ZenliAI** - AI content generation (Golang, React, AWS S3)
2. **BattleManager** - Tournament management PWA (React, Firebase)
3. **LetsGo** - Real-time chat with gRPC (Golang microservices)

---

## Development

**Start Server:**
```bash
npm start
# or
npm run dev
```

**Server runs on:** `http://localhost:3001`

**Available Routes:**
- `http://localhost:3001/` - Landing page
- `http://localhost:3001/md` - Markdown resume
- `http://localhost:3001/json` - JSON resume

---

## Deployment

**Automated via GitHub Actions:**
1. Push to main branch
2. GitHub Actions compiles LaTeX → PDF
3. Deploys to GitHub Pages
4. Live site updated automatically

---

## Next Tasks

- [ ] Update resume content (currently has outdated info)
- [ ] Add new projects to resume.json
- [ ] Update LaTeX templates with latest experience
- [ ] Improve landing page design
- [ ] Add analytics tracking
- [ ] SEO optimization

---

## Notes

- **Port:** 3001 (to avoid conflicts with Next.js on 3000)
- **Resume Variants:** Tailored for different job applications
- **AI-Friendly:** Special endpoints for AI agents to read resume
- **Auto-Deploy:** GitHub Actions handles PDF compilation

---

**Last Updated:** 2026-01-25  
**Status:** Production-ready, needs content update
