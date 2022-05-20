/**
 * This is unfinished for now, please don't remove.
 */

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /\.module.(scss)$/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                prependData: '@import "sls";',
                includePaths: [path.join(__dirname, 'libs/sls-shared-widgets/src/lib')],
              },
            },
          },
        ],
      },
    ],
  },
};
