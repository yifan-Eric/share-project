'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // baseUrl:'"http://test.xiaomingkeji.com/api/index.php?r="'
  // baseUrl:'"https://api.yunhan100.com/api/index.php?r="'
  baseUrl:'"http://test.xiaomingkeji.com/api/index.php?r="',
})
