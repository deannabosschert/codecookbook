# Code Cookbook
[![Netlify Status](https://api.netlify.com/api/v1/badges/817f5d6e-e0e5-4400-aa9d-5e2c7fbac983/deploy-status)](https://app.netlify.com/sites/code-cookbook/deploys)

 ... [link to live demo](https://code-cookbook.netlify.app/)-->
 
Compliant with the WCAG 2.1 level AA.
 
![screenshot of website](https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/8774/23gg2Rk7FiUtF9gcPvtaVvBh9kF1iOIBwSHHTQ3o.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJHMEUCIQC8BaROlXwnEepMXp13iqXKA8K34OwDHnxJruUL26JZ6gIgGnUhnQo%2BRK2rnE22PyONnBilCbwHfSKOt5M6cvs%2FL2UqoQIIHRAAGgw5MTk1MTQ0OTE2NzQiDAWOHF%2BThWmJTBG8xSr%2BAarTg2ZA3qcN%2Bp%2BDoTaYNY5JfJMc6rMilL%2BeW%2FMURWQUla5bxrDbOaUJwFKqTICh2aPEuniq3piNa5uulcVMe%2BwRzVV%2FGApBEwnnNC%2FWtRmtNTfuwx%2BpPsdqpOHyiG%2BsTVjL%2FesgaqRtQAB6Y3DQI4n37HoucTKlu07S2UbXccwsAxTXBroa2fnmpKD%2BjBNae9fVQlqbfah6O1jsyUzZL9BxFeFRob3JKYfCCR1qE9ZWy87zIzz39SQGRybR21aQEanuhGhCQomEh9KtwKmAerLtO3GbUwb46o9Yj4bZ0wx%2FCxGSy2fuIDu22KcTP60P06EgN0P9RzMTWCcxxR0tMJnV248GOpoBoC5J8N%2BnclRGEQ1lpQdjw72pFEsCS3WUy2iZ8sBYWBGIGmyP6fykpMazrXpc7WRcYz%2FLvA568oyzjFM5etpeaC7N41NPLFh8m4dxxgyJD93yfF%2F5uBMgLYQjvZraR8s6ig3BXbpL%2BTzmd5DzvjavnYzQyqDyKpDrSkBxI51BwajxW4KOl3g4D1nJHp4Vvr%2F%2BGDLOpGS6gJUr3Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5MF2VVMNLI5GBWVE%2F20220130%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220130T211845Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=017ef5bb59bcb32ec8c115b78384284f1568e5e6ef6a734489fed7d58dfc41c7)

## Table of Contents

    -   [✅ To-do](#--to-do)
    -   [📋 Concept](#---concept)
    -   [⚙️ Installation](#---installation)
    -   [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
    -   [🗺️ License](#----license)

## ✅ To-do

See the [project board]() for the current to-do's.

## 📋 Concept
Deze website is te gebruiken als naslagwerk voor zowel nieuwe als lopende projecten.

Een deel van dit naslagwerk bestaat uit algemene richtlijnen en gemaakte afspraken die over meerdere projecten gelden. Deze zullen in een volgende versie als aparte gemarkeerd worden en de weergave hiervan getoggled.

Verder is een deel van dit naslagwerk project-specifiek: informatie benodigd voor bijvoorbeeld de handoff van design naar development, projectdocumentatie, benodigde bestanden.



## ⚙️ Installation

Clone this repo to your own device:

```bash
$ git clone https://github.com/deannabosschert/codecookbook/
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
    "@11ty/eleventy": "^0.12.1",
    "cross-env": "^7.0.2",
    "dotenv": "^8.2.0",
    "ejs": "^3.0.1",
    "express": "^4.17.1",
    "html-minifier": "^4.0.0",
    "mkdirp": "^0.5.1",
    "node-fetch": "^2.6.1",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2"
  },
  "dependencies": {
    "chart.js": "^2.9.4",
    "chartjs-plugin-datalabels": "0.7.0",
    "claymorphism-css": "^1.0.5",
    "d3": "^7.1.1",
    "d3fc": "^15.2.4",
    "@11ty/eleventy-img": "^0.8.2",
    "eleventy-plugin-pwa": "^1.0.8",
    "fast-glob": "^3.2.4",
    "inuitcss": "^6.0.0",
    "lorem-memesum": "^1.2.0",
    "netlify-cms-app": "^2.15.61",
    "node-sass": "^6.0.1",
    "node-sass-glob-importer": "^5.3.2",
    "nodemon": "^2.0.2"
  }
```

#### Scripts

```json
  "scripts": {
    "predev": "rimraf _site",
    "dev:scripts": "node src/scripts/scripts.js",
    "dev:eleventy": "npx @11ty/eleventy --formats=html,njk,ejs,gif,jpg,png,css --serve --port=3000",
    "dev:css": "sass --watch assets/css:_site/",
    "dev": "cross-env ELEVENTY_ENV=development run-p dev:*",
    "debug": "DEBUG=* eleventy",
    "prebuild": "rimraf _site",
    "build": "cross-env ELEVENTY_ENV=production run-s build:*",
    "build:eleventy": "npx @11ty/eleventy --formats=html,njk,ejs,gif,jpg,png,css --serve --port=3000",
    "build:css": "sass --watch assets/css:_site/"
  }
```

## 👯🏿‍ Features (+ wishlist)
