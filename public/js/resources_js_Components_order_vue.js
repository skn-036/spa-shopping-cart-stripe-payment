(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_order_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/order.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/order.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      order: {}
    };
  },
  methods: {
    orderItems: function orderItems() {
      var items = undefined;
      var output;

      if (this.$store.getters.getOrderDetails !== undefined && items == undefined) {
        output = this.$store.getters.cartItems;
      }

      if (JSON.parse(sessionStorage.getItem('order')) !== undefined && items == undefined) {
        output = JSON.parse(sessionStorage.getItem('order'));
      } else {
        output = [];
      }

      this.order = output;
      this.order.items = JSON.parse(output.items);
    },
    formatPrice: function formatPrice(amount) {
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    productTotal: function productTotal(product) {
      var amount = product.quantity * product.discount_price;
      return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    }
  },
  mounted: function mounted() {
    this.orderItems();
  }
});

/***/ }),

/***/ "./resources/js/Components/order.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/order.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _order_vue_vue_type_template_id_4f52bd33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=4f52bd33& */ "./resources/js/Components/order.vue?vue&type=template&id=4f52bd33&");
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ "./resources/js/Components/order.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _order_vue_vue_type_template_id_4f52bd33___WEBPACK_IMPORTED_MODULE_0__.render,
  _order_vue_vue_type_template_id_4f52bd33___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/order.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/order.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Components/order.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/order.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/order.vue?vue&type=template&id=4f52bd33&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/order.vue?vue&type=template&id=4f52bd33& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_4f52bd33___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_4f52bd33___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_4f52bd33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./order.vue?vue&type=template&id=4f52bd33& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/order.vue?vue&type=template&id=4f52bd33&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/order.vue?vue&type=template&id=4f52bd33&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/order.vue?vue&type=template&id=4f52bd33& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 mb-4" }, [
          _c("h6", { staticClass: "text-teal mb-2" }, [
            _c("strong", [_vm._v("Order ID: ")]),
            _vm._v(" "),
            _c("span", {
              staticClass: "text-primary",
              domProps: { textContent: _vm._s(_vm.order.id) }
            })
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "text-teal mb-2" }, [
            _c("strong", [_vm._v("Transection ID: ")]),
            _vm._v(" "),
            _c("span", {
              staticClass: "text-primary",
              domProps: { textContent: _vm._s(_vm.order.transection_id) }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._l(_vm.order.items, function(product, index) {
        return _c(
          "div",
          { key: index, staticClass: "row align-items-center my-4" },
          [
            _c("div", { staticClass: "col-1" }, [
              _c("h6", { domProps: { textContent: _vm._s(index + 1) } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 d-flex" }, [
              _c("img", {
                staticClass: "cart-img img-fluid my-auto border-radius-5px",
                attrs: { src: "./uploads/" + product.image }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-3" }, [
              _c("h6", {
                domProps: {
                  textContent: _vm._s(
                    product.brand + " " + product.category + " " + product.model
                  )
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-1 d-flex flex-row align-items-center cart-quantity"
              },
              [
                _c("h6", {
                  domProps: { textContent: _vm._s(product.quantity) }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-2" }, [
              _c("h6", {
                domProps: {
                  textContent: _vm._s(_vm.formatPrice(product.discount_price))
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-3" }, [
              _c("h6", {
                domProps: { textContent: _vm._s(_vm.productTotal(product)) }
              })
            ])
          ]
        )
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-5" }, [
        _c("div", { staticClass: "col-7" }),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "col-2" }, [
          _c("h5", {
            staticClass: "font-bold text-primary",
            domProps: {
              textContent: _vm._s(
                _vm.formatPrice(_vm.order.total_payment / 100)
              )
            }
          })
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-12 text-center" }, [
        _c("h6", { staticClass: "text-teal" }, [
          _vm._v("Thanks for your Order. We will get to you Soon")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 my-3" }, [
      _c("h4", { staticClass: "text-orange" }, [_vm._v("Order Details:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row align-items-center" }, [
      _c("div", { staticClass: "col-1" }, [
        _c("h6", { staticClass: "font-bold text-teal" }, [_vm._v("SL")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-2" }, [
        _c("h6", { staticClass: "font-bold text-teal" }, [_vm._v("Image")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("h6", { staticClass: "font-bold text-teal" }, [
          _vm._v("Product Name")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }, [
        _c("h6", { staticClass: "font-bold text-teal" }, [_vm._v("Quantity")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-2" }, [
        _c("h6", { staticClass: "font-bold text-teal" }, [_vm._v("Unit Price")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-2" }, [
        _c("h6", { staticClass: "font-bold text-teal" }, [
          _vm._v("Total Price")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("h4", { staticClass: "font-bold text-teal" }, [_vm._v("Grand Total")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);