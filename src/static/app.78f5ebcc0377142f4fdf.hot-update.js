webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/assets/js/components/product/EditProduct.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/assets/js/components/product/EditProduct.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ \"./node_modules/vue2-dropzone/dist/vue2Dropzone.js\");\n/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ \"./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css\");\n/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue_input_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-input-tag */ \"./node_modules/vue-input-tag/dist/vueInputTag.common.js\");\n/* harmony import */ var vue_input_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_input_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,\n    InputTag: (vue_input_tag__WEBPACK_IMPORTED_MODULE_4___default())\n  },\n  props: {\n    variants: {\n      type: Array,\n      required: false\n    }\n  },\n  data() {\n    return {\n      product_name: \"\",\n      product_sku: \"\",\n      description: \"\",\n      images: [],\n      product_variant: [{\n        option: this.variants[0].id,\n        tags: []\n      }],\n      product_variant_prices: [],\n      dropzoneOptions: {\n        url: \"https://httpbin.org/post\",\n        thumbnailWidth: 150,\n        maxFilesize: 0.5,\n        headers: {\n          \"My-Awesome-Header\": \"header value\"\n        }\n      }\n    };\n  },\n  methods: {\n    updateProduct() {\n      // Send an API request to update the product\n      // You can use libraries like Axios to make the request\n\n      // Example using Axios:\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(`/product/${this.$route.params.id}/edit/`, this.product).then(response => {\n        // Handle the successful response\n        console.log('Product updated:', response.data);\n        // Redirect to the product list page\n        this.$router.push('/product');\n      }).catch(error => {\n        // Handle the error\n        console.error('Failed to update product:', error);\n      });\n    },\n    newVariant() {\n      let all_variants = this.variants.map(el => el.id);\n      let selected_variants = this.product_variant.map(el => el.option);\n      let available_variants = all_variants.filter(entry1 => !selected_variants.some(entry2 => entry1 == entry2));\n      // console.log(available_variants)\n\n      this.product_variant.push({\n        option: available_variants[0],\n        tags: []\n      });\n    },\n    // check the variant and render all the combination\n    checkVariant() {\n      let tags = [];\n      this.product_variant_prices = [];\n      this.product_variant.filter(item => {\n        tags.push(item.tags);\n      });\n      this.getCombn(tags).forEach(item => {\n        this.product_variant_prices.push({\n          title: item,\n          price: 0,\n          stock: 0\n        });\n      });\n    },\n    // combination algorithm\n    getCombn(arr, pre) {\n      pre = pre || \"\";\n      if (!arr.length) {\n        return pre;\n      }\n      let self = this;\n      let ans = arr[0].reduce(function (ans, value) {\n        return ans.concat(self.getCombn(arr.slice(1), pre + value + \"/\"));\n      }, []);\n      return ans;\n    }\n  },\n  created() {\n    // Fetch the product data from the API\n    // You can use libraries like Axios to make the request\n\n    // Example using Axios:\n    var currentPath = window.location.pathname;\n    var pathSegments = currentPath.split('/');\n    var productId = pathSegments[2];\n    // debugger;\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`/product/${productId}/`).then(response => {\n      // Set the fetched product data to the component's data\n      // this.product = response.data;\n      console.log(response.data);\n      this.product_name = response.data.product[0].title;\n      this.product_sku = response.data.product[0].sku;\n      this.description = response.data.product[0].description;\n      this.product_variant = {\n        'id': 1,\n        'title': 'size'\n      };\n    }).catch(error => {\n      // Handle the error\n      console.error('Failed to fetch product:', error);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3RlbXBsYXRlcy9hc3NldHMvanMvY29tcG9uZW50cy9wcm9kdWN0L0VkaXRQcm9kdWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RlbXBsYXRlcy9hc3NldHMvanMvY29tcG9uZW50cy9wcm9kdWN0L0VkaXRQcm9kdWN0LnZ1ZT9iYzIwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHNlY3Rpb24+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlByb2R1Y3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb2R1Y3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2R1Y3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Qcm9kdWN0IFNLVTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb2R1Y3Rfc2t1XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJcIlxuICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IG1iLTRcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1oZWFkZXIgcHktMyBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJtLTAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXByaW1hcnlcIj5NZWRpYTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBib3JkZXJcIj5cbiAgICAgICAgICAgIDx2dWUtZHJvcHpvbmVcbiAgICAgICAgICAgICAgICByZWY9XCJteVZ1ZURyb3B6b25lXCJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3B6b25lXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImRyb3B6b25lT3B0aW9uc1wiXG4gICAgICAgICAgICA+PC92dWUtZHJvcHpvbmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgbWItNFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWhlYWRlciBweS0zIGQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoNiBjbGFzcz1cIm0tMCBmb250LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeVwiPlZhcmlhbnRzPC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2R1Y3RfdmFyaWFudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk9wdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJpdGVtLm9wdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJ2YXJpYW50IGluIHZhcmlhbnRzXCIgOnZhbHVlPVwidmFyaWFudC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IHZhcmlhbnQudGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvZHVjdF92YXJpYW50Lmxlbmd0aCAhPSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3ZhcmlhbnQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhcmlhbnQ7XG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbG9hdC1yaWdodCB0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgID5SZW1vdmU8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgdi1lbHNlIGZvcj1cIlwiPi48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0LXRhZ1xuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnRhZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImNoZWNrVmFyaWFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgPjwvaW5wdXQtdGFnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWZvb3RlclwiXG4gICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgcHJvZHVjdF92YXJpYW50Lmxlbmd0aCA8IHZhcmlhbnRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICBwcm9kdWN0X3ZhcmlhbnQubGVuZ3RoIDwgM1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm5ld1ZhcmlhbnRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICBBZGQgYW5vdGhlciBvcHRpb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHRleHQtdXBwZXJjYXNlXCI+UHJldmlldzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5WYXJpYW50PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5QcmljZTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+U3RvY2s8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidmFyaWFudF9wcmljZSBpbiBwcm9kdWN0X3ZhcmlhbnRfcHJpY2VzXCI+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgdmFyaWFudF9wcmljZS50aXRsZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInZhcmlhbnRfcHJpY2UucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidmFyaWFudF9wcmljZS5zdG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJ1cGRhdGVQcm9kdWN0XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiPlxuICAgICAgU2F2ZVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnXCI+Q2FuY2VsPC9idXR0b24+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHZ1ZTJEcm9wem9uZSBmcm9tIFwidnVlMi1kcm9wem9uZVwiO1xuaW1wb3J0IFwidnVlMi1kcm9wem9uZS9kaXN0L3Z1ZTJEcm9wem9uZS5taW4uY3NzXCI7XG5pbXBvcnQgSW5wdXRUYWcgZnJvbSBcInZ1ZS1pbnB1dC10YWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgdnVlRHJvcHpvbmU6IHZ1ZTJEcm9wem9uZSxcbiAgICBJbnB1dFRhZyxcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvZHVjdF9uYW1lOiBcIlwiLFxuICAgICAgcHJvZHVjdF9za3U6IFwiXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGltYWdlczogW10sXG4gICAgICBwcm9kdWN0X3ZhcmlhbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIG9wdGlvbjogdGhpcy52YXJpYW50c1swXS5pZCxcbiAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBwcm9kdWN0X3ZhcmlhbnRfcHJpY2VzOiBbXSxcbiAgICAgIGRyb3B6b25lT3B0aW9uczoge1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9odHRwYmluLm9yZy9wb3N0XCIsXG4gICAgICAgIHRodW1ibmFpbFdpZHRoOiAxNTAsXG4gICAgICAgIG1heEZpbGVzaXplOiAwLjUsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJNeS1Bd2Vzb21lLUhlYWRlclwiOiBcImhlYWRlciB2YWx1ZVwiIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVQcm9kdWN0KCkge1xuICAgICAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byB1cGRhdGUgdGhlIHByb2R1Y3RcbiAgICAgIC8vIFlvdSBjYW4gdXNlIGxpYnJhcmllcyBsaWtlIEF4aW9zIHRvIG1ha2UgdGhlIHJlcXVlc3RcblxuICAgICAgLy8gRXhhbXBsZSB1c2luZyBBeGlvczpcbiAgICAgIGF4aW9zXG4gICAgICAgICAgLnB1dChgL3Byb2R1Y3QvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuaWR9L2VkaXQvYCwgdGhpcy5wcm9kdWN0KVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3VjY2Vzc2Z1bCByZXNwb25zZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2R1Y3QgdXBkYXRlZDonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIHRoZSBwcm9kdWN0IGxpc3QgcGFnZVxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9wcm9kdWN0Jyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBwcm9kdWN0OicsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIG5ld1ZhcmlhbnQoKSB7XG4gICAgICBsZXQgYWxsX3ZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5tYXAoKGVsKSA9PiBlbC5pZCk7XG4gICAgICBsZXQgc2VsZWN0ZWRfdmFyaWFudHMgPSB0aGlzLnByb2R1Y3RfdmFyaWFudC5tYXAoKGVsKSA9PiBlbC5vcHRpb24pO1xuICAgICAgbGV0IGF2YWlsYWJsZV92YXJpYW50cyA9IGFsbF92YXJpYW50cy5maWx0ZXIoXG4gICAgICAgIChlbnRyeTEpID0+ICFzZWxlY3RlZF92YXJpYW50cy5zb21lKChlbnRyeTIpID0+IGVudHJ5MSA9PSBlbnRyeTIpXG4gICAgICApO1xuICAgICAgLy8gY29uc29sZS5sb2coYXZhaWxhYmxlX3ZhcmlhbnRzKVxuXG4gICAgICB0aGlzLnByb2R1Y3RfdmFyaWFudC5wdXNoKHtcbiAgICAgICAgb3B0aW9uOiBhdmFpbGFibGVfdmFyaWFudHNbMF0sXG4gICAgICAgIHRhZ3M6IFtdLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIGNoZWNrIHRoZSB2YXJpYW50IGFuZCByZW5kZXIgYWxsIHRoZSBjb21iaW5hdGlvblxuICAgIGNoZWNrVmFyaWFudCgpIHtcbiAgICAgIGxldCB0YWdzID0gW107XG4gICAgICB0aGlzLnByb2R1Y3RfdmFyaWFudF9wcmljZXMgPSBbXTtcbiAgICAgIHRoaXMucHJvZHVjdF92YXJpYW50LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICB0YWdzLnB1c2goaXRlbS50YWdzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmdldENvbWJuKHRhZ3MpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0X3ZhcmlhbnRfcHJpY2VzLnB1c2goe1xuICAgICAgICAgIHRpdGxlOiBpdGVtLFxuICAgICAgICAgIHByaWNlOiAwLFxuICAgICAgICAgIHN0b2NrOiAwLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBjb21iaW5hdGlvbiBhbGdvcml0aG1cbiAgICBnZXRDb21ibihhcnIsIHByZSkge1xuICAgICAgcHJlID0gcHJlIHx8IFwiXCI7XG4gICAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByZTtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBhbnMgPSBhcnJbMF0ucmVkdWNlKGZ1bmN0aW9uIChhbnMsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhbnMuY29uY2F0KHNlbGYuZ2V0Q29tYm4oYXJyLnNsaWNlKDEpLCBwcmUgKyB2YWx1ZSArIFwiL1wiKSk7XG4gICAgICB9LCBbXSk7XG4gICAgICByZXR1cm4gYW5zO1xuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy8gRmV0Y2ggdGhlIHByb2R1Y3QgZGF0YSBmcm9tIHRoZSBBUElcbiAgICAvLyBZb3UgY2FuIHVzZSBsaWJyYXJpZXMgbGlrZSBBeGlvcyB0byBtYWtlIHRoZSByZXF1ZXN0XG5cbiAgICAvLyBFeGFtcGxlIHVzaW5nIEF4aW9zOlxuICAgIHZhciBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB2YXIgcGF0aFNlZ21lbnRzID0gY3VycmVudFBhdGguc3BsaXQoJy8nKTtcblxuICAgIHZhciBwcm9kdWN0SWQgPSBwYXRoU2VnbWVudHNbMl1cbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICBheGlvc1xuICAgICAgICAuZ2V0KGAvcHJvZHVjdC8ke3Byb2R1Y3RJZH0vYClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIC8vIFNldCB0aGUgZmV0Y2hlZCBwcm9kdWN0IGRhdGEgdG8gdGhlIGNvbXBvbmVudCdzIGRhdGFcbiAgICAgICAgICAvLyB0aGlzLnByb2R1Y3QgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgdGhpcy5wcm9kdWN0X25hbWUgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RbMF0udGl0bGVcbiAgICAgICAgICB0aGlzLnByb2R1Y3Rfc2t1ID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0WzBdLnNrdVxuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSByZXNwb25zZS5kYXRhLnByb2R1Y3RbMF0uZGVzY3JpcHRpb25cbiAgICAgICAgICB0aGlzLnByb2R1Y3RfdmFyaWFudCA9IHtcbiAgICAgICAgICAgICdpZCc6MSxcbiAgICAgICAgICAgICd0aXRsZSc6ICdzaXplJ1xuICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0OicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gIH0sXG4gIFxufTtcbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFzSkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/assets/js/components/product/EditProduct.vue?vue&type=script&lang=js&\n");

/***/ })

})