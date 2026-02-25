# Sites

Simple JavaScript websites deployed via GitHub Pages.

## Creating a new site

Copy `_template/` to a new directory:

```
cp -r sites/_template sites/my-new-site
```

Then build your site in that directory.

## Deploying

GitHub Pages serves from this repo. Each site lives at:

```
https://<username>.github.io/hq/sites/<site-name>/
```

To enable: go to repo Settings > Pages > set source to "Deploy from a branch" > pick `main` / `/ (root)`.
