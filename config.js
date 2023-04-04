const StyleDictionary = require("style-dictionary");

module.exports = {
  // Define your input files here
  source: [
    // This will search for all JSON files in the `tokens` directory and its subdirectories
    "./tokens/**/*.json",
    "!./tokens/figma_styles.json",
  ],

  // Define your output formats here
  platforms: {
    // Example output format for generating a CSS file
    css: {
      transformGroup: "css",
      buildPath: "./dist/",

      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
      ],
    },
    javascript: {
      transformGroup: "js",
      buildPath: "./dist/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/module-flat",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
      ],
    },
  },

  transforms: [
    // Example transform for converting color values from HEX to RGBA
    {
      name: "color/rgba",
      type: "value",
      matcher: (prop) => prop.attributes.category === "color",
      transformer: (prop) => {
        const { r, g, b } = StyleDictionary.properties.color.toRgb(prop.value);
        const a = prop.attributes.alpha;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      },
    },
  ],
};
