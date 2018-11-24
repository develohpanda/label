// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const webpack = require('webpack')

module.exports = {
  webpack: (config, { dev, vendor }) => {
    // Perform customizations to webpack config

    config.resolve = {
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    }

    config.module.rules.push({ test: /\.css$/, use: ['style-loader', 'css-loader'] })

    config.module.rules.push({ test: /\.tsx?$/, loader: "awesome-typescript-loader" })

    config.module.rules.push({ test: /\.js$/, loader: "source-map-loader" })

    // Important: return the modified config
    return config;
  }
}