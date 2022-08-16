# homepage

## Development via command line

You may need to install (and then update) yarn first:

```bash
# install dependencies
yarn install
```

To run up your local copy use the below command. You'll then be able to view the site on a localhost (eg http://localhost:8000/):

```bash
# serve with hot reload at localhost:3000
yarn dev

# build for production and launch server
yarn build
yarn start

# generate static project
yarn generate
```

## Workflow via Github desktop

1. In Github desktop, fetch the most recent version of `main`
2. Create a branch for your changes
3. Open the repo in finder and make the required changes
4. Check them locally (if applicable) by opening in terminal and running the `yarn dev` command as per above
5. Commit the change via Github desktop
6. Open a PR and request it be reviewed and approved

NOTE: Merging a PR automatically publishes the change, so the reviewer MUST be confident the change is ok.




For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
