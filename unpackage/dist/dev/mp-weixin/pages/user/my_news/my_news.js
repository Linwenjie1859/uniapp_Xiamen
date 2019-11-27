(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/my_news/my_news"],{

/***/ 252:
/*!**********************************************************************************************!*\
  !*** D:/Users/59716/Desktop/六和材料/xiamen/main.js?{"page":"pages%2Fuser%2Fmy_news%2Fmy_news"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _my_news = _interopRequireDefault(__webpack_require__(/*! ./pages/user/my_news/my_news.vue */ 253));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_my_news.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 253:
/*!*************************************************************************!*\
  !*** D:/Users/59716/Desktop/六和材料/xiamen/pages/user/my_news/my_news.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_news_vue_vue_type_template_id_38ca5e76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_news.vue?vue&type=template&id=38ca5e76& */ 254);
/* harmony import */ var _my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my_news.vue?vue&type=script&lang=js& */ 256);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _my_news_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my_news.vue?vue&type=style&index=0&lang=scss& */ 258);
/* harmony import */ var _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);






/* normalize component */

var component = Object(_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_news_vue_vue_type_template_id_38ca5e76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_news_vue_vue_type_template_id_38ca5e76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/59716/Desktop/六和材料/xiamen/pages/user/my_news/my_news.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 254:
/*!********************************************************************************************************!*\
  !*** D:/Users/59716/Desktop/六和材料/xiamen/pages/user/my_news/my_news.vue?vue&type=template&id=38ca5e76& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_template_id_38ca5e76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_news.vue?vue&type=template&id=38ca5e76& */ 255);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_template_id_38ca5e76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_template_id_38ca5e76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 255:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Users/59716/Desktop/六和材料/xiamen/pages/user/my_news/my_news.vue?vue&type=template&id=38ca5e76& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 256:
/*!**************************************************************************************************!*\
  !*** D:/Users/59716/Desktop/六和材料/xiamen/pages/user/my_news/my_news.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_news.vue?vue&type=script&lang=js& */ 257);
/* harmony import */ var _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 257:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Users/59716/Desktop/六和材料/xiamen/pages/user/my_news/my_news.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      couponValidList: [{
        id: 1,
        title: "服务通知",
        info: "恭喜你参加的拼团已组成成功了，请您等待卖家发货",
        time: "2019-08-08",
        img: "/static/icon-item-001.png" },

      {
        id: 2,
        title: "账户通知",
        info: "恭喜你参加的拼团已组成成功了，请您等待卖家发货",
        time: "2019-08-08",
        img: "/static/icon-item-003.png" },

      {
        id: 3,
        title: "物流通知",
        info: "恭喜你参加的拼团已组成成功了，请您等待卖家发货",
        time: "2019-08-08",
        img: "/static/icon-item-005.png" }],

      headerTop: 0,
      //控制滑动效果
      typeClass: 'valid',
      subState: '',
      theIndex: null,
      oldIndex: null,
      isStop: false };

  },
  methods: {
    // 立即购买
    purchase: function purchase(e) {
      uni.navigateTo({
        url: "/pages/list/goode_details/goode_details" });

    },
    detail: function detail(e) {
      uni.navigateTo({
        url: "/pages/list/news_detail/news_detail" });

    },
    switchType: function switchType(type) {var _this = this;
      if (this.typeClass == type) {
        return;
      }
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 0 });

      this.typeClass = type;
      this.subState = this.typeClass == '' ? '' : 'show' + type;
      setTimeout(function () {
        _this.oldIndex = null;
        _this.theIndex = null;
        _this.subState = _this.typeClass == 'valid' ? '' : _this.subState;
      }, 200);
    },
    //控制左滑删除效果-begin
    touchStart: function touchStart(index, event) {
      //多点触控不触发
      if (event.touches.length > 1) {
        this.isStop = true;
        return;
      }
      this.oldIndex = this.theIndex;
      this.theIndex = null;
      //初始坐标
      this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
    },
    touchMove: function touchMove(index, event) {var _this2 = this;
      //多点触控不触发
      if (event.touches.length > 1) {
        this.isStop = true;
        return;
      }
      var moveX = event.touches[0].pageX - this.initXY[0];
      var moveY = event.touches[0].pageY - this.initXY[1];

      if (this.isStop || Math.abs(moveX) < 5) {
        return;
      }
      if (Math.abs(moveY) > Math.abs(moveX)) {
        // 竖向滑动-不触发左滑效果
        this.isStop = true;
        return;
      }

      if (moveX < 0) {
        this.theIndex = index;
        this.isStop = true;
      } else if (moveX > 0) {
        if (this.theIndex != null && this.oldIndex == this.theIndex) {
          this.oldIndex = index;
          this.theIndex = null;
          this.isStop = true;
          setTimeout(function () {
            _this2.oldIndex = null;
          }, 150);
        }
      }
    },

    touchEnd: function touchEnd(index, $event) {
      //解除禁止触发状态
      this.isStop = false;
    },

    //删除商品
    deleteCoupon: function deleteCoupon(id, List) {
      var len = List.length;
      for (var i = 0; i < len; i++) {
        if (id == List[i].id) {
          List.splice(i, 1);
          break;
        }
      }
      this.oldIndex = null;
      this.theIndex = null;
    },

    discard: function discard() {
      //丢弃
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 258:
/*!***********************************************************************************************************!*\
  !*** D:/Users/59716/Desktop/六和材料/xiamen/pages/user/my_news/my_news.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../H_HBuilderX.2.1.3.20190723.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./my_news.vue?vue&type=style&index=0&lang=scss& */ 259);
/* harmony import */ var _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_H_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_my_news_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 259:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Users/59716/Desktop/六和材料/xiamen/pages/user/my_news/my_news.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[252,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/my_news/my_news.js.map