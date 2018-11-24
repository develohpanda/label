// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const webpack = require('webpack')
const GlobEntriesPlugin = require('webpack-watched-glob-entries-plugin')
const { resolve } = require('path')

module.exports = {
  webpack: (config, { dev, vendor }) => {
    // Perform customizations to webpack config

    config.resolve.extensions.push('.ts');
    config.resolve.extensions.push('.tsx');

    config.entry = GlobEntriesPlugin.getEntries(
      [
        resolve('src', '*.{js,mjs,jsx,ts,tsx}'),
        resolve('src', '?(scripts)/*.{js,mjs,jsx,ts,tsx}')
      ]
    )

    config.module.rules.push({
      test: /\.tsx?$/,
      enforce: 'pre',
      use: [{
        loader: 'tslint-loader',
        options: {
          tsConfigFile: 'tsconfig.json',
          emitErrors: true
        }
      }]
    })

    config.module.rules.push({ test: /\.css$/, use: ['style-loader', 'css-loader'] })

    config.module.rules.push({ test: /\.tsx?$/, loader: "awesome-typescript-loader" })

    // Important: return the modified config
    return config;
  },
  copyIgnore: ['**/*.js', '**/*.json', '**/*.ts', '**/*.tsx']
}