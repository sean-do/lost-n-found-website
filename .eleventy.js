import markdownIt from "markdown-it";
import filters from "./src/_config/filters.js";
import shortcodes from "./src/_config/shortcodes.js";

export default function (eleventyConfig) {
  for (const [name, fn] of Object.entries(filters)) {
    eleventyConfig.addFilter(name, fn);
  }

  for (const [name, fn] of Object.entries(shortcodes)) {
    if (fn.length === 1) {
      eleventyConfig.addShortcode(name, fn);
    } else {
      eleventyConfig.addPairedShortcode(name, fn);
    }
  }

  eleventyConfig.addPassthroughCopy("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.setTemplateFormats(["html", "md", "njk"]);
  eleventyConfig.setLibrary("md", markdownIt({ html: true }));
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
