# 11ty CMS boilerplate
 ... [link to live demo]()-->
![screenshot of website]()

## Table of Contents

    -   [✅ To-do](#--to-do)
    -   [📋 Concept](#---concept)
    -   [⚙️ Installation](#---installation)
    -   [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
    -   [🗺️ License](#----license)

## ✅ To-do

See the [project board]() for the current to-do's

## 📋 Concept


## ⚙️ Installation

Clone this repo to your own device:

```bash
$ git clone [folder url]
```

Navigate to this folder and run:

```bash
npm install
```

Then:

```bash
npm run dev
```

#### Dependencies

```json
"devDependencies": {
      "@11ty/eleventy": "^0.11.0",
    "cross-env": "^7.0.2",
    "dotenv": "^8.2.0",
    "ejs": "^3.0.1",
    "express": "^4.17.1",
    "mkdirp": "^0.5.1",
    "node-fetch": "^2.6.1",
    "node-sass": "^4.14.1",
    "node-sass-glob-importer": "^5.3.2",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2"
  },
  "dependencies": {
  "fast-glob": "^3.2.4",
    "inuitcss": "^6.0.0",
    "nodemon": "^2.0.2"
  }
```

#### Scripts

```json
  "scripts": {
    "predev": "rimraf _site",
    "dev:eleventy": "npx @11ty/eleventy --formats=html,njk,ejs,gif,jpg,png,css --serve --port=3000",
    "dev:css": "sass --watch assets/css:_site/",
    "dev": "cross-env ELEVENTY_ENV=development run-p dev:*",
    "debug": "DEBUG=* eleventy",
    "prebuild": "rimraf _site",
    "build": "cross-env ELEVENTY_ENV=production run-s build:*",
    "build:eleventy": "eleventy",
    "build:css": "node-sass --importer node_modules/node-sass-glob-importer/dist/cli.js main.scss: _site/main.css"
  }
```

## 👯🏿‍ Features (+ wishlist)
-   [ ] 


## 🗺️ License
