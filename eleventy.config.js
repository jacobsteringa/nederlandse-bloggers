export default function(eleventyConfig) {
    eleventyConfig.addBundle('css');
}

export const config = {
    templateFormats: [
        "md",
        "njk",
        "html",
        "11ty.js",
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    dir: {
        input: "src",
        includes: "../_includes",
        data: "../_data",
        output: "_site",
    },
};
