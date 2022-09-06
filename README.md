# LP Compatibility Overview

Main page: https://flixbox.github.io/lp-compat/

## Initial setup

- Install Node.js
- Run `npm install --force` (One dependency is a bit broken in its dependency tree, don't worry about it)
- Run `npm run start`

## Adding a new game

- Add it to the file `static/compat-data/apps.json`
- Run `npm run scrape` to download play store data
- Run `npm run start` to check if it's being shown
- Prefix your commit with "feat:" to make sure it will show up in Discord. Make sure you always wait for the CI to finish and pull the changes before committing, otherwise you'll create a merge commit and the Discord script will ignore the changes.

You can skip the scraping if you want. Then the CI will do it for you and commit the scraped data. Just do a `git pull` once it's done.
