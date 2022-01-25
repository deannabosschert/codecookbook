const htmlmin = require("html-minifier");
// const pluginPWA = require("eleventy-plugin-pwa")


module.exports = (eleventyConfig) => {

  // Assets
  eleventyConfig.addPassthroughCopy('assets/fonts')
  eleventyConfig.addPassthroughCopy('assets/img')
  eleventyConfig.addPassthroughCopy('assets/js/toggle-page.js')
  eleventyConfig.addPassthroughCopy('assets/js/hb-toggle-page.js')
  eleventyConfig.addPassthroughCopy('assets/js/charts')
  eleventyConfig.addPassthroughCopy('assets/js/github-api.js')
  // eleventyConfig.addPassthroughCopy('manifest.json')
  // eleventyConfig.addPlugin(pluginPWA)


  eleventyConfig.addPassthroughCopy('assets/files')
  eleventyConfig.addPassthroughCopy('assets/alles.zip')
  eleventyConfig.addPassthroughCopy('./src/favicon.ico')
  

  // Config for CMS
  eleventyConfig.addPassthroughCopy({'./src/admin/config.yml': './admin/config.yml'})

  // eleventyConfig.addPassthroughCopy('src/_data')

  const fg = require('fast-glob')
  const logos = fg.sync(['**/partners/*', '!**/_site'])
  const componentenIMG = fg.sync(['**/componenten-foto/*', '!**/_site'])
  
  eleventyConfig.addCollection('partnerLogos', (collection) => {
    return logos
  })
  
  eleventyConfig.addCollection('componentImages', (collection) => {
    return componentenIMG
  })


  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    // if (outputPath.endsWith(".html")) {
    // EDIT: only for .html files outside of the `posts` directory
    if (outputPath.endsWith(".html") && !outputPath.includes("posts")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: 'src',
      data: '_data'
    },
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
