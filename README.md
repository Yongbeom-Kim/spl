# SenpaiLearn Website

This is a monorepo containing all the code for the SenpaiLearn website.

Prod: [senpailearn.com](https://senpailearn.com)
Staging: [staging.senpailearn.com](https://staging.senpailearn.com)

## Architecture

|                | Frontend (./frontend)                            | CMS (./strapi)                |     |
| -------------- | ------------------------------------------------ | ----------------------------- | --- |
| Tech Stack     | Tanstack Start                                   | Strapi                        |     |
| Infrastructure | GCP / Firebase                                   | Strapi Cloud                  |     |
| IaC?           | Yes (OpenTofu)                                   | Yes (I suppose, bootstrapped) |     |
| CI?            | Only FE, no Infra    (on push to origin/main)    | No                            |     |
| How to deploy  | `pnpm run build && ./deploy.sh (staging\|prod)`. | `pnpm run deploy`             |     |
