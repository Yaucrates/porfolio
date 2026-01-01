# Portfolio - Yousif Abdulhussein

A modern, interactive portfolio showcasing full-stack development capabilities, featuring an advanced neural network visualizer built from scratch.

**Live Site:** [yousifabdulhussein.com](https://yousifabdulhussein.com)

![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-FF3E00?style=flat&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

---

## About

This portfolio is a comprehensive showcase of my work as a full-stack developer, highlighting projects, technical experience, and software engineering capabilities. It features interactive case studies, detailed project demonstrations, and a fully functional neural network visualizer built from scratch to demonstrate that I can do more than just UI/UX.

The site serves as both a personal portfolio and a demonstration of modern web development practices, including server-side rendering, type-safe development, and advanced interactive visualizations.

---

## Tech Stack

### Core Framework
- **SvelteKit 2.0** - Full-stack framework with file-based routing and SSR
- **Svelte 5.0** - Reactive UI library with modern runes system
- **TypeScript 5.0** - Full type safety across the entire codebase

### Styling & Design
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **@tailwindcss/typography** - Beautiful typography for rich content
- **Custom Theme Extensions** - Extended color palette and breakpoints

### Content & Graphics
- **mdsvex 0.11** - Markdown with Svelte component support
- **PixiJS 8.14** - GPU-accelerated 2D graphics for neural network visualizer

### Build & Deployment
- **Vite 5.4** - Lightning-fast build tool and dev server
- **Vercel Adapter** - Serverless deployment on Vercel

---

## Project Highlights

### Interactive Neural Network Visualizer

The standout feature of this portfolio is a **fully functional neural network implementation** built from scratch, located in the [Impart Education case study](https://yousifabdulhussein.com/projects/impart-education).

**Technical Implementation:**
- **Complete Neural Network**: Full backpropagation implementation with gradient descent
- **Custom Matrix Math Library**: Zero-dependency linear algebra (matrix multiplication, transpose, Hadamard product)
- **Real-time Visualization**: GPU-accelerated rendering using PixiJS
- **Decision Boundary Rendering**: Visual representation of network learning progress
- **Interactive Controls**: Start/stop training, reset network, live cost function monitoring
- **Performance Optimized**: Zero-allocation inference, batch processing, learning rate decay

**Features:**
- Live gradient descent visualization with epoch tracking
- Adjustable learning parameters
- Real-time cost function graphing
- Interactive decision boundary updates
- Complete training control interface

### Modern Web Architecture

**Advanced Features:**
- View Transitions API for smooth, app-like page navigation
- Server-side rendering with SvelteKit for optimal performance
- Fully responsive design (mobile-first approach)
- Type-safe component architecture
- Reusable component library with consistent design system

**Portfolio Sections:**
- **Landing Page**: Interactive company tabs, case study cards, live time display
- **Case Studies**: Deep-dive into major projects (Impart Education, Dorm Dojo)
- **Experience Timeline**: Detailed work history with 4 major roles
- **Project Showcase**: 6+ projects with GitHub links and descriptions
- **About Page**: Personal story, education background, image gallery
- **Contact Section**: Professional contact information and social links

---

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **pnpm**
- **Git**

---

## Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/Yaucrates/porfolio.git
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
---

---

## Deployment

### Vercel (Recommended)

This project is configured for seamless deployment on Vercel:

1. **Automatic Deployment**: Push to the `main` branch triggers automatic deployment
2. **Serverless Functions**: Uses `@sveltejs/adapter-vercel` for optimal Vercel integration
3. **Environment Variables**: Set any required environment variables in the Vercel dashboard

### Manual Deployment

```bash
# Build the project
npm run build

# The output will be in .vercel/output/
# Deploy this directory to Vercel or your hosting platform
```

### Alternative Platforms

The project can be adapted to other platforms by changing the adapter in `svelte.config.js`:

- **Node.js**: `@sveltejs/adapter-node`
- **Static**: `@sveltejs/adapter-static`
- **Netlify**: `@sveltejs/adapter-netlify`
- **Cloudflare**: `@sveltejs/adapter-cloudflare`

---

## Features Deep-Dive

### Responsive Design
- Mobile-first approach with custom breakpoints
- Adaptive navigation (sidebar on desktop, mobile menu on mobile)
- Responsive grid layouts across all pages
- Optimized images with WebP format

### Design System
- Consistent dark theme with custom color palette
- Cyan and red accent colors for visual hierarchy
- Typography plugin for rich, readable content
- Smooth animations and transitions

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly

### Performance
- Server-side rendering for fast initial page loads
- Code splitting and lazy loading
- Optimized assets (WebP images, minified CSS/JS)
- GPU-accelerated graphics with PixiJS

---

## License

© 2025 Yousif Abdulhussein. All Rights Reserved.

This portfolio and its contents are proprietary. The code is available for viewing and learning purposes, but may not be reproduced, distributed, or used commercially without permission.

---

## Contact

**Live Portfolio:** [yousifabdulhussein.com](https://yousifabdulhussein.com)

Feel free to explore the portfolio and reach out through the contact section on the website.

---

**Built by Yousif Abdulhussein** - Full-Stack Developer specializing in TypeScript, React, Svelte, and modern web technologies.
