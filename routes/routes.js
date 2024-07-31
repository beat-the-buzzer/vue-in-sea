"use strict";

define(function(require, exports, module) {
  var routes = [
    {
      path: "/index",
      component: (resolve) => require.async(["../js/index/index.js"], function(res) {
        resolve(res);
      }),
      meta: {
        title: "首页"
      }
    },
    {
      path: "/about",
      component: (resolve) => require.async(["../js/about/index.js"], function(res) {
        resolve(res);
      }),
      meta: {
        title: "关于"
      }
    }
  ];
  var router = new VueRouter({
    routes
  });
  router.beforeEach(function(to, from, next) {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }

    next();
  });
  module.exports = router;
});
