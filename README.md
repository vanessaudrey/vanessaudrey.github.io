# Mechanical Design Engineer Portfolio
> Built with Jekyll · Hosted on GitHub Pages

## Quick Start

### 1. Prerequisites
- Ruby 3.x and Bundler: `gem install bundler`
- Git

### 2. Clone & Install
```bash
git clone https://github.com/yourusername/yourusername.github.io
cd yourusername.github.io
bundle install
```

### 3. Run Locally
```bash
bundle exec jekyll serve
# Open http://localhost:4000
```

### 4. Deploy to GitHub Pages
Push to the `main` branch of a repo named `yourusername.github.io`.
GitHub automatically builds and deploys it.

---

## Customization Checklist

### `_config.yml`
- [ ] Update `title` (your full name)
- [ ] Update `tagline` (your engineering title)
- [ ] Update `url` (your GitHub Pages URL)
- [ ] Update author `name`, `email`, `linkedin`, `github`, `location`

### `index.html`
- [ ] Replace hero text and stats with your real numbers
- [ ] Add featured project cards

### `experience.html`
- [ ] Replace all job entries with your real experience
- [ ] Update skills list to match your toolset

### `projects.html`
- [ ] Replace project cards with your real projects
- [ ] Add images to `/assets/images/` and update `<img>` tags
- [ ] Replace gallery placeholders with real images

### `hobbies.html`
- [ ] Replace hobby cards with your real hobbies
- [ ] Update emoji icons to match

### `contact.html`
- [ ] Update email address in contact info
- [ ] Sign up at https://formspree.io and replace form `action="#"` with your endpoint

### Resume
- [ ] Add your resume PDF as `/assets/resume.pdf`

---

## File Structure
```
portfolio/
├── _config.yml          ← Site settings
├── _layouts/
│   └── default.html     ← Base HTML layout
├── _includes/
│   ├── nav.html         ← Navigation bar
│   └── footer.html      ← Footer
├── assets/
│   ├── css/main.css     ← All styles
│   ├── js/main.js       ← Theme toggle, nav, animations
│   ├── images/          ← Your project images go here
│   └── resume.pdf       ← Your resume PDF
├── index.html           ← Home page
├── experience.html      ← Experience & skills
├── projects.html        ← Projects & gallery
├── hobbies.html         ← Hobbies
└── contact.html         ← Contact form
```

## Adding a New Project
Copy a project card block in `projects.html` and fill in:
- `project-card__label`: Category and year
- `project-card__title`: Project name  
- `project-card__desc`: Description
- `project-card__tags`: Tools/methods used
- Replace the placeholder div with an `<img>` tag

## Contact Form (Formspree)
1. Go to https://formspree.io and create a free account
2. Create a new form → get your endpoint URL
3. In `contact.html`, change `action="#"` to `action="https://formspree.io/f/yourcode"`
4. Done — no backend needed!
