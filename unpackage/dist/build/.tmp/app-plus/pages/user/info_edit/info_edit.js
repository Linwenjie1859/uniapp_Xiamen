(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/info_edit/info_edit"],{"0d5b":function(n,t,e){"use strict";var a=e("98a9"),u=e.n(a);u.a},"2af7":function(n,t,e){"use strict";e.r(t);var a=e("76f2"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=u.a},"484c":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},"76f2":function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{userInfo:{phone:"",nickname:""}}},onShow:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;t.basePost(t.U({c:"user_api",a:"my"}),{},function(n){t.userInfo=n.data},function(t){console.log(n(t," at pages\\user\\info_edit\\info_edit.vue:47"))})},nicknames:function(n){e.navigateTo({url:"/pages/login/modify_nicknames/modify_nicknames"})}}};t.default=a}).call(this,e("0de9")["default"],e("6e42")["default"])},"8a26":function(n,t,e){"use strict";(function(n){e("4303"),e("921b");a(e("66fd"));var t=a(e("9ada"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"98a9":function(n,t,e){},"9ada":function(n,t,e){"use strict";e.r(t);var a=e("484c"),u=e("2af7");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("0d5b");var i=e("2877"),f=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=f.exports}},[["8a26","common/runtime","common/vendor"]]]);