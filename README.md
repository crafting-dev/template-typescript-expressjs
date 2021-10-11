# Typescript Express template for Cloud Sandbox

This is a typescript [expressjs](https://expressjs.com/) template, configured for quick development setup in Cloud Sandbox.

## Specifications

The following `App configuration` was used to create this template:

```yaml
spec:
  endpoints:
  - http:
      routes:
      - backend:
          port: http
          target: ts-express
        path_prefix: /
    name: app
  services:
  - description: A Typescript/Express template
    name: ts-express
    workspace:
      checkouts:
      - path: template-typescript-expressjs
        repo:
          git: https://github.com/crafting-dev/template-typescript-expressjs.git
      packages:
      - name: nodejs
        version: ~16
      ports:
      - name: http
        port: 3000
        protocol: HTTP/TCP

```

To run and hot-reload for development:
```bash
npm start
```

To build:
```bash
npm run build
```

To lint and fix files:
```bash
npm run lint
```