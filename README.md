# WEB103 Project 1 - *CourseStack*

Submitted by: **Nathachanok Netmaneesuk**

About this web app: **A curated collection of high-signal software engineering courses handpicked for aspiring and practicing engineers.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as `localhost:3000/bosses/crystalguardian` and `localhost:3000/mantislords`**
  - [ ] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Each course includes additional attributes beyond the basic three: provider, skill level, topics, and languages
- [x] Reusable navbar injected via a shared `navbar.js` script across all pages
- [x] Client-side 404 redirect for invalid course IDs on the detail page
- [x] Detail page dynamically updates the browser tab title to the course name
- [x] Card descriptions and titles are clamped for a consistent grid layout

## Video Walkthrough

Here's a walkthrough of implemented required features:

<a href="https://www.loom.com/share/420f596cb7784d21a6150485543868b5">
  <img src="https://cdn.loom.com/images/originals/641e6fe08da14b188796a211d8b41461.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy82NDFlNmZlMDhkYTE0YjE4ODc5NmEyMTFkOGI0MTQ2MS5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3ODEwNzMyMjJ9fX1dfQ__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ&Signature=Gq4Lmv8mBZrihP4JVGEvMqaiD6vwNR-uSEKEAKYrUOEhD1E62lfn3pjLqsjfm83gNt1hs1g0b0HPfAf23I661YoczU1gqzkxUIxvjQ-z0S0PQJgbOByQ503VsFCqOcieFZ4sKziw4bEIkMseeFvA4bkQGFsptuu2gELQP8x5OMfT2XyAEYVcStOdrOmUNYm0hl3CV6-sliGlMoti9llXTyWKmyRqX779c-yKmLX2KFbk2zluT7eIKa%7ExPS54qZ1YPr%7EQWpwfhvtvj8o9T9OYzxguMauPxSHefxzZXpzdeZexQvbIWcMJu8ZkhlSmtwS0hT8c-CgzAF-9RSmxt0bLZw__" width="600" alt="CourseStack Demo" />
</a>


<!-- Replace this with whatever GIF tool you used! -->
Recorded with Loom
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The main challenge was establishing a clean client/server separation where the client focuses solely on providing a styled UI and handling interactions, while the server is responsible only for routing and serving the correct HTML files. An additional layer of separation was also maintained between page routing and the API routes to keep each concern clearly defined.

## License

Copyright [2026] [Nathachanok Netmaneesuk]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.