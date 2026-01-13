# SenpaiLearn Website

This is a monorepo containing all the code for the SenpaiLearn website.

Prod: [senpailearn.com](https://senpailearn.com) <br>
Staging: [staging.senpailearn.com](https://staging.senpailearn.com)

## Architecture

|                | Frontend (./frontend)                      | CMS (./strapi)                |     |
| -------------- | ------------------------------------------ | ----------------------------- | --- |
| Tech Stack     | Tanstack Start                             | Strapi                        |     |
| Infrastructure | GCP / Firebase                             | Strapi Cloud                  |     |
| IaC?           | Yes (OpenTofu)                             | Yes (I suppose, bootstrapped) |     |
| CI?            | Only FE, no Infra (on push to origin/main) | No                            |     |
| How to deploy  | `./deploy.sh (staging\|prod)`.             | `pnpm run deploy`             |     |

## TODOs

### Proper 404 handling

- Right now we hit an invariant error because the 404 page expects the URL to be /404. This is because firebase hardcodes the 404 page to be 404.html, but TanStack start does not support it. Possible solutions:
	- Migrate from Firebase to something else
  - Rewrite to SSR instead of SSG
	- Make 404.html a pure static page in frontend/public (likely best)
	- Rewrite everything to index.html (convert to SPA)

