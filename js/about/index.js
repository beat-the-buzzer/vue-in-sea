"use strict"; // 定义组件

define(function(require, exports, module) {
  var sTpl = require("./index.html");
  module.exports = {
    // 模板加载
    template: sTpl,
    data: function data() {
      return {
        msg: '关于'
      };
    },
    methods: {
      init: function init() {
        console.log('初始化页面')
      },
    },
    mounted: function mounted() {
      this.init()
    }
  };
});
