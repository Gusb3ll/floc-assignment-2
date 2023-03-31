# Floc backend assignment 2

## Monorepo directory

```text
📦 /
├─ apps
│  ├─ client
│  └─ server
└─ packages
   ├─ db
   └─ core <- contain libraries ex. argon jwt
```

## Setup

```bash
cp .env.sample .env

docker compose up -d

pnpm install

pnpm build:package
```

## Development

```bash
# Server only
pnpm dev:server

# Client only
pnpm dev:client

# Both
pnpm dev
```

## Production

```bash
pnpm build

pnpm start
```
