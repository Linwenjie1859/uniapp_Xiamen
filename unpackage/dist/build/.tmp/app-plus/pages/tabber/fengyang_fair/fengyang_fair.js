(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabber/fengyang_fair/fengyang_fair"],{"3ab8":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n})},"902c":function(e,t,a){},"96f1":function(e,t,a){"use strict";a.r(t);var r=a("3ab8"),n=a("9b8e");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("f36e");var o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);t["default"]=s.exports},"9b8e":function(e,t,a){"use strict";a.r(t);var r=a("d433"),n=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);t["default"]=n.a},d433:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{isKeep:!1,showCategoryIndex:0,categoryList:[],goodsList:[],priceOrder:0,salesOrder:0,allOrder:0,sortCurrentId:0}},onLoad:function(){this.getCategoryList()},methods:{addGoodToCar:function(t){var a=this;console.log(e("商品ID：",t," at pages\\tabber\\fengyang_fair\\fengyang_fair.vue:95")),a.isLogin()&&a.baseGet(a.U({c:"store_api",a:"details",q:{id:t}}),function(r){console.log(e("店铺：",r.data.mer_id," at pages\\tabber\\fengyang_fair\\fengyang_fair.vue:108")),a.basePost(a.U({c:"auth_api",a:"set_cart"}),{productId:t,merId:r.data.mer_id,cartNum:1},function(e){a.Tips({title:"添加成功,在购物车等亲"})},function(t){console.log(e(t," at pages\\tabber\\fengyang_fair\\fengyang_fair.vue:121"))})},function(t){console.log(e(t," at pages\\tabber\\fengyang_fair\\fengyang_fair.vue:126"))},!0)},changeAllRank:function(){this.allOrder=2==this.allOrder?0:this.allOrder+1,this.getSortGoods()},changeSalesRank:function(){this.salesOrder=2==this.salesOrder?0:this.salesOrder+1,this.getSortGoods()},changePriceRank:function(){this.priceOrder=2==this.priceOrder?0:this.priceOrder+1,this.getSortGoods()},getCategoryList:function(){var t=this;t.baseGet(t.U({c:"store_api",a:"get_pid_cate"}),function(e){t.showCategory(0,e.data[0].id),t.categoryList=e.data},function(t){console.log(e(t," at pages\\tabber\\fengyang_fair\\fengyang_fair.vue:158"))},!0)},keep:function(){this.isKeep=!this.isKeep},getSortGoods:function(){var t=this;t.goodsList=[],t.baseGet(t.U({c:"store_api",a:"get_product_list",q:{cid:t.sortCurrentId,keyword:"",priceOrder:0==t.priceOrder?"":1==t.priceOrder?"desc":"asc",salesOrder:0==t.salesOrder?"":1==t.salesOrder?"desc":"asc",news:"",page:"",limit:""}}),function(a){t.goodsList=a.data,console.log(e(t.goodsList," at pages\\tabber\\fengyang_fair\\fengyang_fair.vue:188"))},function(t){console.log(e(t," at pages\\tabber\\fengyang_fair\\fengyang_fair.vue:191"))},!0)},showCategory:function(e,t){this.showCategoryIndex=e,this.sortCurrentId=t,this.getSortGoods()},search:function(e){a.navigateTo({url:"/pages/list/search/search"})},goodeDetails:function(e){a.navigateTo({url:"/pages/list/goode_details/goode_details?id="+e.currentTarget.dataset.id})}}};t.default=r}).call(this,a("0de9")["default"],a("6e42")["default"])},e125:function(e,t,a){"use strict";(function(e){a("4303"),a("921b");r(a("66fd"));var t=r(a("96f1"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},f36e:function(e,t,a){"use strict";var r=a("902c"),n=a.n(r);n.a}},[["e125","common/runtime","common/vendor"]]]);