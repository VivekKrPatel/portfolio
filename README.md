# Vivek Kumar Patel — portfolio

Static recruiter-facing site. No build step. Designed for Cloudflare Pages.

## Local preview

From this folder:

```powershell
python -m http.server 4173
```

Open http://localhost:4173

## Cloudflare Pages (you sign in)

The agent cannot log into your Cloudflare account. Do not paste a password or API token into chat unless you created a **scoped Pages token you control** and you want the agent to use Wrangler with it.

### Dashboard

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. **Workers & Pages → Create → Pages → Upload assets**.
3. Project name, for example `vivek-kumar-patel`.
4. Upload the contents of this `portfolio` folder (`index.html` must be at the root of the upload, not nested).
5. Deploy. First URL looks like `https://vivek-kumar-patel.pages.dev`.

Git-connected (preferred after you have a GitHub repo):

1. Push this `portfolio` folder, or make it the repo root.
2. **Workers & Pages → Create → Pages → Connect to Git**.
3. Framework preset: **None**.
4. Build command: leave empty.
5. Build output directory: `/` if the repo root is this folder, or `/portfolio` if the repo is the parent `test` workspace.

### Wrangler (after you log in locally)

```powershell
cd portfolio
npx wrangler login
npx wrangler pages deploy . --project-name vivek-kumar-patel-portfolio
```

`wrangler login` opens a browser. Complete it yourself.

## Fill before launch

See `HANDOFF.md` for the checklist. Still missing from you: GitHub URL, photo, mentoring story, hobbies, any extra project numbers you want on the cards.
