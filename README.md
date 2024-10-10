# logicly.com.au Site

[Nuxt](https://nuxt.com/)-based site, wrapped in [Docker](https://www.docker.com/)
containers. Note this is currently using [Nuxt v2](https://v2.nuxt.com/).

All scripts below are to be run from the top-level (checkout) directory.


## Developer Workflow

Modify `package.json` as needed for any version updates. Then continue to
the subsequent sections.

We should use version strings that allow upgrading minor/patch versions, e.g.
`^5.3.3` in `package.json`. Major version changes should require explicit
effort, modifying `package.json` as Javascript frameworks tends to have poor
backward compatibility.


## Author Workflow

Assuming authors are aware of the standard source control practice of creating
a separate branch to commit changes to, and a subsequent Pull Request to review.

The following steps assume you are in the correct branch.

* Jump to the **Setup** section next.
* Start development server, section **Development Server**.
* Make required changes to documentation, these should be reflected on
  refreshing the page hosted by the development server.
* Make sure the changes will work on the production optimised site, section
  **Production Build and Preview**.


## Setup

Run the following to install dependencies locally:

```bash
docker compose --profile cli run --rm npm install
```

This will potentially also update `package-lock.json`.

Be sure to commit any changes to `package-lock.json` if everything is working
correctly.

Here is an example to run an `audit` on our packages.

```bash
docker compose --profile cli run --rm npm audit
```

## Development

Start the development server, with hot-reloading enabled on `http://localhost:3000`
in the background:


```bash
docker compose up -d
```

To stop the server:

```bash
docker compose down
```

Other useful Docker commands shown below.

Check the status of the docker container(s), e.g. if after some time (up to a minute
or so), the site is not up:

```bash
docker compose ps
```

Watch the server logs for errors/warnings/info:

```bash
docker compose logs -f
```

## Test generation

This will generate a local static version of the site in the `dist` folder.

It is most useful for testing that the deployment will work as this command
is the same as that run by github.com's actions.

```bash
docker compose --profile cli run --rm npm run generate
```

## Deploy

When your changes are merged to `main` on github.com the site will
be updated automatically.
