# Diego Bruno - Personal Portfolio Website

A modern, responsive portfolio website showcasing Diego Bruno's professional experience as a Computer Engineer and Full Stack Developer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance Focused**: Fast loading times and optimized assets
- **Professional Sections**:
  - Hero section with professional introduction
  - About me with educational background
  - Professional experience timeline
  - Technical skills showcase
  - Featured projects portfolio
  - Services offered
  - Contact information

## 🛠 Tech Stack

- **Framework**: Angular 19.x
- **Styling**: TailwindCSS 3.4.x
- **Language**: TypeScript
- **Build Tool**: Angular CLI
- **Deployment**: Static hosting ready

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Angular CLI (optional, but recommended)

```bash
npm install -g @angular/cli
```

## 🏃‍♂️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd portfolio-diego-bruno
```

### 2. Install dependencies

```bash
npm install
```

### 3. Development server

```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/`

### 4. Build for production

```bash
npm run build
# or 
ng build --configuration=production
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.html    # Main template with all sections
│   ├── app.component.scss    # Component-specific styles
│   ├── app.component.ts      # Main component logic
│   ├── app.config.ts         # App configuration
│   └── app.routes.ts         # Routing configuration
├── assets/                   # Static assets (images, etc.)
├── index.html               # Main HTML file with SEO meta tags
├── main.ts                  # Application bootstrap
└── styles.scss              # Global styles with TailwindCSS
```

## 🎨 Customization

### Colors and Theme

The color palette is defined in `tailwind.config.js` and can be customized:

```javascript
colors: {
  primary: {
    // Gray scale colors
    50: '#f8fafc',
    // ... more shades
    900: '#0f172a',
  },
  accent: {
    // Blue accent colors
    50: '#f0f9ff',
    // ... more shades
    900: '#0c4a6e',
  }
}
```

### Content Updates

All content is directly in `src/app/app.component.html`. Update the following sections:

1. **Personal Information**: Update name, title, and bio
2. **Experience**: Add/modify work experience entries
3. **Skills**: Update technical skills list
4. **Projects**: Customize project showcases
5. **Contact**: Update contact information

### Profile Photo

Add your profile photo to `src/assets/profile-photo.jpg` (recommended: 400x400px, circular crop will be applied automatically).

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

1. Build the project: `npm run build`
2. Upload the `dist/portfolio-diego-bruno/` folder to Netlify
3. Configure custom domain if needed

### Option 2: Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project directory
3. Follow the deployment prompts

### Option 3: GitHub Pages

1. Install GitHub Pages support: `ng add angular-cli-ghpages`
2. Deploy: `ng deploy --base-href=/repository-name/`

### Option 4: Traditional Web Hosting

1. Build the project: `npm run build`
2. Upload the contents of `dist/portfolio-diego-bruno/` to your web hosting provider
3. Configure the server to serve `index.html` for all routes

## 🔧 Available Scripts

```bash
npm start           # Start development server
npm run build       # Build for production
npm run watch       # Build in watch mode
npm test            # Run unit tests
npm run test:watch  # Run tests in watch mode
npm run e2e         # Run end-to-end tests
npm run lint        # Run ESLint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Features

- Semantic HTML structure
- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Structured data for search engines
- Sitemap-friendly routing

## 👤 Contact

**Diego Román Bruno Solís**
- Email: diego.bruno5@outlook.com
- GitHub: [@Bruno5613](https://github.com/Bruno5613)

---

Built with ❤️ using Angular and TailwindCSS

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
