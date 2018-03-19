const withSass = require("@zeit/next-sass");

const conf = withSass({
  cssModules: false,
  sassLoaderOptions: {
    includePaths: ["styles", "node_modules"]
  },
  webpack(config, { dev }) {
    config.node = {
      fs: "empty"
    };
    config.module.rules.push({
      test: /\.svg$/,
      loader: "svg-inline-loader"
    });
    return config;
  }
});

module.exports = conf;
