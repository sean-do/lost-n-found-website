// import markdownIt from "markdown-it";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.setTemplateFormats(["html", "md", "njk"]);
  // eleventyConfig.setLibrary("md", markdownIt({ html: true }));

  // eleventyConfig.addShortcode("highlight", function (word, width = null) {
  //   const chWidth = width || `${word.length}ch`; // auto size if not set
  //   return `
  //     <svg class="text-body" style="vertical-align: baseline; height: 0.5em; width: ${chWidth}">
  //       <text x="50%" y="100%" text-anchor="middle" dominant-baseline="alphabetic">${word}</text>
  //     </svg>
  //   `;
  // });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
