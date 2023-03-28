const { merge } = require('webpack-merge');
const { resolve } = require('node:path');
const commonConfig = require('./common');
const createCopyPlugin = require('./plugins/createCopyPlugin');
const { createCssExtractPlugin } = require('./plugins/createCssExtractPlugin');
const createCssMinimizerPlugin = require('./plugins/createCssMinimizerPlugin');
const createTerserPlugin = require('./plugins/createTerserPlugin');
const ImageMinimizerPlugin = require('./plugins/createImageMinPlugin');
const createCleanPlugin = require('./plugins/createCleanPlugin');
const createBundleAnalyzerPlugin = require('./plugins/createBundleAnalyzerPlugin');
const createESBuildMinifyPlugin = require('./plugins/createESBuildMinifyPlugin');

const buildConfig = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    ...commonConfig.plugins,
    createCopyPlugin(),
    createCssExtractPlugin(),
    createBundleAnalyzerPlugin(),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      createCssMinimizerPlugin(),
      createTerserPlugin(),
      ImageMinimizerPlugin(),
      createCleanPlugin(),
      createESBuildMinifyPlugin(),
    ],
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: '[name].min.js',
    publicPath: `/react-project-kally/`,
  },
});

module.exports = buildConfig;
