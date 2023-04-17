# Foundation

Monorepo setup showcasing different frameworks and technologies for front-end engineering.

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/BarneyPowell/foundation/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/BarneyPowell/foundation/tree/main)

## Initial setup

### Install Corepack

The preferred way to manage Yarn is through Corepack, a new binary shipped with all Node.js releases starting from 16.10. It acts as an intermediary between you and Yarn, and lets you use different package manager versions across multiple projects without having to check-in the Yarn binary anymore.

```bash
$ corepack enable
$ corepack prepare yarn@stable --activate
Preparing yarn@stable for immediate activation...

$ yarn init -2 # Initializes yarn with zero-installs support
➤ YN0000: Retrieving https://repo.yarnpkg.com/3.5.0/packages/yarnpkg-cli/bin/yarn.js
➤ YN0000: Saving the new release in .yarn/releases/yarn-3.5.0.cjs
➤ YN0000: Done in 0s 560ms
{
  name: 'foundation',
  packageManager: 'yarn@3.5.0'
}
```

### Updating yarn

```bash
$ yarn set version stable
➤ YN0000: Retrieving https://repo.yarnpkg.com/3.5.0/packages/yarnpkg-cli/bin/yarn.js
➤ YN0000: Saving the new release in .yarn/releases/yarn-3.5.0.cjs
➤ YN0000: Done in 0s 668ms
```

## Setting up Typescript

```bash
$ yarn add --dev typescript
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 507ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ typescript@npm:5.0.2 can't be found in the cache and will be fetched from the remote registry
➤ YN0013: │ typescript@patch:typescript@npm%3A5.0.2#~builtin<compat/typescript>::version=5.0.2&hash=85af82 can't be found in the cache and
➤ YN0013: │ typescript@npm:5.0.2 can't be found in the cache and will be fetched from the remote registry
➤ YN0000: └ Completed in 17s 611ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed
➤ YN0000: Done in 18s 156ms
```

### Setting up the VS Code integration

```bash
$ yarn dlx @yarnpkg/sdks vscode

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 4s 82ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ semver@npm:7.3.8 can't be found in the cache and will be fetched from the remote registry
➤ YN0013: │ tar@npm:6.1.13 can't be found in the cache and will be fetched from the remote registry
➤ YN0013: │ tinylogic@npm:2.0.0 can't be found in the cache and will be fetched from the remote registry
➤ YN0013: │ tslib@npm:2.5.0 can't be found in the cache and will be fetched from the remote registry
➤ YN0013: │ typanion@npm:3.12.1 can't be found in the cache and will be fetched from the remote registry
➤ YN0000: └ Completed in 2s 111ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 0s 750ms
➤ YN0000: Done in 6s 977ms

➤ YN0000: ┌ Generating SDKs inside .yarn/sdks
➤ YN0000: │ ✓ Typescript
➤ YN0000: │ • 6 SDKs were skipped based on your root dependencies
➤ YN0000: └ Completed
➤ YN0000: ┌ Generating settings
➤ YN0000: │ ✓ Vscode (new ✨)
➤ YN0000: └ Completed
```

###  Installing the Yarn Typescript plugin

```bash
$ yarn plugin import typescript
➤ YN0000: Downloading https://github.com/yarnpkg/berry/raw/@yarnpkg/cli/3.5.0/packages/plugin-typescript/bin/%40yarnpkg/plugin-typescript.js
➤ YN0000: Saving the new plugin in .yarn/plugins/@yarnpkg/plugin-typescript.cjs
➤ YN0000: Done in 0s 894ms
```

```bash
$ yarn plugin import workspace-tools
➤ YN0000: Downloading https://github.com/yarnpkg/berry/raw/@yarnpkg/cli/3.5.0/packages/plugin-workspace-tools/bin/%40yarnpkg/plugin-workspace-tools.js
➤ YN0000: Saving the new plugin in .yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs
➤ YN0000: Done in 0s 789ms
```

Initialise typescript in the project root

```bash
yarn tsc --init
```

Installing a repo-wide package:

```bash
yarn add --dev ts-node
yarn add -D -W <package>
```

Adding a dependency to a specific workspace:

```bash
yarn workspace @foundation/frontend-core add -D typescript
```

Creating a new package / app
Make a folder in the ./apps or ./packages folder.
Change to that folder, and run `yarn init` to set up the package.
Update the package json folder to add @foundation/ prefix to the name.
run `yarn install` to update the lockfile and help resolve.

Commands

Start the cli

```bash
yarn app:cli start
```

Current issues

https://github.com/vercel/next.js/issues/42427
