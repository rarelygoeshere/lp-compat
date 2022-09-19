# LP Compatibility Overview

A website that displays which apps can be patched with Lucky Patcher.

Main page: https://flixbox.github.io/lp-compat/

## Initial setup

- Install Node.js and yarn
- Run `yarn`
- Run `npm run start`

## Adding a new game

- Add it to the file `static/compat-data/apps.json`
- If it's completely new (i. e. Play Store data hasn't been scraped yet) the page will crash. The CI will scrape for you if you check in, but you can also run `npm run scrape` to check if everything works out.
- Add any custom features with the following syntax: `<color>::<feature text>`. Example: `warning::IAP patch only works on version 4.2; download APK on APKPure`
- Make sure you don't add any `,` characters to the feature list, otherwise the Discord regex gets confused
- Run `npm run start` to check if it's being shown

Or just use the Discord bot.
