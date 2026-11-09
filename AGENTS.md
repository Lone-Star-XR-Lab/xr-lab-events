# AGENTS.md

Guidance for AI coding assistants working in this repo. Human-facing docs are
in [README.md](README.md). Read it for field definitions and embed snippets.

## What this is

A static, dependency-free events page for the Lone Star College XR Lab. It is
hosted on GitHub Pages at https://lone-star-xr-lab.github.io/xr-lab-events/
and embedded in other sites with an `<iframe>`. There is no build step, no
package manager, no framework, and no tests. Pushing to `main` deploys the
site.

## Files

- `events.js`: the only data file. It declares `const events = [ ... ];`, a
  global loaded with a plain `<script>` tag (not a module). **Most requests
  only touch this file and `assets/`.**
- `index.html`: all markup, CSS, and rendering JS in one file.
- `assets/`: flyer images and `xr-lab-logo.png`, which is used as the header
  logo and favicon. Don't delete or rename the logo.

## Common tasks

### Add an event
Add an object to the `events` array in `events.js`. Fields are listed in the
FIELD REFERENCE comment at the top of that file and in the README table.
- `title` and `date` (`YYYY-MM-DD`) are required. Everything else is optional.
- Order in the array doesn't matter. The page sorts by date and groups by month.
- If the event has a MyWorkshops course code, set `course` and **don't** set
  `link`. The registration URL is built automatically. Use
  `linkText: "Register in MyWorkshops"` to match past events.
- If an image is added, also set a descriptive `imageAlt`.
- Image paths are relative to the site root: `"assets/name.png"`. Use
  lowercase-hyphenated file names with no spaces.
- For multi-day events, set `expires` to the last day.
- Keep the file valid JavaScript. A missing comma or quote makes the whole
  page show "Unable to load events". Run `node --check events.js` after
  editing.

### Remove or update an event
Edit or delete the matching object. Past events disappear on their own the
day after `expires` (or `date`), so you don't need to delete them unless
asked.

### Change styling
- Theme colors are CSS custom properties in two blocks at the top of the
  `<style>` in `index.html`: `:root, :root[data-theme="light"]` and
  `:root[data-theme="dark"]`. Every new color needs a variable defined in
  **both** blocks. Don't hard-code colors in component rules. The only
  exceptions are the lightbox and zoom hint, which always sit on a dark
  overlay.
- Dark mode colors come from the XR Lab logo: navy `#061229`/`#0c1f40`, gold
  `#ffd21f`, and white. In light mode, gold `#f5c400` is decorative only
  (lines, borders, badge month text on navy). Don't use gold for text on a
  light background, because the contrast is too low.
- The layout must work from 320px wide (phone iframes) up to about 1000px.
  Below 600px, cards stack vertically.

## Behavior to preserve

- **URL options** (read in the inline `<script>` in `<head>` before first paint):
  - `?theme=dark|light` sets `data-theme` and `data-theme-locked="true"`,
    which hides the toggle button.
  - With no `theme`, the page follows `prefers-color-scheme` and shows the
    toggle button.
  - `?header=off` (also `0`/`false`) sets `data-header="off"` and hides the
    header.
  Existing embeds depend on these, so don't rename them.
- **Iframe height messages:** when framed, the page sends
  `{ type: "xr-lab-events:height", height }` to `window.parent` from a
  ResizeObserver. Host pages may listen for this exact `type` string.
- **Local date parsing:** `parseLocalDate` parses `YYYY-MM-DD` as a local
  date. Don't replace it with `new Date("YYYY-MM-DD")`, which parses as UTC
  and makes events vanish a day early in US time zones.
- **No `innerHTML` with event data.** Cards are built with the `el()` helper
  and `textContent`. The only `innerHTML` use is a static SVG icon.
- **Accessibility:** the flyer opens a lightbox (Esc closes it, focus returns
  to the trigger, and `<main>` is `inert` while it's open). Links that open a
  new tab carry a visually-hidden "(opens in a new tab)". Keep `aria-label`s
  in sync with any text changes.
- **Empty and error states:** `#no-events` shows when nothing is upcoming, and
  `#load-error` shows if `events.js` throws or doesn't define an array.

## Conventions

- Tabs for indentation in `index.html` and `events.js`.
- No external JS libraries. The only external request is Google Fonts
  (Montserrat), and the page must still work if it fails to load.
- Commit messages are short and imperative, e.g. "Add Dec 3 XR open house".
- Update README.md when you change URL options, fields, or embed
  instructions.

## Checking your work

1. Run `node --check events.js` to catch syntax errors.
2. Open `index.html` in a browser (or VS Code Live Server). Check
   `?theme=dark`, `?theme=light`, no theme (the toggle should show), and a
   narrow window of about 390px.
3. The browser console should show no errors.
