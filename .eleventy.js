module.exports = function (eleventyConfig) {
  // Copy assets folder through to _site unchanged
  eleventyConfig.addPassthroughCopy("assets");

  return {
    // Only process .njk and .md — ignore the existing plain .html files
    templateFormats: ["njk", "md"],
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
