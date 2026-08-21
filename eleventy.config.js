export default function(eleventyConfig) {
    eleventyConfig.addCollection('categories', function (api) {
        return [...new Set(api
            .getFilteredByTag('bloggers')
            .map(blogger => blogger.data.categories)
            .flat()
            .filter(category => !! category)
        )];
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
        output: "_site",
    },
};
