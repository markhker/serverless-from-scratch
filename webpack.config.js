/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const slsw = require('serverless-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const resolveJsconfigPathsToAlias = ({ jsconfigPath = './jsconfig.json' } = {}) => {
  const { paths } = require(jsconfigPath).compilerOptions; // eslint-disable-line global-require
  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    const value = path.resolve('./', paths[item][0].replace('/*', ''));
    aliases[key] = value;
  });

  return aliases;
};

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx' ],
    symlinks: false,
    cacheWithContext: false,
    alias: resolveJsconfigPathsToAlias(),
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};