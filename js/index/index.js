"use strict";

define(function(require, exports, module) {
  var sTpl = require('./index.html');
  const router = require('../../routes/routes');

  module.exports = {
    // 模板加载
    template: sTpl,
    data: function data() {
      return {
        msg: "首页"
      };
    },
    methods: {
      init: function init() {
        console.log("初始化页面");
      },

      jumpToAbout() {
        router.push('/about')
      }
    },
    mounted: function mounted() {
      this.init();
    }
  };
});
