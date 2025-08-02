# Resume Site

A professional resume website that automatically compiles LaTeX to PDF and provides an elegant download page. Built with GitHub Actions for continuous deployment.

## 🚀 Features

- **LaTeX Resume**: Professional, customizable resume template
- **Auto-Download Page**: Beautiful HTML page that automatically triggers resume download
- **GitHub Actions**: Automated PDF compilation and deployment
- **GitHub Pages**: Free hosting with automatic updates
- **Responsive Design**: Works perfectly on all devices

## 📁 Project Structure

```
resume-site/
│
├── .github/
│   └── workflows/
│       └── build.yml          # GitHub Actions workflow
│
├── resume.tex                 # LaTeX resume template
├── index.html                 # Auto-download page
└── README.md                  # This file
```

## 🛠️ Setup Instructions

### 1. Customize Your Resume

Edit `resume.tex` with your information:

```latex
% Update these sections with your details
{\Huge\bfseries\color{primary} Your Name}\\[0.5em]
\faIcon{envelope} \href{mailto:your.email@example.com}{your.email@example.com}
\faIcon{phone} +1 (555) 123-4567
\faIcon{map-marker-alt} City, State
\faIcon{github} \href{https://github.com/yourusername}{github.com/yourusername}
\faIcon{linkedin} \href{https://linkedin.com/in/yourusername}{linkedin.com/in/yourusername}
```

### 2. Customize the Download Page

Edit `index.html` to match your details:

```html
<!-- Update these sections -->
<div class="profile-img">YN</div>  <!-- Your initials -->
<h1>Your Name</h1>
<p class="title">Software Engineer</p>
```

### 3. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Save the settings

### 4. Push to GitHub

```bash
git add .
git commit -m "Initial resume site setup"
git push origin main
```

The GitHub Actions workflow will automatically:
- Compile your LaTeX resume to PDF
- Deploy the site to GitHub Pages
- Make your resume available at `https://yourusername.github.io/repo-name`

## 🎨 Customization

### LaTeX Template Features

- **Modern Design**: Clean, professional layout with custom colors
- **FontAwesome Icons**: Beautiful icons for contact information
- **Hyperlinks**: Clickable email, GitHub, and LinkedIn links
- **Responsive Sections**: Experience, Education, Skills, Projects, etc.

### HTML Page Features

- **Gradient Background**: Modern purple gradient design
- **Auto-Download**: Automatically triggers resume download
- **Loading Animation**: Smooth loading states
- **Mobile Responsive**: Perfect on all screen sizes
- **Social Links**: Direct links to your profiles

## 🔧 Dependencies

### LaTeX Packages Required

- `fontawesome5` - For icons
- `hyperref` - For clickable links
- `xcolor` - For custom colors
- `titlesec` - For section formatting
- `enumitem` - For list customization
- `geometry` - For page margins

### GitHub Actions

- `xu-cheng/latex-action@v3` - LaTeX compilation
- `peaceiris/actions-gh-pages@v3` - GitHub Pages deployment

## 📝 Usage

1. **Local Development**: Edit `resume.tex` and `index.html`
2. **Automatic Deployment**: Push to main/master branch
3. **Access Your Site**: Visit your GitHub Pages URL
4. **Download Resume**: PDF automatically downloads when visiting the site

## 🎯 Tips for Success

### Resume Content
- Keep descriptions concise and achievement-focused
- Use action verbs and quantifiable results
- Tailor content to your target roles
- Include relevant keywords for ATS systems

### Design Customization
- Update colors in `resume.tex` (lines 18-20)
- Modify the gradient in `index.html` (line 15)
- Adjust spacing and typography as needed
- Test on different devices and browsers

## 🔗 Links

- **Your Site**: `https://yourusername.github.io/repo-name`
- **Resume PDF**: Automatically downloaded when visiting the site
- **GitHub Repository**: Your repository URL

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using LaTeX, HTML, CSS, and GitHub Actions** 