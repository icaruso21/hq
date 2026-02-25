# Sites

Simple JavaScript websites deployed via GitHub Pages.

## Creating a new site

Copy `_template/` to a new directory:

```
cp -r sites/_template sites/my-new-site
```

Then build your site in that directory.

## Deploying

A GitHub Actions workflow deploys the `sites/` directory to GitHub Pages and auto-generates a landing page with links to all sites.

Each site lives at:

```
https://<username>.github.io/hq/<site-name>/
```

To enable: go to repo Settings > Pages > set source to "GitHub Actions".
