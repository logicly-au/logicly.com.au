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
./tools/npm.sh install
```

This will potentially also update `package-lock.json`.

Be sure to commit any changes to `package-lock.json` if everything is working
correctly.

Any weird errors (not just warnings) like "tracker idealTree already exists" may
need deleting the `package-lock.json` file, and retrying. May happen on Node
upgrades for example. Check with developers. We don't expect this to happen
often.

Mainly of use to developers, we can pass in any arbitrary `npm` arguments to
`npm.sh`.

Here is an example to run an `audit` on our packages.

```bash
./tools/npm.sh audit
```


## Development Server

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

### Warning Messages TO BE IGNORED

These will hopefully go when we upgrade to Nuxt 3, but they don't affect functionality,
**so just ignore them**, documenting so authors are aware of them (and can duly ignore them!).

Several attempts around library versioning and Node versioning were tried, but they
led to other problems.

On running `./tools/npm.sh install`:

```bash
$ ./tools/npm.sh install
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'postcss-nesting@8.0.1',
npm warn EBADENGINE   required: { node: '12 - 16' },
npm warn EBADENGINE   current: { node: 'v20.16.0', npm: '10.8.1' }
npm warn EBADENGINE }
```

* The prior tailwindcss nuxt module lib failed to work (fatal config errors) with
  a fresh `npm install`.
* Upgrading to the next compatible version up brought in a new `postcss-nesting`
  dependency, leading to this error with Node 20.
* Going back to a prior Node, shows even more warnings like above but this time for
  libraries wanting a newer Node version, while fixing this one!
* Thus there is no issue caused by this warning, tried some `tailwind.config.js`
  colour changes as a quick test, so far so good.


On first server startup:

```
dev-server-1  |
dev-server-1  |  WARN
dev-server-1  |
dev-server-1  |
dev-server-1  |  WARN  warn - The purge/content options have changed in Tailwind CSS v3.0.
dev-server-1  |
dev-server-1  |
dev-server-1  |  WARN  warn - Update your configuration file to eliminate this warning.
dev-server-1  |
dev-server-1  |
dev-server-1  |  WARN  warn - https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
```

The configuration has actually already been updated, but the warning persists, there's
[an issue](https://github.com/tailwindlabs/tailwindcss/discussions/6019) for it, but
no workarounds have worked so far in our case.


## Production Build and Preview

Build the application/site for production (no hot reloading, optimised and static):

```bash
./tools/prod.sh build
```

Locally preview/run production server on `http://localhost:3001`,
starting in the background, previewing what was built in the previous
step:

```bash
./tools/prod.sh service up -d
```

To stop the server:

```bash
./tools/prod.sh service down
```

Note: We can pass in arbitrary `docker compose` commands after `service`.

Below are some useful commands for authors and developers:

Check the status of the docker container(s), e.g. if after some time (up to a minute
or so), the site is not up:

```bash
./tools/prod.sh service ps
```

Watch the server logs for errors/warnings/info:

```bash
./tools/prod.sh service logs -f
```
