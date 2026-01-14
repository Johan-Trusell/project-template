# 🚀 Project Template

> Standard project template for JARVIS ecosystem with GitHub Codespaces support

## Quick Start

### Option 1: GitHub Codespaces (Recommended)
1. Click **Code** → **Codespaces** → **Create codespace on main**
2. Wait for environment to build (~2 minutes)
3. Start developing!

### Option 2: Local Development
```bash
git clone https://github.com/Johan-Trusell/project-template.git my-project
cd my-project
npm install
npm run dev
```

## 📁 Project Structure

```
project/
├── .devcontainer/        # Codespaces configuration
├── .github/workflows/    # CI/CD pipelines
├── src/
│   ├── components/       # UI components
│   ├── utils/            # Helper functions
│   ├── styles/           # CSS styles
│   └── index.ts          # Entry point
├── public/               # Static assets
└── tests/                # Test files
```

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run lint` | Check code issues |
| `npm run format` | Format code |
| `npm run typecheck` | TypeScript validation |

## 🎨 Code Style

- **Prettier** - Code formatting
- **ESLint** - Code quality
- **TypeScript** - Type safety
- **EditorConfig** - Editor settings

## 📄 License

MIT © Johan Trusell
