# Nuru Labs Website

Official website for Nuru Labs Ltd - A leading IT company in Rwanda building innovative software solutions including Jambo, the premier gym management platform.

## 🚀 Overview

This is the corporate website for Nuru Labs Ltd, showcasing the company's services, team, and products. The website features modern design with responsive layouts and includes sections for services, company statistics, team members, and contact information.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist & Geist Mono (via Next.js)
- **Analytics**: Vercel Analytics
- **Form Handling**: React Hook Form with Zod validation
- **Package Manager**: pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

## 🏃 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nuru-labs-website
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
pnpm build
```

### Start Production Server

Start the production server:

```bash
pnpm start
```

### Linting

Run ESLint to check for code issues:

```bash
pnpm lint
```

## 📁 Project Structure

```
nuru-labs-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── contact.tsx       # Contact section
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header/Navigation
│   ├── hero.tsx          # Hero section
│   ├── jambo-section.tsx # Jambo product showcase
│   ├── services.tsx      # Services section
│   ├── stats.tsx         # Statistics section
│   └── team.tsx          # Team section
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   └── utils.ts          # Shared utilities
├── public/               # Static assets
│   ├── placeholder-*.{png,svg,jpg}  # Placeholder images
│   └── professional-*.jpg            # Team member photos
└── styles/               # Additional styles
    └── globals.css
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Built with shadcn/ui components (New York style)
- **SEO Optimized**: Comprehensive metadata and structured data (Schema.org)
- **Type Safety**: Full TypeScript support
- **Analytics**: Vercel Analytics integration
- **Dark Mode Ready**: Theme provider setup (next-themes)
- **Accessible**: ARIA-compliant components from Radix UI

## 🔧 Configuration

### Next.js Config

The project uses custom Next.js configuration:
- TypeScript build errors are ignored (for development)
- Images are unoptimized (can be configured for production)

### Component Aliases

The project uses path aliases configured in `tsconfig.json`:
- `@/components` → components directory
- `@/lib` → lib directory
- `@/hooks` → hooks directory

## 📝 Key Sections

- **Hero**: Main landing section with company introduction
- **Stats**: Company statistics and achievements
- **Services**: Services offered by Nuru Labs
- **Jambo Section**: Showcase of the Jambo gym management platform
- **Team**: Team member profiles
- **Contact**: Contact form and information
- **Footer**: Footer with links and additional information

## 🌐 Deployment

The website is configured to deploy on [Vercel](https://vercel.com/):

1. Push your code to the repository
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Environment Variables

If needed, add environment variables in your deployment platform:
- No environment variables are currently required

## 📄 License

This project is private and proprietary to Nuru Labs Ltd.

## 🤝 Contributing

This is a private project. For contributions, please contact the development team.

## 📞 Contact

**Nuru Labs Ltd**
- Website: https://nurulabs.rw
- Email: info@nurulabs.rw
- Twitter: [@nurulabs](https://twitter.com/nurulabs)
- LinkedIn: [Nuru Labs](https://linkedin.com/company/nurulabs)
- GitHub: [nurulabs](https://github.com/nurulabs)

## 🔄 Version

Current version: 0.1.0

---

Built with ❤️ by Nuru Labs Ltd
