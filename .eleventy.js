const htmlmin = require("html-minifier");


module.exports = (eleventyConfig) => {

  // Assets
  eleventyConfig.addPassthroughCopy('assets/fonts')
  eleventyConfig.addPassthroughCopy('assets/img')
  eleventyConfig.addPassthroughCopy({'src/js': 'assets/js'})
  eleventyConfig.addPassthroughCopy("./src/favicon.ico")

  // Config for CMS
  eleventyConfig.addPassthroughCopy({'./src/admin/config.yml': './admin/config.yml'})

  // eleventyConfig.addPassthroughCopy('src/_data')

  const fg = require('fast-glob')
  const logos = fg.sync(['**/partners/*', '!**/_site'])
  
  eleventyConfig.addCollection('partnerLogos', (collection) => {
    return logos
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
      input: 'src'
    },
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
