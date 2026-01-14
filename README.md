# 🚀 Project Template

> Standard project structure for JARVIS ecosystem and idea projects

## Quick Start

### Option 1: GitHub Codespaces (Recommended)
1. Click **Code** → **Codespaces** → **Create codespace on main**
2. Wait for environment to build (~2 minutes)
3. Start developing!

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/Johan-Trusell/project-name.git
cd project-name

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
project-name/
├── .devcontainer/           # GitHub Codespaces configuration
│   └── devcontainer.json    # Environment settings, extensions, ports
├── .github/                 # GitHub configuration
│   └── workflows/           # CI/CD pipelines
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Core libraries & utilities
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Helper functions
│   ├── styles/              # Global styles
│   └── index.ts             # Main entry point
├── public/                  # Static assets
├── tests/                   # Test files
├── docs/                    # Documentation
└── scripts/                 # Build & utility scripts
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Vite) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code for issues |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | TypeScript type checking |
| `npm run test` | Run tests |
| `npm run serve` | Serve static files (for HTML projects) |

## 🎨 Code Style

This project enforces consistent code style through:

- **EditorConfig** - Basic editor settings
- **Prettier** - Code formatting
- **ESLint** - Code quality & best practices
- **TypeScript** - Type safety
- **Husky + lint-staged** - Pre-commit hooks

All checks run automatically on commit.

## 🌐 Environment Variables

Create a `.env.local` file for local development:

```env
# API Keys (never commit!)
VITE_API_URL=http://localhost:4000
VITE_PUBLIC_KEY=your-public-key

# Feature flags
VITE_ENABLE_DEBUG=true
```

## 📦 Adding Dependencies

```bash
# Production dependency
npm install package-name

# Development dependency
npm install -D package-name
```

## 🔐 Access Management

For organization projects:
- **Read access**: All org members
- **Write access**: Team members only
- **Admin access**: Project maintainers

Configure in: Settings → Collaborators and teams

## 📄 License

MIT © Johan Trusell
