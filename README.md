# namecard

This simplistic Nuxt namecard is shown on [the homepage of my personal website](https://poyea.me/).

## Build Setup

Uses [Bun](https://bun.sh) as the package manager and JS runtime.

```bash
# install dependencies
$ bun install

# serve with hot reload at localhost:3000
$ bun --bun run dev

# generate static site for production (outputs to dist/)
$ bun --bun run generate

# or build for server deployment
$ bun --bun run build
$ bun --bun run start
```

The `--bun` flag runs Nuxt on Bun's runtime; drop it (`bun run generate`) to fall back to Node, which is a safer bet if you hit a Nuxt 2 / webpack 4 compatibility issue.

### Linting

```bash
$ bun run lint
$ bun run lintfix
```

### License

MIT
