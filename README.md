# Nicolás Cazorla Martínez - Personal Portfolio

A modern, responsive portfolio website built with SvelteKit and TailwindCSS, showcasing my professional experience, projects, and skills.

## Features

- Responsive design with mobile-first approach
- Dark/light mode support
- SEO optimized with meta tags
- Contact form
- Project showcase
- Professional experience timeline
- Skills and education sections

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Full-stack web framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Cloudflare Pages](https://pages.cloudflare.com/) - Deployment platform

## Development

### Prerequisites

- Node.js 18.x or higher
- Bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NicoCaz/nicocaz.com.git
cd nicocaz.com
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

The site will be available at `http://localhost:5173`.

## Building for Production

To create a production build:

```bash
bun run build
```

## Deployment to Cloudflare Pages

1. Create a new project on Cloudflare Pages
2. Connect your GitHub repository
3. Configure the build settings:
   - Build command: `bun run build`
   - Build output directory: `build`
   - Environment variables: None required

### Manual Deployment

You can also deploy manually using Wrangler:

1. Install Wrangler globally:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
wrangler pages deploy build
```

## Project Structure

```
nicocaz.com/
├── src/
│   ├── routes/           # SvelteKit routes
│   ├── lib/             # Shared components and utilities
│   └── app.css          # Global styles
├── static/              # Static assets
├── tests/              # Test files
└── package.json        # Project dependencies and scripts
```

## License

MIT License - feel free to use this code for your own portfolio!
