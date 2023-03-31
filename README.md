# Floc backend assignment 2

## Endpoints

```
Client
https://assignment.kivotos.sh

Server
https://assignment-api.kivotos.sh

DB
https://assignment-db.kivotos.sh
```

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
