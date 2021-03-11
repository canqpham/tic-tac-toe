const { override, fixBabelImports, addLessLoader, addWebpackAlias, useBabelRc } = require('customize-cra')
const Dotenv = require('dotenv-webpack')
const path = require('path')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    components: path.resolve(__dirname, 'src/components'),
    modules: path.resolve(__dirname, 'src/modules'),
    assets: path.resolve(__dirname, 'src/assets'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#2898FB',
      '@primary-5': '#2898FB',
      '@label-color': '#2898FB',
      '@line-height-base': '1.4',
      '@border-radius-base': '8px',
      '@font-size-base': '16px',
      '@font-size-sm': '14px',
      '@border-radius-sm': '4px',
      '@card-radius': '4px',
      // height rules
      '@height-base': '38px;',
      '@height-lg': '38px',
      // '@btn-border-radius-base': '8px',
      '@card-padding-base': '24px',
      '@error-color': '#FF5454',
      '@highlight-color': '#FF5454',
      '@select-item-selected-bg': '#e6f7ff',
      '@primary-1': '#e6f7ff',
      '@picker-basic-cell-hover-with-range-color': '#b5e7ff',
      //Form
      '@form-vertical-label-padding': '0 0 4px',
      // Input
      '@input-height-base': '38px',
      '@input-padding-vertical-base': '7px',
      // Card
      '@card-radius': '12px',
    },
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env)
    // if (process.env.ENV === 'production' || process.env.NODE_ENV === 'production') {
    //   config.devtool = false
    // }
    // // override environment
    // config.plugins.push(
    //   new Dotenv({
    //     path: `./.env.${process.env.ENV || 'development'}`,
    //     safe: true,
    //     defaults: './.env',
    //   })
    // )
    return config
  }
)
