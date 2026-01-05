// svgo.config.js
module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false, // keep viewBox
          cleanupIds: false, // keep <symbol id="...">
          convertColors: false, // prevent converting colors to short hex
          inlineStyles: false, // keep style attrs so they can be removed later
        },
      },
    },
    "convertStyleToAttrs", // Flatten style="..." into attributes
    {
      name: "removeAttrs",
      params: {
        attrs: ["fill", "stroke", "style"], // Remove all fill, stroke, and style attributes
      },
    },
  ],
};
