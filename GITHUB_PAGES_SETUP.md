# GitHub Pages Setup for Mawingu Photography

This repo is ready to be published on GitHub Pages and edited with Decap CMS, but GitHub Pages does not provide the authentication layer that Decap CMS needs by itself.

## What is already in the repo

- Static site pages in the project root.
- Editable photo content in `content/home.json`, `content/gallery.json`, `content/chromatic.json`, and `content/echoes.json`.
- Admin entry point in `admin/index.html`.
- GitHub backend configuration in `admin/config.yml`.

## GitHub Pages settings

1. Open the repository settings on GitHub.
2. Go to `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select branch `main`.
5. Select folder `/ (root)`.
6. Save.

If you use a custom domain later, update `site_url` and `display_url` in `admin/config.yml`.

## Decap CMS authentication requirement

GitHub Pages can host the site, but Decap CMS login needs a GitHub OAuth proxy.

Set these values in `admin/config.yml`:

```yaml
backend:
  name: github
  repo: juma352/Gracie-s-Collection
  branch: main
  base_url: https://your-oauth-proxy.example.com
  auth_endpoint: auth
```

You need to host that OAuth proxy on a separate service, then point Decap CMS to it.

## How the owner will use it

1. Open the live GitHub Pages site.
2. Visit `/admin`.
3. Sign in through the GitHub OAuth flow.
4. Edit the JSON content entries to replace photos.
5. Commit the changes through Decap CMS.

## Important note

Without the OAuth proxy, the `/admin` page will load, but login will fail.

## Best next step

If you want, the next change should be to add the OAuth proxy service configuration so the admin login actually works on GitHub Pages.
