(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{399:function(t,e,n){var o=n(18),r="["+n(400)+"]",c=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),l=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},400:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},401:function(t,e,n){"use strict";var o=n(2),r=n(399).trim;o({target:"String",proto:!0,forced:n(402)("trim")},{trim:function(){return r(this)}})},402:function(t,e,n){var o=n(6),r=n(400);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},403:function(t,e,n){"use strict";var o=n(13),r=n(3),c=n(79),d=n(19),l=n(15),h=n(31),f=n(159),v=n(54),m=n(6),y=n(80),C=n(55).f,_=n(26).f,w=n(16).f,x=n(399).trim,N=r.Number,E=N.prototype,S="Number"==h(y(E)),T=function(t){var e,n,o,r,c,d,l,code,h=v(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=x(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(d=(c=h.slice(2)).length,l=0;l<d;l++)if((code=c.charCodeAt(l))<48||code>r)return NaN;return parseInt(c,o)}return+h};if(c("Number",!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var I,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(S?m((function(){E.valueOf.call(n)})):"Number"!=h(n))?f(new N(T(e)),n,O):T(e)},D=o?C(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;D.length>A;A++)l(N,I=D[A])&&!l(O,I)&&w(O,I,_(N,I));O.prototype=E,E.constructor=O,d(r,"Number",O)}},404:function(t,e,n){"use strict";n.r(e);n(155),n(401),n(5),n(7),n(8),n(9);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){var t,div;this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim()+"\n",function t(e,n){for(var o,r=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+r),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+c),e.appendChild(o));return e}(div,0).innerHTML)}},mounted:function(){this.setSrc()}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[t.nocode?t._e():n("div",{staticClass:"inline-block select-none",on:{click:function(e){t.showcode=!t.showcode}}},[t.showcode?t._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),t._v(" "),t.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):t._e()],1),t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(156).default,CollapseTransition:n(405).default})},405:function(t,e,n){"use strict";n.r(e);n(108),n(32),n(81),n(155),n(56),n(403),n(82),n(158),n(33),n(42),n(157),n(57),n(34),n(43),n(5),n(7),n(8),n(9);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:this.name},on:{enter:this.enter,"after-enter":this.afterEnter,leave:this.leave,"after-leave":this.afterLeave}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},435:function(t,e,n){"use strict";n.r(e);var o=n(12),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Wrapper",{attrs:{title:"artboard - phone",classes:"overflow-x-auto bg-base-200 p-10 rounded-box border border-base-content border-opacity-10"}},[n("div",{staticClass:"flex w-auto space-x-10 flex-nowrap"},[n("div",{staticClass:"artboard phone-1 artboard-demo"},[t._v("\n        phone-1\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-2 artboard-demo"},[t._v("\n        phone-2\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-3 artboard-demo"},[t._v("\n        phone-3\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-4 artboard-demo"},[t._v("\n        phone-4\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-5 artboard-demo"},[t._v("\n        phone-5\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-6 artboard-demo"},[t._v("\n        phone-6\n      ")])])]),t._v(" "),n("Wrapper",{attrs:{title:"artboard - phone horizontal",classes:"overflow-x-auto bg-base-200 p-4 rounded-box border border-base-content border-opacity-10"}},[n("div",{staticClass:"flex w-auto space-x-4 flex-nowrap"},[n("div",{staticClass:"artboard phone-1 horizontal artboard-demo"},[t._v("\n        phone-1\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-2 horizontal artboard-demo"},[t._v("\n        phone-2\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-3 horizontal artboard-demo"},[t._v("\n        phone-3\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-4 horizontal artboard-demo"},[t._v("\n        phone-4\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-5 horizontal artboard-demo"},[t._v("\n        phone-5\n      ")]),t._v(" "),n("div",{staticClass:"artboard phone-6 horizontal artboard-demo"},[t._v("\n        phone-6\n      ")])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(404).default})}}]);