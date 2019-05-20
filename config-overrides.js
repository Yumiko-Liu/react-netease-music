const {
  override,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins,
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addLessLoader(),
  addPostcssPlugins([require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })])
);
