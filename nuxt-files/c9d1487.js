(window.webpackJsonp=window.webpackJsonp||[]).push([[21,10,18],{393:function(e,t,n){var o=n(16),r="["+n(394)+"]",c=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),l=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(d,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},394:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},395:function(e,t,n){"use strict";var o=n(11),r=n(3),c=n(64),d=n(17),l=n(12),h=n(29),f=n(148),v=n(63),m=n(5),y=n(65),C=n(101).f,_=n(38).f,w=n(18).f,x=n(393).trim,E="Number",S=r.Number,T=S.prototype,N=h(y(T))==E,I=function(e){var t,n,o,r,c,d,l,code,h=v(e,!1);if("string"==typeof h&&h.length>2)if(43===(t=(h=x(h)).charCodeAt(0))||45===t){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(d=(c=h.slice(2)).length,l=0;l<d;l++)if((code=c.charCodeAt(l))<48||code>r)return NaN;return parseInt(c,o)}return+h};if(c(E,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var O,D=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof D&&(N?m((function(){T.valueOf.call(n)})):h(n)!=E)?f(new S(I(t)),n,D):I(t)},A=o?C(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;A.length>k;k++)l(S,O=A[k])&&!l(D,O)&&w(D,O,_(S,O));D.prototype=T,T.constructor=D,d(r,E,D)}},396:function(e,t,n){"use strict";n.r(t);n(62),n(48),n(100),n(103),n(395),n(66),n(147),n(30),n(67),n(102),n(49),n(39),n(40);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(e){return["height","width"].includes(e)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var e=this,t=[];return Object.keys(this.cachedStyles).forEach((function(n){t.push("".concat(e.convertToCssProperty(n)," ").concat(e.duration,"ms ").concat(e.easing))})),t.join(", ")}},methods:{enter:function(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),setTimeout(t,this.duration)},afterEnter:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},leave:function(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),setTimeout(t,this.duration)},afterLeave:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},detectAndCacheDimensions:function(e){if(!this.cachedStyles){var t=e.style.visibility,n=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(e){return"height"===this.dimension?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:"width"===this.dimension?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition:function(e){e.style.transition=this.transition},unsetTransition:function(e){e.style.transition=""},hideOverflow:function(e){e.style.overflow="hidden"},unsetOverflow:function(e){e.style.overflow=""},setClosedDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]="0"}))},setOpenedDimensions:function(e){var t=this;Object.keys(this.cachedStyles).forEach((function(n){e.style[n]=t.cachedStyles[n]}))},unsetDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]=""}))},forceRepaint:function(e){getComputedStyle(e)[this.dimension]},getCssValue:function(e,style){return getComputedStyle(e,null).getPropertyValue(style)},convertToCssProperty:function(style){var e=style.match(/([A-Z])/g);if(!e)return style;for(var i=0,t=e.length;i<t;i++)style=style.replace(new RegExp(e[i]),"-"+e[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(8),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:e.name},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},397:function(e,t,n){"use strict";var o=n(4),r=n(393).trim;o({target:"String",proto:!0,forced:n(398)("trim")},{trim:function(){return r(this)}})},398:function(e,t,n){var o=n(5),r=n(394);e.exports=function(e){return o((function(){return!!r[e]()||"​᠎"!="​᠎"[e]()||r[e].name!==e}))}},399:function(e,t,n){"use strict";n.r(t);n(100),n(397);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function e(t,n){for(var o,r=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<t.children.length;i++)o=document.createTextNode("\n"+r),t.insertBefore(o,t.children[i]),e(t.children[i],n),t.lastElementChild==t.children[i]&&(o=document.createTextNode("\n"+c),t.appendChild(o));return t}var t,div;this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim()+"\n",e(div,0).innerHTML)}},mounted:function(){this.setSrc()}},r=n(8),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[e.nocode?e._e():n("div",{staticClass:"inline-block select-none",on:{click:function(t){e.showcode=!e.showcode}}},[e.showcode?e._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),e._v(" "),e.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):e._e()],1),e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("div",[n("collapse-transition",[!e.nocode&&e.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):e._e()]),e._v(" "),n("collapse-transition",[e.showcode?e._e():n("div",[n("div",{ref:"component",class:e.classes},[e._t("default")],2)])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(146).default,CollapseTransition:n(396).default})},429:function(e,t,n){"use strict";n.r(t);var o=n(8),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Wrapper",{attrs:{title:"artboard - phone",classes:"overflow-x-auto bg-base-200 p-10 rounded-box border border-base-content border-opacity-10"}},[n("div",{staticClass:"flex w-auto space-x-10 flex-nowrap"},[n("div",{staticClass:"artboard phone-1 artboard-demo"},[e._v("\n        phone-1\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-2 artboard-demo"},[e._v("\n        phone-2\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-3 artboard-demo"},[e._v("\n        phone-3\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-4 artboard-demo"},[e._v("\n        phone-4\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-5 artboard-demo"},[e._v("\n        phone-5\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-6 artboard-demo"},[e._v("\n        phone-6\n      ")])])]),e._v(" "),n("Wrapper",{attrs:{title:"artboard - phone horizontal",classes:"overflow-x-auto bg-base-200 p-4 rounded-box border border-base-content border-opacity-10"}},[n("div",{staticClass:"flex w-auto space-x-4 flex-nowrap"},[n("div",{staticClass:"artboard phone-1 horizontal artboard-demo"},[e._v("\n        phone-1\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-2 horizontal artboard-demo"},[e._v("\n        phone-2\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-3 horizontal artboard-demo"},[e._v("\n        phone-3\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-4 horizontal artboard-demo"},[e._v("\n        phone-4\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-5 horizontal artboard-demo"},[e._v("\n        phone-5\n      ")]),e._v(" "),n("div",{staticClass:"artboard phone-6 horizontal artboard-demo"},[e._v("\n        phone-6\n      ")])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Wrapper:n(399).default})}}]);