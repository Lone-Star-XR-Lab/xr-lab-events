# XR Lab Upcoming Events

A small static page that lists upcoming events for the Lone Star College
**XR Lab**. It's published on GitHub Pages and meant to be embedded as an
`<iframe>` in other sites (the college CMS, lab pages, kiosks, etc.), so events
can be added or updated by editing one file instead of waiting on CMS approval.

**Live site:** https://lone-star-xr-lab.github.io/xr-lab-events/

It comes in a **dark mode** (navy, gold, and white from the XR Lab logo, with a
faint starfield) and a **light mode**. You choose which one with the URL.

## Embedding it

Paste one of these into the page that should show the events:

```html
<!-- Dark mode -->
<iframe
    src="https://lone-star-xr-lab.github.io/xr-lab-events/?theme=dark"
    title="XR Lab Upcoming Events"
    width="100%"
    height="1000"
    style="border:0;">
</iframe>

<!-- Light mode -->
<iframe
    src="https://lone-star-xr-lab.github.io/xr-lab-events/?theme=light"
    title="XR Lab Upcoming Events"
    width="100%"
    height="1000"
    style="border:0;">
</iframe>
```

### URL options

| Option | What it does |
|---|---|
| `?theme=dark` | Always dark mode. |
| `?theme=light` | Always light mode. |
| *(no `theme`)* | Matches the viewer's system light/dark setting and shows a sun/moon toggle button. |
| `?header=off` | Hides the logo and "Upcoming Events" title. Use it when the host page already has its own heading. |

You can use more than one option at a time: `?theme=dark&header=off`.

### Optional: auto-resizing the iframe

An iframe normally has a fixed height. If the host page lets you add a script,
the iframe can resize itself to fit the events. The events page sends its
height to the parent page whenever it changes. Add this script to the host
page **once**, below the iframe:

```html
<script>
  window.addEventListener("message", function (e) {
    if (e.origin !== "https://lone-star-xr-lab.github.io") return;
    if (!e.data || e.data.type !== "xr-lab-events:height") return;
    document.querySelectorAll('iframe[src*="xr-lab-events"]').forEach(function (f) {
      f.style.height = e.data.height + "px";
    });
  });
</script>
```

If the host can't run scripts (many CMSs block them), just keep a fixed
`height`.

## Files

```
xr-lab-events/
├── index.html   Page structure, both themes, and rendering logic. Rarely needs editing.
├── events.js    The event list. Edit this to add/change/remove events.
├── assets/      Flyer images referenced by events.js, plus the XR Lab logo.
├── AGENTS.md    Notes for AI coding assistants (Claude, Copilot, Cursor, etc.).
└── CLAUDE.md    Points Claude Code at AGENTS.md.
```

Day-to-day updates only touch `events.js` and `assets/`.

## Adding a new event

1. Add the flyer image to `assets/` (PNG or JPG). Keep file names lowercase
   with hyphens, no spaces (e.g. `xr-open-house.png`). Compress it first if
   it's over ~1 MB, using a tool like Squoosh or TinyPNG.
2. Open `events.js`. Copy the **FIELD REFERENCE** block from the comment at
   the top (or the commented-out example) into the `events` list, remove the
   `//` marks, and fill it in. See [Event fields](#event-fields).
3. Save, commit, and push:
   ```
   git add events.js assets/your-flyer.png
   git commit -m "Add [event name]"
   git push
   ```
4. GitHub Pages redeploys automatically, usually within a minute or two.

## Editing or removing an event

- **Edit:** find the event's `{ ... }` block in `events.js` and change the field(s).
- **Remove early:** delete the event's whole `{ ... }` block, including the comma after it.
- **Let it expire:** do nothing. See [Automatic expiration](#automatic-expiration).

## Event fields

| Field | Required? | Notes |
|---|---|---|
| `title` | Required | The event's headline. |
| `date` | Required | Format `YYYY-MM-DD`. Used for sorting, the date badge, and the "Date:" line. |
| `time` | Optional | Free text, e.g. `"1:00 PM – 3:00 PM"`. |
| `location` | Optional | Free text, e.g. `"XR Lab, E251"`. |
| `course` | Optional | A MyWorkshops course code, e.g. `"LSC-5247"`. Shown as "Course:" **and** used to build a "Register in MyWorkshops" link automatically if `link` isn't set. |
| `description` | Optional | A sentence or two shown under the details. |
| `image` | Optional | Path to the flyer, e.g. `"assets/xr-open-house.png"`. Click to enlarge. |
| `imageAlt` | Recommended if `image` is set | Describes the flyer for screen readers. Describe what the image shows instead of repeating the title. |
| `link` | Optional | URL for the button. Overrides the automatic `course` link if both are set. |
| `linkText` | Optional | Button text. Defaults to `"Learn More"`. |
| `expires` | Optional | Format `YYYY-MM-DD`. Defaults to `date`. See below. |

## Automatic expiration

An event stays visible **through the end of its `expires` date** and
disappears the next day. If `expires` isn't set, `date` is used. Most one-day
events never need to be deleted by hand. For multi-day events, set `expires`
to the last day.

Events are sorted by date and grouped under month headings automatically. If
there are no current events, the page shows a "No events scheduled right now"
message.

## MyWorkshops registration links

For events tied to a MyWorkshops course code, set `course` and leave `link`
out. The page builds this link:

```
https://myworkshops.lonestar.edu/psc/elmprd/EMPLOYEE/ELM/c/LM_OD_EMPLOYEE_FL.LM_FND_LRN_FL.GBL?Page=LM_FND_LRN_RSLT_FL&Action=U&KWRD=<course>
```

For anything else (an external form, an info page), set `link` directly.

## Previewing changes before you push

Open this folder in VS Code and use the **Live Server** extension
(right-click `index.html` → "Open with Live Server"). It reloads on save.
Add `?theme=dark` or `?theme=light` to the preview URL to check each theme.

Opening `index.html` directly from the file system also works.

## Changing the look

All colors are CSS variables at the top of the `<style>` block in
`index.html`. One set is for light mode (`:root[data-theme="light"]`) and one
is for dark mode (`:root[data-theme="dark"]`). Change a color in both blocks
if it should change in both themes. On light backgrounds the gold
(`#f5c400`) is only used for decoration such as lines and borders, because
gold text on white is hard to read.

## Known limitations

- With a fixed iframe height, a short list leaves empty space below it and a
  long list scrolls inside the frame. Use the auto-resize script above if the
  host allows it.
- Headings use the Montserrat font from Google Fonts. If a network blocks
  Google Fonts, the page falls back to the system font and still works.
