# Static website starter: deploy plain HTML, CSS and JavaScript from GitHub

[English](README.md) | [Français](README.fr.md) | [日本語](README.ja.md) | [Español](README.es.md)

A static website starter for the **Static site** stack on the [MitsuruTech Learning
Platform](https://mitsurutech.co.uk/learning): plain HTML, CSS and JavaScript with nothing running
behind it. Deploy it free from its GitHub address with
[deploy a web app from GitHub](https://mitsurutech.co.uk/apps), no account and nothing to install; the
manual's [guide to deploying apps from GitHub](https://mitsurutech.co.uk/help/deploy-app) has the steps.

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

## Licence

This work is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). You may share it and adapt it for learning and teaching, if you credit Mitsuru Technologies Ltd, do not use it commercially, and share anything you make from it under the same licence. The full text is in the `LICENSE` file. It covers the files in this repository.

## About

Made by [Mitsuru Technologies](https://mitsurutech.co.uk) for the
[MitsuruTech Learning Platform](https://mitsurutech.co.uk/learning): Python, Java, Go, Node, SQL and
Linux in the browser for schools and colleges, with container labs, web apps deployed from GitHub, and
quizzes that mark themselves. Try code with no account in the
[playground](https://mitsurutech.co.uk/playground).
