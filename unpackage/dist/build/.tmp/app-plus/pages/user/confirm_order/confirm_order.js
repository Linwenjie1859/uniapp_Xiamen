(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/confirm_order/confirm_order"],{"3d20":function(e,r,t){"use strict";t.r(r);var a=t("63e8"),n=t("8c2c");for(var o in n)"default"!==o&&function(e){t.d(r,e,function(){return n[e]})}(o);t("6f40");var d=t("2877"),i=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,null,null);r["default"]=i.exports},5345:function(e,r,t){"use strict";(function(e,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a={data:function(){return{array:[{name:"未选择"},{name:"省3元：葡萄庄园优惠券"},{name:"省35元：葡萄庄园优惠券"},{name:"省33元：葡萄庄园优惠券"}],index:0,listId:"",cartInfo:[],defaultAddress:{city:"",detail:"",district:"",id:"",is_default:"",phone:"",province:"",real_name:""},createOrder:{addressId:"",couponId:"",userIntegral:"",mark:""},sumPrice:0,orderKey:"",sumNum:0}},onLoad:function(e){this.listId=e.listId,this.getAddressList(),this.getOrderInfo()},methods:{getAddressList:function(){var r=this;r.basePost(r.U({c:"user_api",a:"user_default_address"}),{},function(e){r.defaultAddress=e.data,r.createOrder.addressId=e.data.id},function(r){console.log(e(r," at pages\\user\\confirm_order\\confirm_order.vue:117"))})},SortData:function(e){for(var r={},t=[],a=0;a<e.length;a++){var n=e[a];if(r[n.mer_id])for(var o=0;o<t.length;o++){var d=t[o];if(d.mer_id==n.mer_id){d.data.push(n);break}}else t.push({mer_id:n.mer_id,data:[n]}),r[n.mer_id]="Occupies a position"}return t},getOrderInfo:function(){var r=this;r.basePost(r.U({c:"auth_api",a:"confirm_order"}),{cartId:r.listId},function(t){r.cartInfo=r.SortData(t.data.cartInfo),console.log(e(r.cartInfo," at pages\\user\\confirm_order\\confirm_order.vue:155"));for(var a=0;a<r.cartInfo.length;a++){r.sumNum+=r.cartInfo[a].data.length;for(var n=0;n<r.cartInfo[a].data.length;n++)r.sumPrice+=r.cartInfo[a].data[n].cart_num*r.cartInfo[a].data[n].productInfo.price}r.orderKey=t.data.orderKey},function(r){console.log(e(r," at pages\\user\\confirm_order\\confirm_order.vue:165"))})},bindPickerChange:function(e){this.index=e.target.value},address:function(){t.navigateTo({url:"/pages/user/admin_address/admin_address?clickFlag=1"})},settlement:function(r){var a=this;a.basePost(a.U({c:"auth_api",a:"create_order",q:{key:a.orderKey}}),this.createOrder,function(e){var r={order_id:e.data.result.orderId,total_price:a.sumPrice};t.navigateTo({url:"/pages/user/confirm_payment/confirm_payment?orderInfo="+JSON.stringify(r)})},function(r){console.log(e(r," at pages\\user\\confirm_order\\confirm_order.vue:198"))})}}};r.default=a}).call(this,t("0de9")["default"],t("6e42")["default"])},"63e8":function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement;e._self._c},n=[];t.d(r,"a",function(){return a}),t.d(r,"b",function(){return n})},"64f8":function(e,r,t){},"6f40":function(e,r,t){"use strict";var a=t("64f8"),n=t.n(a);n.a},"8c2c":function(e,r,t){"use strict";t.r(r);var a=t("5345"),n=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(r,e,function(){return a[e]})}(o);r["default"]=n.a},bc37:function(e,r,t){"use strict";(function(e){t("4303"),t("921b");a(t("66fd"));var r=a(t("3d20"));function a(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("6e42")["createPage"])}},[["bc37","common/runtime","common/vendor"]]]);