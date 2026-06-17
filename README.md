# WEB103 Project 2 - *CourseStack*

Submitted by: **Nathachanok Netmaneesuk**

About this web app: **A curated collection of high-signal software engineering courses handpicked for aspiring and practicing engineers. Served from a Render-hosted PostgreSQL database with filtering by provider, skill level, topic, and language.**

Time spent: **5** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**


The following **optional** features are implemented:

- [x] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [x] Filter by multiple attributes simultaneously (provider, skill level, topic, language)
- [x] Filter options are fetched dynamically from the database — no hardcoded values
- [x] Full TypeScript on the server with strict types throughout
- [x] Repository pattern separating SQL from HTTP controller logic
- [x] Dynamic parameterized WHERE clause — only active filters are included, no SQL injection risk
- [x] AbortController cancels stale in-flight filter requests at the network level
- [x] Input length validation on all string inputs at the API boundary
- [x] Subresource Integrity (SRI) on CDN stylesheet with pinned version
- [x] Production security headers — CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- [x] PostgreSQL connection and query timeouts to prevent pool starvation

## Video Walkthrough

Here's a walkthrough of implemented required features:

<a href='https://www.loom.com/share/5e0d092074d44dae8d5aaa82bf960929'>
  <img src='https://cdn.loom.com/sessions/thumbnails/5e0d092074d44dae8d5aaa82bf960929-01fb6289de3449a7.jpg' title='CourseStack Demo' width='600' alt='Video Walkthrough' />
</a>

## Notes

**Windows environment variable conflict** — Node's `--env-file` flag does not override variables already set in the system environment. `PGUSER` and `PGDATABASE` were set as Windows user-level env vars from a prior Postgres install, causing `pg` to connect as the wrong user. Resolved by removing them from the Windows registry and restarting VS Code so the new process inherited the clean environment.

**Express 5 type widening** — Express 5 broadened `req.params` values from `string` to `string | string[]`. Calling `getCourseById(req.params.courseId)` produced a TypeScript error because the repository expects a `string`. Fixed by typing the route handler as `Request<{ courseId: string }>`.

**SSL configuration** — Rather than hardcoding `ssl: { rejectUnauthorized: false }` in the Pool constructor, `PGSSLMODE=no-verify` is set in `.env`. The `pg` library reads this env var automatically, keeping all connection config in one place.

**Route ordering** — Express matches routes in registration order, so literal segments must be registered before parameterized ones. `GET /api/courses/filters` must appear before `GET /api/courses/:courseId`, otherwise Express treats `filters` as a courseId and the endpoint is silently unreachable.

**SRI and version pinning** — Using a range selector like `@picocss/pico@2` breaks Subresource Integrity because jsdelivr can resolve it to a newer patch version whose content no longer matches the hash, causing the browser to silently block the stylesheet. The version must be pinned to an exact release (e.g. `@2.0.6`) for SRI to work. Upgrading PicoCss in the future requires regenerating the hash with `curl -s <cdn-url> | openssl dgst -sha384 -binary | openssl base64 -A`.

## License

Copyright [2026] [Nathachanok Netmaneesuk]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.