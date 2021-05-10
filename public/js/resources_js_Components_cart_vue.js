(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_cart_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/cart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/cart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      total: 0,
      cartProducts: []
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['removeFromCart', 'updateCartQty'])), {}, {
    cartItems: function cartItems() {
      var items = undefined;
      var output;

      if (this.$store.getters.cartItems !== undefined && items == undefined) {
        output = this.$store.getters.cartItems;
      }

      if (JSON.parse(sessionStorage.getItem('cartItems')) !== undefined && items == undefined) {
        output = JSON.parse(sessionStorage.getItem('cartItems'));
      } else {
        output = [];
      }

      this.cartProducts = output;
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
    },
    updateQty: function updateQty(product) {
      if (product.quantity < 0 || product.quantity == null || product.quantity == undefined) {
        product.quantity = 1;
      }

      if (product.quantity > 10) {
        product.quantity = 10;
      }

      this.updateCartQty(this.cartProducts);
      this.grandTotal(this.cartProducts);
    },
    grandTotal: function grandTotal(product) {
      if (product.length > 0) {
        var amount = product.reduce(function (acc, item) {
          return acc + item.quantity * item.discount_price;
        }, 0);
        this.total = this.formatPrice(amount);
      } else {
        this.total = 0;
      }
    }
  }),
  mounted: function mounted() {
    this.cartItems();
    this.grandTotal(this.cartProducts);
  }
});

/***/ }),

/***/ "./resources/js/Components/cart.vue":
/*!******************************************!*\
  !*** ./resources/js/Components/cart.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cart_vue_vue_type_template_id_2a46746a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.vue?vue&type=template&id=2a46746a& */ "./resources/js/Components/cart.vue?vue&type=template&id=2a46746a&");
/* harmony import */ var _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.vue?vue&type=script&lang=js& */ "./resources/js/Components/cart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _cart_vue_vue_type_template_id_2a46746a___WEBPACK_IMPORTED_MODULE_0__.render,
  _cart_vue_vue_type_template_id_2a46746a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/cart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/cart.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/cart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/cart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/cart.vue?vue&type=template&id=2a46746a&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/cart.vue?vue&type=template&id=2a46746a& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_2a46746a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_2a46746a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_2a46746a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cart.vue?vue&type=template&id=2a46746a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/cart.vue?vue&type=template&id=2a46746a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/cart.vue?vue&type=template&id=2a46746a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/cart.vue?vue&type=template&id=2a46746a& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h3", { staticClass: "text-orange mb-5" }, [_vm._v("Cart Page")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container" },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.cartProducts, function(product, index) {
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
                      product.brand +
                        " " +
                        product.category +
                        " " +
                        product.model
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
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: product.quantity,
                        expression: "product.quantity",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", min: "1", max: "10" },
                    domProps: { value: product.quantity },
                    on: {
                      keyup: function($event) {
                        return _vm.updateQty(product)
                      },
                      click: function($event) {
                        return _vm.updateQty(product)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          product,
                          "quantity",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
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
              _c("div", { staticClass: "col-2" }, [
                _c("h6", {
                  domProps: { textContent: _vm._s(_vm.productTotal(product)) }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-1" },
                [
                  _c("font-awesome-icon", {
                    staticClass:
                      "text-primary bg-red font-larger border-radius-5px small-padding cursor-pointer",
                    attrs: { icon: "times" },
                    on: {
                      click: function($event) {
                        _vm.removeFromCart(product)
                        _vm.cartItems()
                        _vm.grandTotal(_vm.cartProducts)
                      }
                    }
                  })
                ],
                1
              )
            ]
          )
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" }, [
          _c("div", { staticClass: "col-7" }),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "col-2" }, [
            _c("h5", {
              staticClass: "font-bold text-primary",
              domProps: { textContent: _vm._s(_vm.total) }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" }, [
          _c("div", { staticClass: "col-9" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-3" },
            [
              _c("router-link", { attrs: { to: { name: "checkout" } } }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn bg-teal border-radius-5px text-primary mb-5"
                  },
                  [_vm._v("Proceed to Checkout")]
                )
              ])
            ],
            1
          )
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = [
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