(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{399:function(t,e,n){var o=n(18),c="["+n(400)+"]",r=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},400:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},401:function(t,e,n){"use strict";var o=n(2),c=n(399).trim;o({target:"String",proto:!0,forced:n(402)("trim")},{trim:function(){return c(this)}})},402:function(t,e,n){var o=n(6),c=n(400);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!="​᠎"[t]()||c[t].name!==t}))}},403:function(t,e,n){"use strict";var o=n(13),c=n(3),r=n(79),l=n(19),d=n(15),v=n(31),h=n(159),m=n(54),f=n(6),_=n(80),x=n(55).f,C=n(26).f,y=n(16).f,k=n(399).trim,w=c.Number,S=w.prototype,N="Number"==v(_(S)),I=function(t){var e,n,o,c,r,l,d,code,v=m(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=k(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:o=2,c=49;break;case 79:case 111:o=8,c=55;break;default:return+v}for(l=(r=v.slice(2)).length,d=0;d<l;d++)if((code=r.charCodeAt(d))<48||code>c)return NaN;return parseInt(r,o)}return+v};if(r("Number",!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var T,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(N?f((function(){S.valueOf.call(n)})):"Number"!=v(n))?h(new w(I(e)),n,E):I(e)},O=o?x(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;O.length>A;A++)d(w,T=O[A])&&!d(E,T)&&y(E,T,C(w,T));E.prototype=S,S.constructor=E,l(c,"Number",E)}},404:function(t,e,n){"use strict";n.r(e);n(155),n(401),n(5),n(7),n(8),n(9);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){var t,div;this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim()+"\n",function t(e,n){for(var o,c=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+c),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+r),e.appendChild(o));return e}(div,0).innerHTML)}},mounted:function(){this.setSrc()}},c=n(12),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[t.nocode?t._e():n("div",{staticClass:"inline-block select-none",on:{click:function(e){t.showcode=!t.showcode}}},[t.showcode?t._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),t._v(" "),t.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):t._e()],1),t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(156).default,CollapseTransition:n(405).default})},405:function(t,e,n){"use strict";n.r(e);n(108),n(32),n(81),n(155),n(56),n(403),n(82),n(158),n(33),n(42),n(157),n(57),n(34),n(43),n(5),n(7),n(8),n(9);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},c=n(12),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:this.name},on:{enter:this.enter,"after-enter":this.afterEnter,leave:this.leave,"after-leave":this.afterLeave}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},427:function(t,e,n){"use strict";n.r(e);n(5),n(7),n(8),n(9);var o={data:function(){return{daisyuiMaxVersion:"0.13.3"}}},c=n(12),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("p",{staticClass:"mb-4 text-neutral-content text-opacity-20"},[t._v("\n      DaisyUI uses HSL color system for better theming.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      You can set up 3 values of H,S,L (hue, saturation, lightness) for each color in your CSS file. It can be your main Tailwind CSS file or a file you @import to your main CSS file.\n      "),n("br"),t._v("You can easily do this on "),n("NuxtLink",{attrs:{to:"/core/colors"}},[t._v("DaisyUI Color Generator")])],1),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v(":root {\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/793ef9/000000?text=+"}}),t._v(" --p: 340 82% 62%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Primary color */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/570df8/000000?text=+"}}),t._v(" --pf: 340 82% 52%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Primary color - focused */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --pc: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on primary color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff24cc/000000?text=+"}}),t._v(" --s: 262 52% 56%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Secondary color */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/f000b8/000000?text=+"}}),t._v(" --sf: 262 52% 46%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Secondary color - focused */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --sc: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on secondary color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/60d7cb/000000?text=+"}}),t._v(" --a: 199 98% 58%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Accent color */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/37cdbe/000000?text=+"}}),t._v(" --af: 199 98% 48%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Accent color - focused */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --ac: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on accent color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/1f2937/000000?text=+"}}),t._v(" --n: 215 28% 17%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Neutral color */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/111827/000000?text=+"}}),t._v(" --nf: 221 39% 11%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Neutral color - focused */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --nc: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on neutral color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --b1: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Base color of page, used for blank backgrounds */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/f9fafb/000000?text=+"}}),t._v(" --b2: 210 20% 98%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Base color, a little darker */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/d1d5db/000000?text=+"}}),t._v(" --b3: 216 12% 84%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Base color, even more darker */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/1f2937/000000?text=+"}}),t._v(" --bc: 215 28% 17%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on base color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2094f3/000000?text=+"}}),t._v(" --in: 207 90% 54%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Info */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/009485/000000?text=+"}}),t._v(" --su: 174 100% 29%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Success */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff9900/000000?text=+"}}),t._v(" --wa: 36 100% 50%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Warning */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff5724/000000?text=+"}}),t._v(" --er: 14 100% 57%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Error */")]),t._v("\n  }\n\n  "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Let's add a second theme */")]),t._v("\n  [data-theme='dark'] {\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/3d4451/000000?text=+"}}),t._v(" --b1: 219 14% 28%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2a2e37/000000?text=+"}}),t._v(" --b2: 222 13% 19%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/16181d/000000?text=+"}}),t._v(" --b3: 223 14% 10%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ebecf0/000000?text=+"}}),t._v(" --bc: 228 14% 93%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2a2e37/000000?text=+"}}),t._v(" --n: 222 13% 19%%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/16181d/000000?text=+"}}),t._v(" --nf: 223 14% 10%%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --nc: 0 0% 100%%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/793ef9/000000?text=+"}}),t._v(" --p: 259 94% 61%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/570df8/000000?text=+"}}),t._v(" --pf: 259 94% 51%;\n  }")])])])]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      As you can see, we are not overwriting all colors for dark theme we changed base colors to dark colors, then we made neutral colors darker and we made primary colors lighter so it fits on dark base color.\n    ")]),t._v(" "),n("p",{staticClass:"my-4 font-bold"},[t._v("\n      You can add more themes\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("[data-theme='retro'] {\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ef9995/000000?text=+"}}),t._v(" --p: 3 74% 76%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/e86f68/000000?text=+"}}),t._v(" --pf: 3 74% 66%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/282425/000000?text=+"}}),t._v(" --pc: 345 5% 15%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/a4cbb4/000000?text=+"}}),t._v(" --s: 145 27% 72%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/84b89a/000000?text=+"}}),t._v(" --sf: 145 27% 62%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/282425/000000?text=+"}}),t._v(" --sc: 345 5% 15%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ebdc99/000000?text=+"}}),t._v(" --a: 49 67% 76%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/e2cd6e/000000?text=+"}}),t._v(" --af: 49 67% 66%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/282425/000000?text=+"}}),t._v(" --ac: 345 5% 15%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/7d7259/000000?text=+"}}),t._v(" --n: 42 17% 42%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/454035/000000?text=+"}}),t._v(" --nf: 41 13% 24%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/e4d8b4/000000?text=+"}}),t._v(" --nc: 45 47% 80%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/e4d8b4/000000?text=+"}}),t._v(" --b1: 45 47% 80%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/d2c59d/000000?text=+"}}),t._v(" --b2: 45 37% 72%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/c6b386/000000?text=+"}}),t._v(" --b3: 42 36% 65%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/282425/000000?text=+"}}),t._v(" --bc: 345 5% 15%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2094f3/000000?text=+"}}),t._v(" --in: 207 90% 54%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/009485/000000?text=+"}}),t._v(" --su: 174 100% 29%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff9900/000000?text=+"}}),t._v(" --wa: 36 100% 50%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff5724/000000?text=+"}}),t._v(" --er: 14 100% 57%;\n  }")])])])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Other variables")])]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      You can also set more variables to customize your theme.\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("--rounded-box: 1rem; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for cards and other big elements */")]),t._v("\n  --rounded-btn: 0.5rem; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for buttons and similar elements */")]),t._v("\n  --rounded-badge: 9999px; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for badge and other small elements */")]),t._v("\n\n  --animation-btn: 0.25s; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* bounce animation time for button */")]),t._v("\n  --animation-input: .4s; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* bounce animation time for checkbox, toggle, etc */")]),t._v("\n\n  --padding-card: 2rem; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default card-body padding */")]),t._v("\n\n  --btn-text-case: uppercase; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default text case for buttons */")]),t._v("\n  --navbar-padding: .5rem; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default padding for navbar */")]),t._v("\n  --border-btn: 1px; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default border size for button */")]),t._v("\n  --focus-ring: 2px; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* focus ring size for button and inputs */")]),t._v("\n  --focus-ring-offset: 2px; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* focus ring offset size for button and inputs */")])])])])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Respecting OS color scheme")])]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      If you want to show dark mode for people who are using a dark mode on their OS:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("@media (prefers-color-scheme: dark){\n    :root{\n      --d: 223 14% 10%;\n      "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* ...rest of colors */")]),t._v("\n    }\n  }")])])])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("How to enable/change themes?")])]),t._v(" "),n("p",{staticClass:"my-4 text-lg prose"},[t._v("\n      You just need to add "),n("span",{staticClass:"badge badge-ghost"},[t._v('data-theme="dark"')]),t._v(" to your "),n("span",{staticClass:"badge badge-ghost"},[t._v("<html>")]),t._v(" tag. Easiest way to handle it with JavaScript is to this tiny library: "),n("a",{attrs:{href:"https://github.com/saadeghi/theme-change",target:"_blank"}},[t._v("them-change")])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Force a specific theme for a section")])]),t._v(" "),n("p",{staticClass:"my-4 text-lg prose"},[t._v("\n      You can force a section of your HTML to only use a specific theme.\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("<html "),n("span",{staticClass:"badge badge-primary"},[t._v('data-theme="dark"')]),t._v(">\n\n    <div "),n("span",{staticClass:"badge badge-primary"},[t._v('data-theme="light"')]),t._v(">\n      This div will always use light theme\n        <span "),n("span",{staticClass:"badge badge-primary"},[t._v('data-theme="retro"')]),t._v(">\n          This span will always use retro theme!\n        </span>\n    </div>\n\n  </html>")])])])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("PurgeCSS Whitelist")])]),t._v(" "),n("p",{staticClass:"my-4 text-lg prose"},[t._v("\n      If you're using Purge CSS, you might need to safe list your CSS using the comments below because your secondary themes will be purged.\n    ")]),t._v(" "),n("p",{staticClass:"my-4 text-lg font-bold"},[t._v("\n      Add this to your PurgeCSS config:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("options: {\n    safelist: [\n      "),n("span",{staticClass:"badge badge-primary"},[t._v("/data-theme$/,")]),t._v("\n    ],\n  },")])])])]),t._v(" "),n("p",{staticClass:"my-4 text-lg font-bold"},[t._v("\n      Or use CSS comments:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[n("span",{staticClass:"badge badge-primary"},[t._v("/*! purgecss start ignore */")]),t._v("\n  [data-theme='dark'] {\n    "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("...")]),t._v("\n  }\n  "),n("span",{staticClass:"badge badge-primary"},[t._v("/*! purgecss end ignore */")])])])])])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/docs/features"}},[t._v("\n      Next: features\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"my-6 text-5xl font-bold"},[e("span",{staticClass:"text-primary"},[this._v("Add Themes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(404).default,Icon:n(156).default})}}]);