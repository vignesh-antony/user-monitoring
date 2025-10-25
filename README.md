# Monitoring — React + TypeScript + Vite

Small demo app that shows:

- React 19 + Vite
- TypeScript project references (see [`tsconfig.app.json`](tsconfig.app.json))
- Sentry instrumentation for routing and replay ([`src/instrument.ts`](src/instrument.ts))

### Getting started

1. Install dependencies

```sh
npm install
```

2. Install dependencies

```sh
npm run dev
# open http://localhost:5173
```

3. Build for production

```sh
npm run build
```

> Note: You can view the Sentry dashboard for this project at https://va-dev.sentry.io/insights/projects/va-user-app
