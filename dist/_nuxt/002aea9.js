(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{401:function(t,n,e){var content=e(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(47).default)("614f437a",content,!0,{sourceMap:!1})},419:function(t,n,e){t.exports=e.p+"img/gi-cung-in-banner2.ca553c1.jpg"},420:function(t,n,e){t.exports=e.p+"img/gi-cung-in-banner.2516a8d.jpg"},423:function(t,n,e){"use strict";e(401)},424:function(t,n,e){var r=e(46)((function(i){return i[1]}));r.push([t.i,".slick-arrow.slick-prev{left:15px;z-index:1}.slick-arrow.slick-next{right:15px;z-index:1}.home-section .banner .single-banner .inner-text .f-category{font-size:1.15rem;font-weight:700}",""]),r.locals={},t.exports=r},432:function(t,n,e){"use strict";e.r(n);var r=[function(){var t=this._self._c;return t("div",{staticClass:"video"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"single-banner"},[t("img",{staticClass:"mw-100",attrs:{src:e(419),alt:"gì cũng in card"}})])]),this._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"single-banner"},[t("img",{staticClass:"mw-100",attrs:{src:e(420),alt:"gì cũng in card 2"}})])])])])}],c=(e(35),e(6),e(17),e(145),e(398)),l=e.n(c),o=(e(399),e(400),{name:"IndexPage",components:{VueSlickCarousel:l.a},data:function(){return{settings:{dots:!1,fade:!0},listBanner:[],listPromotion:[]}},computed:{listProduct:function(){return this.$store.menu.filter((function(t){return t.image}))}},created:function(){this.listBanner=this.$store.allPosts.filter((function(t){return 46===t.categories[0]})),this.listPromotion=this.$store.allPosts.filter((function(t){return 48===t.categories[0]}))},methods:{getImgTag:function(t){if(!t)return"";var n=t.match(/<img\s+[^>]*src="([^"]*)"/i);return n?n[1]:""}}}),d=(e(423),e(48)),component=Object(d.a)(o,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"home-section spad pt-0"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"slider-section"},[n("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.listBanner,(function(e){return n("div",{key:e.id},[n("img",{staticClass:"w-100",attrs:{src:t.getImgTag(e.content.rendered),alt:"banner ".concat(e.id)}})])})),0)],1)]),t._v(" "),n("div",{staticClass:"container"},[n("hr",{staticClass:"dashed dash-t"}),t._v(" "),n("hr",{staticClass:"dashed dash-b dash-bt"}),t._v(" "),n("h1",{staticClass:"d-none"},[t._v("Gì Cũng In")]),t._v(" "),n("div",{staticClass:"banner"},[n("div",{staticClass:"row"},t._l(t.listProduct,(function(e,r){return n("div",{key:e.title+r,staticClass:"col-6 col-lg-3"},[n("NuxtLink",{staticClass:"single-banner",attrs:{to:"/".concat(e.url)}},[n("img",{attrs:{src:e.image[0],alt:"".concat(e.title," thumb")}}),t._v(" "),n("div",{staticClass:"inner-text"},[n("h5",{staticClass:"f-category",domProps:{innerHTML:t._s(e.title)}})])])],1)})),0)]),t._v(" "),n("hr",{staticClass:"dashed dash-t"}),t._v(" "),n("hr",{staticClass:"dashed dash-b dash-bt"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"promotion mt-5 f-bottom-line"},[n("h3",[t._v("KHUYẾN MÃI HẤP DẪN")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.listPromotion,(function(e){return n("div",{key:e.id,staticClass:"col-md-4"},[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top rounded",staticStyle:{"/* height":"225px","*/\n                                width":"100%",display:"block"},attrs:{src:t.getImgTag(e.content.rendered),alt:"banner ".concat(e.id)}})])])})),0)])])])}),r,!1,null,null,null);n.default=component.exports}}]);