# Netlify CMS Setup for Mawingu Photography

This repo is ready to be published on Netlify and edited with Decap CMS. The setup stays fully static, so there is no database involved.

## What is already in the repo

- Static site pages in the project root.
- Editable photo content in `content/home.json`, `content/gallery.json`, `content/chromatic.json`, and `content/echoes.json`.
- Admin entry point in `admin/index.html`.
- Netlify CMS backend configuration in `admin/config.yml`.

## Netlify settings

1. Connect the GitHub repository to Netlify.
2. Set the publish directory to the repository root.
3. Leave the build command empty unless you later add a build step.
4. Deploy the site.

## CMS authentication

Decap CMS uses Netlify Identity plus Git Gateway on Netlify.

Enable these in the Netlify dashboard for the site:

1. `Identity`
2. `Git Gateway`

After that, invite the site owner through Netlify Identity so she can log in at `/admin`.

## How the owner will use it

1. Open the live Netlify site.
2. Visit `/admin`.
3. Sign in with the Netlify Identity invite.
4. Edit the JSON content entries or upload new images.
5. Save or publish the changes through Decap CMS.

## Important note

Because the site is static, the CMS writes changes back to the Git repository instead of a database.

## Best next step

If you want, the next change should be to add a short Netlify deployment checklist or a visible admin link in the site header.
