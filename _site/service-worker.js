/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "783da31996a53b84e3d493b0f099f9be"
  },
  {
    "url": "admin/index.html",
    "revision": "d859791f2a958de63f72132c1b49c2a8"
  },
  {
    "url": "assets/fonts/08b57253-2e0d-4c12-9c57-107f6c67bc49.woff2",
    "revision": "3fe395dbd0b4dc5922ed3b2c7d32ce93"
  },
  {
    "url": "assets/fonts/08edde9d-c27b-4731-a27f-d6cd9b01cd06.woff",
    "revision": "fce8ffdcc9092a56069ffe20ff01c315"
  },
  {
    "url": "assets/fonts/240c57a0-fdce-440d-9ce3-85e0cb56f470.woff2",
    "revision": "44c2f9f50bc940ff401524eb81134771"
  },
  {
    "url": "assets/fonts/2a34f1f8-d701-4949-b12d-133c1c2636eb.woff",
    "revision": "31a1da99f1cdd5b31f5277ed8929f237"
  },
  {
    "url": "assets/fonts/7802e576-2ffa-4f22-a409-534355fbea79.woff",
    "revision": "a58fa2078c904ea858f48e595dd072c4"
  },
  {
    "url": "assets/fonts/7b415a05-784a-4a4c-8c94-67e9288312f5.woff",
    "revision": "e38a34b15b13ac1638266924b7f07ccf"
  },
  {
    "url": "assets/fonts/800da3b0-675f-465f-892d-d76cecbdd5b1.woff2",
    "revision": "aa208d416edf264fed83943d57a68ecf"
  },
  {
    "url": "assets/fonts/f9c5199e-a996-4c08-9042-1eb845bb7495.woff2",
    "revision": "2f1db7f0595b6cd4f65dd6cef12c1249"
  },
  {
    "url": "assets/fonts/helvetica-08032021/demo-async.css",
    "revision": "625f6734c25aad7f3ba22401c3a6494e"
  },
  {
    "url": "assets/fonts/helvetica-08032021/demo.css",
    "revision": "33e3b9ffc176f8342976d94df4f49101"
  },
  {
    "url": "assets/fonts/helvetica-08032021/mtiFontTrackingCode.js",
    "revision": "32dd789522cc6923c80141fcf5d3a614"
  },
  {
    "url": "assets/fonts/HN500.ttf",
    "revision": "3644b73bc439d4f39f3dc4474c8aa8ed"
  },
  {
    "url": "assets/img/content/design/context/technisch-ontwerp.png",
    "revision": "359de4ede544f02c2b72a16df92ea29c"
  },
  {
    "url": "assets/img/content/design/context/testscenario's.png",
    "revision": "ad22796c4d57448e30a5f066e3b0d96f"
  },
  {
    "url": "assets/img/content/design/ontwerp/afbeeldingen/background-1.jpg",
    "revision": "839e19e0b0730b8d0347e4ffa78f9066"
  },
  {
    "url": "assets/img/content/design/ontwerp/afbeeldingen/background-2.jpg",
    "revision": "34f5379565391910c82b81fe6ac09389"
  },
  {
    "url": "assets/img/content/design/ontwerp/afbeeldingen/background-3.jpg",
    "revision": "9cc8e8391a5498106d7e964fafd1df2a"
  },
  {
    "url": "assets/img/content/design/ontwerp/afbeeldingen/rectangle-1.jpg",
    "revision": "fb778ca0c88ab0098564f98e1a1df9c3"
  },
  {
    "url": "assets/img/content/design/ontwerp/afbeeldingen/rectangle-2.jpg",
    "revision": "a15e3feaba6e326dada5d6c9becd22cd"
  },
  {
    "url": "assets/img/content/design/ontwerp/afbeeldingen/rectangle-3.jpg",
    "revision": "c81ae92b97a88ac1de0ac671e9e7c134"
  },
  {
    "url": "assets/img/content/design/ontwerp/afbeeldingen/square-1.jpg",
    "revision": "683ed3df363d188539fb540b4eafadb1"
  },
  {
    "url": "assets/img/content/design/ontwerp/afbeeldingen/square-2.jpg",
    "revision": "7fa35a93d3716a3811d59b34d13eaf33"
  },
  {
    "url": "assets/img/content/design/ontwerp/componenten-foto/buttons_1.png",
    "revision": "868c93cd002a9023e60d0add14998995"
  },
  {
    "url": "assets/img/content/design/ontwerp/componenten-foto/buttons_2.png",
    "revision": "db46172a96c4c36a92166ed56998182c"
  },
  {
    "url": "assets/img/content/design/ontwerp/componenten-foto/buttons.png",
    "revision": "b8428fcae13695008794953f17032a75"
  },
  {
    "url": "assets/img/content/design/ontwerp/componenten-foto/elevation.png",
    "revision": "29b448d9d21e68d15bd1596770221372"
  },
  {
    "url": "assets/img/content/design/ontwerp/componenten-foto/grid-spacing.png",
    "revision": "0e094ef0169f6b7c355fc3a2a61fbce5"
  },
  {
    "url": "assets/img/content/design/ontwerp/componenten-foto/icons.png",
    "revision": "a707f35b0d986683000b509c83da77aa"
  },
  {
    "url": "assets/img/content/design/ontwerp/componenten-foto/labels.png",
    "revision": "daaa7e25248b3cf46f14d7e56dec5dd8"
  },
  {
    "url": "assets/img/content/design/ontwerp/componenten-foto/other.png",
    "revision": "129bd623cdf9c9a034abffc7a3b059f0"
  },
  {
    "url": "assets/img/content/design/ontwerp/design-desktop.png",
    "revision": "995534f4e592e050b040925963b8884d"
  },
  {
    "url": "assets/img/content/design/ontwerp/design-mobile.png",
    "revision": "824ee2896f0ed08c59f7e6f782813b9c"
  },
  {
    "url": "assets/img/content/design/ontwerp/font-1.png",
    "revision": "81319a457b9f323380801c94e38e2984"
  },
  {
    "url": "assets/img/content/design/ontwerp/font-2.png",
    "revision": "869403109e6acbaf290d972f85663a4a"
  },
  {
    "url": "assets/img/content/design/ontwerp/font-3.png",
    "revision": "5402e07a4d084a66f45a12e6cbaf9dde"
  },
  {
    "url": "assets/img/content/design/ontwerp/font-4.png",
    "revision": "2b61e8211ca214b24428c8e151d469fc"
  },
  {
    "url": "assets/img/content/design/ontwerp/font-5.png",
    "revision": "c99cde3178967b7f42155e7d5b4eecf1"
  },
  {
    "url": "assets/img/content/design/ontwerp/font-6.png",
    "revision": "2f6f6a262b4fcf3dc4e53a84f1d3f521"
  },
  {
    "url": "assets/img/content/design/ontwerp/icons/icon-1.png",
    "revision": "a919deed39946437ce08e14af4bf36a3"
  },
  {
    "url": "assets/img/content/design/ontwerp/icons/icon-2.png",
    "revision": "cac95e8c6bf44ca9a805fbd4aaa028b4"
  },
  {
    "url": "assets/img/content/design/ontwerp/states/big.png",
    "revision": "542caa402548fa7e7491a609a25c1813"
  },
  {
    "url": "assets/img/content/design/ontwerp/states/dismissable.png",
    "revision": "ce43bca5c87d7052f2c5e490d47513d3"
  },
  {
    "url": "assets/img/content/design/ontwerp/states/overview.png",
    "revision": "5f7c5bec29904665106c201bd377c731"
  },
  {
    "url": "assets/img/content/design/ontwerp/states/small.png",
    "revision": "069cd2e73628c7e6eabf432dc3997a45"
  },
  {
    "url": "assets/img/content/design/ontwerp/states/text.png",
    "revision": "8624a44536ad518fd34251a1de5bade7"
  },
  {
    "url": "assets/img/content/development/coding-guidelines/css-inspiration.jpg",
    "revision": "dfd05941120ca2db81861dedfce76e06"
  },
  {
    "url": "assets/img/content/development/deployment/1_login.png",
    "revision": "3564ce8550543fe15ca97f520f202c94"
  },
  {
    "url": "assets/img/content/development/deployment/2_dashboard.png",
    "revision": "6f93aa6adb1734e01464dd6bbe5fa2ee"
  },
  {
    "url": "assets/img/content/development/deployment/3_new.png",
    "revision": "2ed59026a4d149572bad1959da5616a1"
  },
  {
    "url": "assets/img/content/development/deployment/4_connect.png",
    "revision": "6aefe03e09586704b23f3ec254946d87"
  },
  {
    "url": "assets/img/content/development/deployment/5_config.png",
    "revision": "a18e6eaf12008e1bf8c63ba1abe40d93"
  },
  {
    "url": "assets/img/content/development/deployment/6_procfile.png",
    "revision": "8e40bac97c02d3b0f20c2eaf7b47cc19"
  },
  {
    "url": "assets/img/content/development/deployment/ftp/1. start.png",
    "revision": "55fb2b814a9f52e7d2ff6e245ebd0d01"
  },
  {
    "url": "assets/img/content/development/deployment/ftp/2. connect.png",
    "revision": "b4080f0c86514659dda480bc2dabbf06"
  },
  {
    "url": "assets/img/content/development/deployment/ftp/3. connected.png",
    "revision": "00d9238858f0bbaec98f2c2527431bda"
  },
  {
    "url": "assets/img/content/development/deployment/ftp/4. navigeer.png",
    "revision": "bba376bdb0732384f8076a691f278099"
  },
  {
    "url": "assets/img/content/development/deployment/ftp/5. upload.png",
    "revision": "a0b646f5ce88983b21225298b06ccb9a"
  },
  {
    "url": "assets/img/content/development/deployment/ftp/6. delete.png",
    "revision": "bf383700a9989cd87d719d72f91a5244"
  },
  {
    "url": "assets/img/content/development/deployment/ftp/7. delete-confirm.png",
    "revision": "76d7c8cc491b02a52f35bbac365671f8"
  },
  {
    "url": "assets/img/content/development/deployment/ftp/8. close.png",
    "revision": "0e8c5087b995b27bf85b4f18c4717f35"
  },
  {
    "url": "assets/img/content/development/getting-started/current_project_roadmap.jpg",
    "revision": "af8cde543731781f2c6a323c1f3e7e1a"
  },
  {
    "url": "assets/img/content/development/getting-started/tools.jpg",
    "revision": "16fb0eb988ff9296d2e901f535152cdd"
  },
  {
    "url": "assets/img/content/development/git/issues-1.png",
    "revision": "2c8128c9d9bb47c8b58698a1eb433c65"
  },
  {
    "url": "assets/img/content/development/git/issues-2.png",
    "revision": "51cf7fec2fdf3650b0ac8644ad59c0a7"
  },
  {
    "url": "assets/img/content/development/git/workflow/branches.png",
    "revision": "3e74906c79e29f647d2108f82a900edf"
  },
  {
    "url": "assets/img/content/development/git/workflow/commits.png",
    "revision": "aa884aea364871628b91092597f1636c"
  },
  {
    "url": "assets/img/content/development/git/workflow/issue_labels.png",
    "revision": "3ad05cf801c466f5b84ddaab93b72c74"
  },
  {
    "url": "assets/img/content/development/git/workflow/issue_templates.png",
    "revision": "2219c3573cb627826fa6bb54290f34c8"
  },
  {
    "url": "assets/img/content/development/git/workflow/issues.png",
    "revision": "f0bc5218f946a5e810450db79cb0f6d1"
  },
  {
    "url": "assets/img/content/development/git/workflow/milestones.png",
    "revision": "257a1eddc6cf51b0b63ed5cfbd4063a8"
  },
  {
    "url": "assets/img/content/development/git/workflow/project_board.png",
    "revision": "b19b6e18d045122c442a8f9af44234fc"
  },
  {
    "url": "assets/img/content/development/git/workflow/pullrequests_closed.png",
    "revision": "a228834dbec7497e3f8ef0df41808631"
  },
  {
    "url": "assets/img/content/development/git/workflow/pullrequests_open.png",
    "revision": "bdee5f439a514e302f608b00aaff989f"
  },
  {
    "url": "assets/img/content/overview/screenshots/desktop-2.png",
    "revision": "b187714596f8c67cbb965f21c7a1af62"
  },
  {
    "url": "assets/img/content/overview/screenshots/desktop-3.png",
    "revision": "401041d11afae1312a931ae8e7fbfb32"
  },
  {
    "url": "assets/img/content/overview/screenshots/desktop-4.png",
    "revision": "adaa2918c09b8ab49d37ad2e267de099"
  },
  {
    "url": "assets/img/content/overview/screenshots/mobile-1.png",
    "revision": "caa3c2d5c955a0aa0858d72738f6aa3b"
  },
  {
    "url": "assets/img/content/overview/screenshots/mobile-2.png",
    "revision": "dd1477c94ca530b849afe5785c7a3787"
  },
  {
    "url": "assets/img/content/overview/screenshots/mobile-3.png",
    "revision": "a6c2c548d4e2b21fb380e0c78efccc60"
  },
  {
    "url": "assets/img/content/overview/workflow/advies.png",
    "revision": "4cfc4917db34c05c8af7d932b1553926"
  },
  {
    "url": "assets/img/content/overview/workflow/CI_CD_checks.jpg",
    "revision": "5b5952eaa99ecca5c88b630234930e40"
  },
  {
    "url": "assets/img/content/overview/workflow/handoff_visualisatie.png",
    "revision": "afc644eb2b7e2631d6dd78516b2abda2"
  },
  {
    "url": "assets/img/content/overview/workflow/handoff_wrijving_hierarchisch.png",
    "revision": "0365b15fa1f78d903f645cf21847410e"
  },
  {
    "url": "assets/img/content/overview/workflow/handoff_wrijving_type.png",
    "revision": "a786651973181f518dbd9d7c7ac99259"
  },
  {
    "url": "assets/img/content/overview/workflow/organisatiestructuur.jpg",
    "revision": "1e9e598ee56184e0664ada1fd3f70b65"
  },
  {
    "url": "assets/img/content/resources/hacks/alles-css.png",
    "revision": "0c5db59af8c3173a45714e9ecc0f9780"
  },
  {
    "url": "assets/img/content/resources/screenshot-boilerplate.png",
    "revision": "b193addddea7a1b88cc4791a056590d8"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/htmhell.png",
    "revision": "12638ad2a0b7e36077b10c3d34a7a999"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/98css.png",
    "revision": "3a2ec59fe4eb406a47d7c2fa634ed6a3"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/atomic_design.png",
    "revision": "c053e8ae590df165b38520e1a4d8d03d"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/basic-features.png",
    "revision": "a7a9b8527ca7e5fc2c4b4e7a49d3f667"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/best_practices_at_q42_1.png",
    "revision": "1fe6d605f7baf5321f772c9e6e2777c4"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/best_practices_at_q42_2.png",
    "revision": "6a77e7b626bd0b23027c7401037d1198"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/best_practices_at_q42_3.png",
    "revision": "a0bf946150d863e37a2e18079d9d57a5"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/bootstrap-4.png",
    "revision": "1ac42f3b8f5b3ad3ae5fc169f4101e42"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/buttons.png",
    "revision": "0fbc05de0549c1a7999167e08ed8a170"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/chrome-devtools.png",
    "revision": "6f01c18df20fb8d79f1f2e1bf8a5953a"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/color-scheme.png",
    "revision": "36a9a7b41760f0ec2427d801d1fd3110"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/css-animations.png",
    "revision": "6c538c8af63089c897db28f85a2b6b4d"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/css-grid.png",
    "revision": "cb6e4d22384140e442f3fdb2562ae65f"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/css-icons.png",
    "revision": "5ff292bd6a6b051f7d9001d6bfc0ae45"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/css-shower-animation.png",
    "revision": "a16fe1efaef8be573f2cfa43c1adaf28"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/css-starbucks-cup.png",
    "revision": "2eb8b19364043babd8eb311583eb2b92"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/css-tabs.png",
    "revision": "c998081446b2dd1a3d2e11fabbed899c"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/cssdb.jpg",
    "revision": "4cc162e4a8f6cb7e4a14f19c53cc862d"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/debugging-css.gif",
    "revision": "c62edd75f2fd2e94c7fa9758db463f0b"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/design-better-forms.png",
    "revision": "7ea2b315040ecf0c3ab50cbbda278be1"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/easings.png",
    "revision": "b147cf20abb4af0bcb385836a535bbe7"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/favorite-line-of-css.png",
    "revision": "d0cd9e9955b15a4e63ce6dfe4b4b6ac5"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/google-object-to-dom.png",
    "revision": "c1df6efdcba6a79a9e7cff62a359987e"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/grid-flexbox.png",
    "revision": "59dcb9ba0d988bacc784e88152bc95d2"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/html-forms.png",
    "revision": "20b40537b0b6ec0a443759b6b1eead0f"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/introductie_functional_programming_1.png",
    "revision": "6f74bf7ef87ea204e1cb6dd95c6b5a01"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/introductie_functional_programming_2.png",
    "revision": "7ebf40ac898bbf72380b6a3b4a058f3e"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/its-ugly-and-im-proud.gif",
    "revision": "27cd86968bb28500dafa088fe0db3d3c"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/learn-the-web.png",
    "revision": "bf2bee5c70211d1c49270257c989a5e2"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/matterjs.png",
    "revision": "af4563f4435d5f282064d263dcfd643e"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/millers-law.png",
    "revision": "c5d2fc03d935a1ba49619fbf717caeab"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/ontwerpen_met_css_1.png",
    "revision": "05f5a6bd96726445bc4c8332e95b0ccd"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/ontwerpen_met_css_2.png",
    "revision": "bc69cfb6b720b491b46a3e72fe09ec98"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/overflow-alignment.png",
    "revision": "509219113e18dc92e4501af19b457646"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/tailwindcss.png",
    "revision": "2f5fe6e64b9f103c9732f3d509261ea0"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/try-it-out.png",
    "revision": "f46eaa1a2db743c9758dc486715399fa"
  },
  {
    "url": "assets/img/content/resources/toffe-dingen/img/write-functions.png",
    "revision": "2f212fcb731ee134a8fc22746e52ea26"
  },
  {
    "url": "assets/img/content/resources/tools/bettertouchtool.png",
    "revision": "582c08e87584c58f42c94864e2b59766"
  },
  {
    "url": "assets/img/content/resources/tools/cleanshot.png",
    "revision": "0ba24fc8b2b5c111a6a842ac69ad029f"
  },
  {
    "url": "assets/img/content/resources/tools/figma.png",
    "revision": "b5d191a0a928bb2e5b6b4f2ef0530f36"
  },
  {
    "url": "assets/img/icons/apple-touch-icon.png",
    "revision": "6e7796797359ef3e27aedb8a22e8c71b"
  },
  {
    "url": "assets/img/icons/checkbox-checked.png",
    "revision": "a919deed39946437ce08e14af4bf36a3"
  },
  {
    "url": "assets/img/icons/download-svgrepo-com (1).svg",
    "revision": "69f8f36dc97a4b26d2d36de0855716c2"
  },
  {
    "url": "assets/img/icons/download.svg",
    "revision": "1b0daf35f41af9fc0fcfe4724b59ff17"
  },
  {
    "url": "assets/img/icons/favicon.png",
    "revision": "cac95e8c6bf44ca9a805fbd4aaa028b4"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-114-precomposed.png",
    "revision": "1179e736cc42ff081964899e21691c71"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-120-precomposed.png",
    "revision": "393e6523c2e8d34f971b8f04852dade6"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-144-precomposed.png",
    "revision": "99082a498a1e02ce13d6c67f29603195"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-152-precomposed.png",
    "revision": "e9d666ccbb06add297a38762d40f1718"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-180-precomposed.png",
    "revision": "091ee8dc8780d221a0012dd6dc3cc29b"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-192.png",
    "revision": "9965266ddfff4c24ef8746c99e84fd79"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-32.png",
    "revision": "6da53509e620327b7064ada74adbf670"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-36.png",
    "revision": "17159f89e233faad8a9c4760e7bcf1ce"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-48.png",
    "revision": "9699b0e4dfe96aa1d89037e4db54f56d"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-57.png",
    "revision": "1222afffdcfc20dc6e4ea9cd15552105"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-60.png",
    "revision": "f03ec44e1c7753554721e8460c3719a2"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-72-precomposed.png",
    "revision": "2273daa57bb2588ed56647f02f89b5fb"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-72.png",
    "revision": "2273daa57bb2588ed56647f02f89b5fb"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-76.png",
    "revision": "2e0670560c73de50b24da759f90ce9f9"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon-96.png",
    "revision": "de6c628288d342b225fea9ea17b6423e"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/favicon.ico",
    "revision": "b3616c7ab0606e8882925b62a2e0101e"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/index.html",
    "revision": "b36589ef1fc455547a59a409fb6a541e"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/favicons/manifest.json",
    "revision": "7b8a47b71d77d951f1b6febc4059f66b"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_128x128.png",
    "revision": "61b835751c855b334dbc10e061fe506f"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_128x128@2x.png",
    "revision": "1c73ba15faf53da1dc74022586b6cec4"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_16x16.png",
    "revision": "ed6800e4777881b023d7309043187138"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_16x16@2x.png",
    "revision": "6da53509e620327b7064ada74adbf670"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_256x256.png",
    "revision": "1c73ba15faf53da1dc74022586b6cec4"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_256x256@2x.png",
    "revision": "f1ac5b6fba3cfac350a891e01498e71a"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_32x32.png",
    "revision": "6da53509e620327b7064ada74adbf670"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_32x32@2x.png",
    "revision": "df1d908f7c15d9570350c943c9f0cdcf"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_512x512.png",
    "revision": "f1ac5b6fba3cfac350a891e01498e71a"
  },
  {
    "url": "assets/img/icons/iconset/ac-logo/icon.iconset/icon_512x512@2x.png",
    "revision": "38ba0d587961fbb2c7ddd9f209947941"
  },
  {
    "url": "assets/img/icons/search-svgrepo-com.svg",
    "revision": "8950c04a2437e071d47f9227f55f9b41"
  },
  {
    "url": "assets/img/icons/search-white.svg",
    "revision": "5b097954c482a95326da78525b667e26"
  },
  {
    "url": "assets/img/logos/active-collective_logo_black.svg",
    "revision": "aa36822c2d77f060d5c2ae89815b8a63"
  },
  {
    "url": "assets/img/logos/active-collective_logo_white.svg",
    "revision": "f2002c31e47171197dcf7a58875db16b"
  },
  {
    "url": "assets/img/logos/facebook.png",
    "revision": "9bb0c13527d958f1d740b0a136ac6ad6"
  },
  {
    "url": "assets/img/logos/instagram.png",
    "revision": "a807b31d7a1d2c9a1131a7b971d532ec"
  },
  {
    "url": "assets/img/logos/linkedIn.png",
    "revision": "cbb1d311d1e9fb82c0ab2bcd9401c13c"
  },
  {
    "url": "assets/img/screenshot_website.png",
    "revision": "66261a1c54ac594fc41b4a965a4f405f"
  },
  {
    "url": "assets/js/charts/bar-chart.js",
    "revision": "7b79888e7d92c82e66bb3cbd5b126636"
  },
  {
    "url": "assets/js/charts/doughnut-chart.js",
    "revision": "274a4a4627f2989dfb3b02b596c715a5"
  },
  {
    "url": "assets/js/charts/horizontal-bar-chart.js",
    "revision": "a819ac96a869c533c9a4950853dc13a7"
  },
  {
    "url": "assets/js/charts/pie-chart.js",
    "revision": "f712daa301c28749b324c661dbebfff6"
  },
  {
    "url": "assets/js/charts/stacked-bar-chart.js",
    "revision": "443b114a92edeb2e217c6d25ca01f2cd"
  },
  {
    "url": "assets/js/github-api.js",
    "revision": "25ae8db46df7a9d7337259375cb9f6e9"
  },
  {
    "url": "assets/js/hb-toggle-page.js",
    "revision": "cc9fb5634a7442383e08d1e11e1c6896"
  },
  {
    "url": "assets/js/toggle-page.js",
    "revision": "f2fa5c835fe79aff806a33a243166f05"
  },
  {
    "url": "index.html",
    "revision": "11db7d8fd0d63a6c5b01dedb7ed0d66d"
  },
  {
    "url": "main.css",
    "revision": "1d20a4df8308ee5a1603674f7ade91dc"
  },
  {
    "url": "main.css.map",
    "revision": "04b487af5891e9d7d1811f05385e07ed"
  },
  {
    "url": "manifest.json",
    "revision": "f130a838d41e2b8d62c7a1d92464997e"
  },
  {
    "url": "pages/about.css",
    "revision": "8f3bc48486f9681df0edfae43d4011f0"
  },
  {
    "url": "pages/design/bestanden/index.html",
    "revision": "5977f057c35bc62dabe934e367ad507a"
  },
  {
    "url": "pages/design/context/index.html",
    "revision": "f583a8b12005105a7cd5ac0cc1786c50"
  },
  {
    "url": "pages/design/ontwerp/index.html",
    "revision": "1e6e52d96c7f6a68b69aeef37f6fead5"
  },
  {
    "url": "pages/design/pages.bestanden.css",
    "revision": "e298cffec32e7a81a8c4880897f0b634"
  },
  {
    "url": "pages/design/pages.context.css",
    "revision": "8bcbf65a59dd7aa1acb8987c16d56289"
  },
  {
    "url": "pages/design/pages.context.css.map",
    "revision": "f6ff3f8bcda2f3b1c7d3db7ec422f9de"
  },
  {
    "url": "pages/design/pages.ontwerp.css",
    "revision": "fc643b99f0d853360263c644e366715a"
  },
  {
    "url": "pages/design/pages.ontwerp.css.map",
    "revision": "f09cbdf05f8c900c11a3210c13602cf7"
  },
  {
    "url": "pages/design/pages.variabelen.css",
    "revision": "ead5e2118f0da7f9ce8751f05d97fff5"
  },
  {
    "url": "pages/design/variabelen/index.html",
    "revision": "f801ff209fd4988512b3860853aaf09b"
  },
  {
    "url": "pages/development/checklists/index.html",
    "revision": "fff993f71ed5d8008f7e466aa848ef5a"
  },
  {
    "url": "pages/development/coding-guidelines/index.html",
    "revision": "bfce5b1452bc754691530b2944b42837"
  },
  {
    "url": "pages/development/deployment/index.html",
    "revision": "9f140c2b2ff46b3d561926f32b23c729"
  },
  {
    "url": "pages/development/getting-started/index.html",
    "revision": "dca775a24542edfce420e52340bd67cf"
  },
  {
    "url": "pages/development/git/index.html",
    "revision": "febdce6b0d814a1c1f807bdc682e0a3a"
  },
  {
    "url": "pages/development/pages.checklists.css",
    "revision": "d5f6fd08d33f7747c477ecc7b4d16de1"
  },
  {
    "url": "pages/development/pages.checklists.css.map",
    "revision": "e766ba3377089087680d389f9e8ddaaf"
  },
  {
    "url": "pages/development/pages.deployment.css",
    "revision": "62c44b31b7593f2bf23c9c8727a287fe"
  },
  {
    "url": "pages/development/pages.git.css",
    "revision": "20ab280365e29d151120c97a54d3d384"
  },
  {
    "url": "pages/development/pages.guidelines.css",
    "revision": "8dbfc38052b852a591b4de3cd060b49f"
  },
  {
    "url": "pages/overview/introduction/index.html",
    "revision": "1b74bb091d497ffa1049a81b13212f0e"
  },
  {
    "url": "pages/overview/progress/index.html",
    "revision": "aafa8547996b5d521004849398f20048"
  },
  {
    "url": "pages/overview/project/index.html",
    "revision": "d27b39feecf782491c31dd3793d21242"
  },
  {
    "url": "pages/overview/workflow/index.html",
    "revision": "4434081ded55592bc91745cde86fe738"
  },
  {
    "url": "pages/resources/code-snippets/index.html",
    "revision": "9a199425cc7140cae373370d98b86501"
  },
  {
    "url": "pages/resources/examples/index.html",
    "revision": "696bca6f9848b12f0b7c3aadd9743f15"
  },
  {
    "url": "pages/resources/hacks/index.html",
    "revision": "52efc1c93bd2297c9137262df21e5912"
  },
  {
    "url": "pages/resources/libraries/index.html",
    "revision": "9d2276ca73b23623967af5bc95bc62e0"
  },
  {
    "url": "pages/resources/pages.codesnippets.css",
    "revision": "12ee58c0bb8d5ced583bc7ed123293cc"
  },
  {
    "url": "pages/resources/pages.codesnippets.css.map",
    "revision": "73ef32b486d8f223f90e30eb8904743a"
  },
  {
    "url": "pages/resources/pages.examples.css",
    "revision": "451342b8e84d5716b0fbc35e97c67f6e"
  },
  {
    "url": "pages/resources/pages.examples.css.map",
    "revision": "71f96acfabb65c8203a04be209a77573"
  },
  {
    "url": "pages/resources/pages.libraries.css",
    "revision": "51e9abd207d6764eef0dac3f45adbac1"
  },
  {
    "url": "pages/resources/pages.libraries.css.map",
    "revision": "1f7f65473378e0d7625c52f782746513"
  },
  {
    "url": "pages/resources/pages.tools.css",
    "revision": "b6b5c43f2733a81485f973195b0ae77a"
  },
  {
    "url": "pages/resources/pages.tools.css.map",
    "revision": "22d5cd788288a2a316355986310d6957"
  },
  {
    "url": "pages/resources/toffe-dingen/index.html",
    "revision": "34e283127d6fbdc02b5e36cb2bfa4ed1"
  },
  {
    "url": "pages/resources/tools/index.html",
    "revision": "d473eadc57b66047cb33ac85548411d0"
  },
  {
    "url": "pages/templates/pages.detail.css",
    "revision": "dd3df9e7dad0a3d63a637142f8b4167f"
  },
  {
    "url": "pages/templates/pages.home.css",
    "revision": "8ba089c90cfd56cc54f64ba9d93c1679"
  },
  {
    "url": "pages/templates/pages.home.css.map",
    "revision": "f9c26ef5fa65b882da2a552b365ca359"
  },
  {
    "url": "pages/templates/pages.subpage.css",
    "revision": "076704f98fa1c5e1c08ba0e80d69fcc5"
  },
  {
    "url": "pages/templates/pages.subpage.css.map",
    "revision": "f996ad52dad12a1322d60c6561df16b2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
