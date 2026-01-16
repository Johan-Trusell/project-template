# CLAUDE.md - AI Context File

> **Read this first when working on any project based on this template**

## Quick Summary

This is the **standard project template** for all Johan-Trusell projects. It includes:
- GitHub Codespaces / devcontainer setup
- Vite + TypeScript + React
- ESLint + Prettier
- VS Code settings
- GitHub Actions CI

## Template Structure

```
project-template/
├── .devcontainer/         # GitHub Codespaces config
│   └── devcontainer.json  # Container settings + extensions
├── .github/               # GitHub Actions workflows
├── .vscode/               # VS Code workspace settings
├── src/                   # Source code
├── tests/                 # Test files
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite bundler config
└── eslint.config.js       # Linting rules
```

## Using This Template

1. Create new repo from this template on GitHub
2. Update `package.json` with project name
3. Update this `CLAUDE.md` with project-specific info
4. Update `README.md` with project documentation

## Key Configurations

### DevContainer
- Base image: `mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye`
- Includes: GitHub CLI, Docker-in-Docker
- VS Code extensions: ESLint, Prettier, GitLens, etc.

### Scripts
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run test     # Run tests
npm run lint     # Lint code
```

## Standards

All projects using this template should:
1. Have a `CLAUDE.md` (this file, customized)
2. Have a `README.md` (user documentation)
3. Use TypeScript
4. Follow ESLint/Prettier rules
5. Include tests

---
*Part of the Johan-OS ecosystem*
*Last updated: January 2026*
