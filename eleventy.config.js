export default function(eleventyConfig) {
    eleventyConfig.addBundle('css');

    eleventyConfig.addFilter('byCategory', function (arr, category) {
        return arr.filter(entry => {
            return entry.data.categories?.includes(category)
        });
    });
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
