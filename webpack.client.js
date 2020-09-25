const glob = require('glob');
const path = require('path');
const fs = require('fs');
const AssetsManifestPlugin = require('webpack-assets-manifest');

/* -----------------------------------
 *
 * SASS
 *
 * -------------------------------- */

const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      fiber: false,
      data: '@import "template";',
      outputStyle: 'compressed',
      sourceMap: false,
      includePaths: ['./src/styles'],
    },
  },
};

/* -----------------------------------
 *
 * Config
 *
 * -------------------------------- */

module.exports = {
  mode: 'development',
  entry: glob.sync(__dirname + '/src/entry/*.entry.ts*').reduce(getEntryFile, {}),
  context: path.join(__dirname, '/src/'),
  cache: true,
  target: 'web',
  output: {
    path: path.join(__dirname, '/src/_js/assets'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.scss'],
    alias: {
      '@': path.resolve(__dirname, `./src/`),
    },
  },
  plugins: [
    new AssetsManifestPlugin({
      output: 'assets.json',
      merge: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                target: 'es5',
              },
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
              importLoaders: 2,
              sourceMap: false,
            },
          },
          sassLoader,
        ],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:6]',
              },
              importLoaders: 2,
              sourceMap: false,
            },
          },
          sassLoader,
        ],
      },
    ],
  },
};

/* -----------------------------------
 *
 * Entry
 *
 * -------------------------------- */

function getEntryFile(result, file) {
  const name = path.basename(file, path.extname(file));

  result[name] = file;

  return result;
}