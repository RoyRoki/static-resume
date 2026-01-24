# 🚀 Quick Start Guide

## For Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start
```

The server will start at `http://localhost:3001`

## Available Routes

- **`/`** - Main resume page (HTML with embedded PDF)
- **`/md`** - Markdown version of resume (perfect for AI agents)
- **`/json`** - Structured JSON resume data (for programmatic access)
- **`/roki_roy_resume.pdf`** - Direct PDF download

## Examples

### Fetching Markdown Resume
```bash
curl http://localhost:3001/md
```

### Fetching JSON Resume
```bash
curl http://localhost:3001/json
```

## For AI Agents

This resume is AI-agent friendly! Simply fetch:
- `https://royroki.github.io/static-resume/md` for markdown format
- `https://royroki.github.io/static-resume/json` for structured JSON data (if server deployed)

Both endpoints include CORS headers for easy access from any origin.
