# Modern Portfolio Website

A clean, modern, and reactive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and is fully responsive.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **SEO Optimized**: Meta tags and proper structure
- **Performance**: Optimized for fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the title and description
   - Replace social media links with your profiles

2. **About Section** (`src/components/About.tsx`):
   - Update the profile image (replace the placeholder with your photo)
   - Modify the description and statistics
   - Update the initials in the avatar

3. **Skills Section** (`src/components/Skills.tsx`):
   - Adjust skill levels and categories based on your expertise
   - Add or remove skills as needed

4. **Experience Section** (`src/components/Experience.tsx`):
   - Replace with your actual work experience
   - Update company names, positions, and descriptions

5. **Projects Section** (`src/components/Projects.tsx`):
   - Add your actual projects with descriptions and links
   - Update project images and technologies used

6. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Replace social media links

### Styling

The website uses Tailwind CSS for styling. You can customize:

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in the Tailwind config
- **Animations**: Modify animation settings in the config

### Configuration Files

- **`public/index.html`**: Update meta tags, title, and description
- **`public/manifest.json`**: Update app name and theme colors
- **`vercel.json`**: Deployment configuration for Vercel

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Deploy

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size
- Fast loading times

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📞 Support

If you have any questions or need help, feel free to reach out:

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

Made with ❤️ by [Your Name] 