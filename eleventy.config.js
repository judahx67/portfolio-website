module.exports = function(eleventyConfig) {
  // Copy assets directly to output
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  
  // Copy security files
  eleventyConfig.addPassthroughCopy({"src/.well-known": ".well-known"});
  eleventyConfig.addPassthroughCopy("googleea9674704c5c83f5.html");
  // Watch for changes in assets
  eleventyConfig.addWatchTarget("./src/assets/");
  
  // Collections: Projects from src/projects
  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/projects/*.{md,njk,html}")
      .sort((a, b) => {
        const aOrder = a.data.order ?? 0;
        const bOrder = b.data.order ?? 0;
        if (aOrder !== bOrder) return aOrder - bOrder;
        const aTitle = (a.data.title || "").toLowerCase();
        const bTitle = (b.data.title || "").toLowerCase();
        return aTitle.localeCompare(bTitle);
      });
  });
  
  // Set up input/output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: ""
  };
};
