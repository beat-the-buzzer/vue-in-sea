'use strict'; //定义组件

define(function (require, exports, module) {
  var router = require('./routes/routes');

  var app = new Vue({
    el: '#app',
    router: router
  });
});