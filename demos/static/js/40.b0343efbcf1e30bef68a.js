webpackJsonp([40,67],{213:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(221),o=n(r);t.default={mounted:function(){var e=this;this.$nextTick(function(){(0,o.default)(e.$el)})}}},216:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(127);t.default={mixins:[n.childMixin],props:{activeClass:String,disabled:Boolean},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},217:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(127);t.default={mixins:[n.parentMixin],mounted:function(){var e=this;this.$nextTick(function(){setTimeout(function(){e.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0}},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},barStyle:function(){return{left:this.barLeft,right:this.barRight,display:"block",backgroundColor:this.activeColor,height:this.lineWidth+"px",transition:this.hasReady?null:"none"}},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(e,t){this.direction=e>t?"forward":"backward",this.$emit("on-index-change",e,t)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},221:function(e,t){"use strict";function i(){var e=window.navigator.userAgent,t=e.match(/(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/);return t&&t[2]&&parseInt(t[2].replace(/_/g,"."),10)>=6}function n(){for(var e=["","-webkit-","-ms-","-moz-","-o-"],t="",i=0;i<e.length;i++)t+="position:"+e[i]+"sticky";var n=document.createElement("div"),r=document.body;n.style.cssText="display:none"+t,r.appendChild(n);var o=/sticky/i.test(window.getComputedStyle(n).position);return r.removeChild(n),n=null,o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(i()||n())e.classList.add("vux-sticky");else{var t=e.offsetTop;window.addEventListener("scroll",function(){window.scrollY>=t?e.classList.add("vux-fixed"):e.classList.remove("vux-fixed")})}}},248:function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".vux-sticky{width:100%;position:-webkit-sticky;position:sticky;top:0}.vux-fixed{width:100%;position:fixed;top:0}","",{version:3,sources:["/./node_modules/vux/src/components/sticky/index.vue"],names:[],mappings:"AACA,YACE,WAAY,AACZ,wBAAyB,AACzB,gBAAiB,AACjB,KAAO,CACR,AACD,WACE,WAAY,AACZ,eAAgB,AAChB,KAAO,CACR",file:"index.vue",sourcesContent:["\n.vux-sticky {\r\n  width: 100%;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\n}\n.vux-fixed {\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\n}\r\n"],sourceRoot:"webpack://"}])},250:function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04be02}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#f90;border-bottom:3px solid #04be02}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}","",{version:3,sources:["/./node_modules/vux/src/components/tab/tab.vue"],names:[],mappings:"AACA,iBAAiB,kBAAkB,WAAW,SAAS,OAAO,wBAAwB,CACrF,AACD,oCAAoC,+FAAqG,sFAA4F,CACpO,AACD,qCAAqC,+FAAqG,sFAA4F,CACrO,AACD,SAAS,oBAAoB,AAAqB,oBAAoB,aAAa,sBAAsB,YAAY,iBAAiB,CACrI,AACD,gBAAgB,UAAU,SAAS,UAAU,eAAe,wBAAwB,qBAAqB,eAAe,CACvH,AACD,uBAAuB,cAAc,mBAAmB,AAAe,WAAW,OAAO,WAAW,YAAY,sBAAsB,0FAAqG,qFAAgG,yBAAyB,eAAe,kBAAkB,iBAAiB,UAAU,CAC/Z,AACD,wCAAwC,WAAc,+BAA+B,CACpF,AACD,wCAAwC,UAAU,CACjD,AACD,2DAA2D,cAAc,CACxE",file:"tab.vue",sourcesContent:["\n.vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04BE02\n}\n.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35, 0, .25, 1),left .3s cubic-bezier(.35, 0, .25, 1) .09s;transition:right .3s cubic-bezier(.35, 0, .25, 1),left .3s cubic-bezier(.35, 0, .25, 1) .09s\n}\n.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35, 0, .25, 1) .09s,left .3s cubic-bezier(.35, 0, .25, 1);transition:right .3s cubic-bezier(.35, 0, .25, 1) .09s,left .3s cubic-bezier(.35, 0, .25, 1)\n}\n.vux-tab{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fff;height:44px;position:relative\n}\n.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none\n}\n.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top, #e5e5e5, #e5e5e5, rgba(229,229,229,0)) bottom left no-repeat;background:linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229,229,229,0)) bottom left no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666\n}\n.vux-tab .vux-tab-item.vux-tab-selected{color:#FF9900;border-bottom:3px solid #04BE02\n}\n.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0\n}"],sourceRoot:"webpack://"}])},256:function(e,t,i){var n=i(248);"string"==typeof n&&(n=[[e.id,n,""]]);i(3)(n,{});n.locals&&(e.exports=n.locals)},258:function(e,t,i){var n=i(250);"string"==typeof n&&(n=[[e.id,n,""]]);i(3)(n,{});n.locals&&(e.exports=n.locals)},275:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._t("default")],2)},staticRenderFns:[]}},277:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-tab-item",class:[e.currentSelected?e.activeClass:"",{"vux-tab-selected":e.currentSelected,"vux-tab-disabled":e.disabled,"vux-tab-selected":e.currentSelected}],style:e.style,on:{click:e.onItemClick}},[e._t("default")],2)},staticRenderFns:[]}},280:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!e.animate}},[e._t("default"),e._v(" "),e.animate?i("div",{staticClass:"vux-tab-ink-bar",class:e.barClass,style:e.barStyle}):e._e()],2)},staticRenderFns:[]}},285:function(e,t,i){var n,r;i(256),n=i(213);var o=i(275);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},288:function(e,t,i){var n,r;n=i(216);var o=i(277);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},289:function(e,t,i){var n,r;i(258),n=i(217);var o=i(280);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},399:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(289),o=n(r),a=i(288),s=n(a),b=i(285),c=n(b);t.default={components:{Tab:o.default,TabItem:s.default,Sticky:c.default}}},612:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("sticky",[i("tab",{attrs:{"line-width":1}},[i("tab-item",{attrs:{selected:""}},[e._v("正在正映")]),e._v(" "),i("tab-item",[e._v("即将上映")])],1)],1),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("br")],1)},staticRenderFns:[]}},813:function(e,t,i){var n,r;n=i(399);var o=i(612);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n}});
//# sourceMappingURL=40.b0343efbcf1e30bef68a.js.map