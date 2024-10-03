const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
    addWebpackAlias({
        path: require.resolve("path-browserify"),
    })
);
