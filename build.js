var stealTools = require("steal-tools");

// var result = stealTools.bundle({
//   main: "main",
//   config: "package.json!npm"
// }, {
//   filter: "node_modules/**/*"
// });

stealTools.build({
  main: 'main',
  config: "package.json!npm"
}, {
  removeDevelopmentCode: false,
  bundleSteal: false,
  bundleAssets: true,
  sourceMaps: false,
  minify: false,
  treeShaking: true
});
