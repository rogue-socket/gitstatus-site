# GitStatusBar website

Static download page for [GitStatusBar](https://github.com/rogue-socket/gitstatus).

## Local preview

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Deploy

The site has no build step. Push this repository to GitHub and enable GitHub
Pages for the default branch.

Recommended production setup:

1. Push this repository to GitHub.
2. Create a Cloudflare Pages project from the repository.
3. Leave the build command empty.
4. Use `/` as the output directory.
5. Add `gitstatus.tech` as the custom domain in Cloudflare Pages.
6. Keep `https://gitstatus.tech/` as the canonical URL in `index.html`,
   `robots.txt`, and `sitemap.xml`.
