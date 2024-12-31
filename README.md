# Scoreboard Application

A modern web application for real-time sport events score tracking and management. Built with NestJS (backend) and Next.js (frontend) in a monorepo structure.

## Project Structure

```
scoreboard/
├── api/         # NestJS backend application
├── app/         # Next.js frontend application
├── .husky/      # Git hooks
└── README.md
```

## Prerequisites

- Node.js >= 18
- pnpm >= 8.0.0
- Git

## Tech Stack

### Backend (`/api`)

- NestJS - A progressive Node.js framework
- TypeScript
- PostgreSQL - Database
- Swagger - API documentation

### Frontend (`/app`)

- Next.js 14 - React framework
- TypeScript
- Tailwind CSS - Utility-first CSS framework
- SWR - Data fetching and caching

## Getting Started

1. Clone the repository

```bash
git clone <repository-url>
cd scoreboard
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables

```bash
cp api/.env.example api/.env
cp app/.env.example app/.env
```

4. Start the development servers

Backend:

```bash
pnpm --filter api dev
```

Frontend:

```bash
pnpm --filter app dev
```

The API will be available at `http://localhost:3000`  
The frontend application will be available at `http://localhost:3001`

## Development

### Git Workflow

This project uses Conventional Commits to ensure consistent commit messages. We use Commitizen CLI to help format commits properly.

To commit changes:

```bash
pnpm commit
```

This will start an interactive prompt to help you create a properly formatted commit message.

### Git Hooks

We use Husky to enforce:

- Conventional commit messages
- Linting before commits
- Tests before push

## Available Scripts

### Root Directory

- `pnpm commit`: Create a conventional commit using Commitizen
- `pnpm test`: Run tests across all packages
- `pnpm lint`: Lint all packages
- `pnpm build`: Build all packages

### API (`/api`)

- `pnpm --filter api dev`: Start API in development mode
- `pnpm --filter api build`: Build the API
- `pnpm --filter api start`: Start the API in production mode
- `pnpm --filter api test`: Run API tests

### Frontend (`/app`)

- `pnpm --filter app dev`: Start frontend in development mode
- `pnpm --filter app build`: Build the frontend
- `pnpm --filter app start`: Start the frontend in production mode
- `pnpm --filter app test`: Run frontend tests

## Contributing

1. Create a new branch from `main`
2. Make your changes
3. Commit using `pnpm commit`
4. Submit a pull request

Please ensure your commits follow the conventional commit format and all tests pass before submitting a PR.

## License

MIT License - see the [LICENSE](LICENSE) file for details
