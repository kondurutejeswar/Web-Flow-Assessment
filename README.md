# Tejeswar - Frontend Developer Portfolio

A modern, animated portfolio website showcasing frontend development skills and projects. Built with clean HTML, CSS, and JavaScript featuring smooth animations and a responsive design.

## ✨ Features

- **Animated Hero Section** - Dynamic typing effect and text swap animations
- **Scroll Reveal Animations** - Smooth fade-in effects as you scroll through sections
- **Floating Background Elements** - Animated gradient circles for visual appeal
- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Theme UI** - Modern dark color scheme with cyan accent colors
- **Interactive Gallery** - Hover effects on project showcase images
- **Smooth Navigation** - Sticky header with smooth scroll to sections
- **Resume Download** - Direct download link for resume/CV

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom animations, grid layouts, flexbox
- **JavaScript (Vanilla)** - Intersection Observer API, DOM manipulation, typing effects
- **Git & GitHub** - Version control

## 📂 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # All CSS styles and animations
├── script.js           # JavaScript for animations and interactions
├── images/             # Portfolio images and gallery
│   ├── profile.jpeg    # Profile picture
│   ├── g1.png          # Gallery image 1
│   ├── g2.png          # Gallery image 2
│   ├── g3.png          # Gallery image 3
│   └── g4.png          # Gallery image 4
└── resume/             # Resume files
    └── WebDev_Resume.pdf
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code recommended)

### Installation

1. Clone the repository
```bash
git clone https://github.com/kondurutejeswar/portfolio.git
```

2. Navigate to the project directory
```bash
cd portfolio
```

3. Open `index.html` in your browser
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

Or simply drag and drop the `index.html` file into your browser.

## 🎨 Customization Guide

### Updating Personal Information

1. **Name and Title**: Edit the hero section in `index.html`
```html
<h1 class="hero-title">Hii, I'm <span id="typed-text"></span></h1>
```
Update the text variable in `script.js`:
```javascript
const text = " YourName";
```

2. **Profile Picture**: Replace `images/profile.jpeg` with your own image

3. **Skills**: Update the skills grid in the skills section
```html
<div class="skill-card">Your Skill</div>
```

4. **Gallery Images**: Replace images in the `images/` folder (g1.png, g2.png, etc.)

5. **Contact Links**: Update email and GitHub links in the contact section
```html
<a href="mailto:youremail@gmail.com" class="btn">Email Me</a>
<a href="https://github.com/yourusername" class="btn secondary">GitHub</a>
```

### Color Scheme

The main colors are defined in `style.css`:
- Background: `#020617` (Dark blue)
- Accent: `#38bdf8` (Cyan blue)
- Text: `#e5e7eb` (Light gray)
- Secondary: `#94a3b8` (Gray)

To change colors, find and replace these hex values throughout the CSS file.

## 📱 Responsive Breakpoints

The website is responsive with a mobile breakpoint at 768px:
```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

## 🎯 Key Animations

- **Typing Effect**: Auto-types name on page load
- **Text Swap**: Alternates between job titles every 2.5 seconds
- **Scroll Reveal**: Sections fade in when scrolled into view
- **Floating Backgrounds**: Subtle floating animation on hero circles
- **Hover Effects**: Scale and color transitions on interactive elements

## 📧 Contact

**Tejeswar**
- Email: kondurutejeswar@gmail.com
- GitHub: [@kondurutejeswar](https://github.com/kondurutejeswar)

## 📄 License

This project is open source and available for personal and educational use.

---

Built with ❤️ for  UI Assessment
