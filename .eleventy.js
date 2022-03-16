module.exports = function(eleventyConfig) {
    //Linking to CSS
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css");
    //Add images
    eleventyConfig.addPassthroughCopy("./src/img");

    //return Object options
    return {
        dir: {
            input: "src", 
            output: "public",
            
        },

    };

};