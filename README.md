# hello-static

A static site for the **Static site** stack on the Mitsuru Technologies learning
platform: plain HTML, CSS and JavaScript with nothing running behind it.

Deploy it from the **Deploy App** tab with this repository's URL and the language set
to *Static site*. The defaults are:

- **Build:** `test -f index.html || { echo '...'; exit 1; }`
  There is nothing to build, so the build checks there is something to serve. A
  repository whose pages are in a subfolder would otherwise deploy fine and answer
  404 at `/`, which leaves you a working address and nothing to debug.
- **Start:** `python3 -m http.server $PORT`
  It serves the checkout. If your pages are in a subfolder, add
  `--directory public` rather than moving them.

## The files

| File | What it is for |
| --- | --- |
| `index.html` | The page itself. It has to be in the repository root, or change the start command. |
| `style.css` | Linked from the page, so serving it proves stylesheets are found. |
| `script.js` | Sets the time and counts button presses, so you can see JavaScript really runs. |

## What it does not have

No build step, no dependencies and no package file, which is the point: this is the
one stack whose build reaches GitHub and nothing else.
