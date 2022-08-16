# Development

## Preparing your environment

You may need to install (or update) `yarn` first.

In a terminal ...

```bash
npm install --global yarn
```

Then you need to install the project dependencies ...

```bash
# install dependencies
yarn install
```
## Development

The following steps can be completed using GitHub Desktop or `git` in a terminal.

1. Ensure you are on the `main` branch 
2. Ensure you have an up to date copy by fetching this repo and pulling any changes.
3. Create a new branch. Call it something meaningful. e.g. `hompage-spelling-fixes`.
4. Run `yarn dev` at the command line in the repository directory.
   * In GitHub Desktop open the repository in terminal to get a command prompt in the repositry directory.
5. Make your edits
   * In GitHub desktop you can open the repo in finder to access the files. Use your preferred text editor.
6. You can view your changes locally by browsing to http://localhost:8000/.
7. Repeat steps 5 adn 6 until you're satisfied with your changes.
8. Commit your changes
9. Open a PR, it must be reviewed by at least one person before it may be merged into `main`.
   * You can request reviewers in the github.com PR UI.

Note that merging a PR automatically publishes the change, so the reviewer MUST be confident the change is ok.

For detailed explanation on how things work, check out Nuxt.js docs.
### TL;DR

```bash
# install dependencies
yarn install
```

```bash
# serve with hot reload at localhost:8000
yarn dev
