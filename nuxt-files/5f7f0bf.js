(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{399:function(t,e,n){var o=n(18),l="["+n(400)+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},400:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},401:function(t,e,n){"use strict";var o=n(2),l=n(399).trim;o({target:"String",proto:!0,forced:n(402)("trim")},{trim:function(){return l(this)}})},402:function(t,e,n){var o=n(9),l=n(400);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},403:function(t,e,n){"use strict";var o=n(13),l=n(3),r=n(79),c=n(19),d=n(15),v=n(31),h=n(159),f=n(54),m=n(9),y=n(80),_=n(55).f,C=n(26).f,w=n(16).f,x=n(399).trim,S=l.Number,I=S.prototype,T="Number"==v(y(I)),k=function(t){var e,n,o,l,r,c,d,code,v=f(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=x(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+v}for(c=(r=v.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>l)return NaN;return parseInt(r,o)}return+v};if(r("Number",!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var N,D=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof D&&(T?m((function(){I.valueOf.call(n)})):"Number"!=v(n))?h(new S(k(e)),n,D):k(e)},E=o?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;E.length>j;j++)d(S,N=E[j])&&!d(D,N)&&w(D,N,C(S,N));D.prototype=I,I.constructor=D,c(l,"Number",D)}},404:function(t,e,n){"use strict";n.r(e);n(155),n(401),n(5),n(6),n(7),n(8);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){var t,div;this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim()+"\n",function t(e,n){for(var o,l=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+r),e.appendChild(o));return e}(div,0).innerHTML)}},mounted:function(){this.setSrc()}},l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[t.nocode?t._e():n("div",{staticClass:"inline-block select-none",on:{click:function(e){t.showcode=!t.showcode}}},[t.showcode?t._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),t._v(" "),t.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):t._e()],1),t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(156).default,CollapseTransition:n(405).default})},405:function(t,e,n){"use strict";n.r(e);n(108),n(32),n(81),n(155),n(56),n(403),n(82),n(158),n(33),n(42),n(157),n(57),n(34),n(43),n(5),n(6),n(7),n(8);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(12),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:this.name},on:{enter:this.enter,"after-enter":this.afterEnter,leave:this.leave,"after-leave":this.afterLeave}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},451:function(t,e,n){"use strict";n.r(e);var o=n(12),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      1. Component classes\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      This is how you usually design a normal button with Tailwind CSS:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code bg-content-800 text-content-100"},[n("pre",[n("code",[t._v('<button class="'),n("span",{staticClass:"text-warning"},[t._v("inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600")]),t._v('">Tailwind Button</button>')])])])]),t._v(" "),n("div",{staticClass:"w-full my-2"},[n("button",{staticClass:"inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600"},[t._v("Tailwind Button")])]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      With DaisyUI, you can use component classes:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code bg-content-800 text-content-100"},[n("pre",[n("code",[t._v('<button class="'),n("span",{staticClass:"text-success"},[t._v("btn btn-primary")]),t._v('">DaisyUI Button</button>')])])])]),t._v(" "),n("div",{staticClass:"w-full my-2"},[n("button",{staticClass:"btn btn-primary"},[t._v("DaisyUI Button")])]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      And still use utility classes for customization:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code bg-content-800 text-content-100"},[n("pre",[n("code",[t._v('<button class="'),n("span",{staticClass:"text-success"},[t._v("btn btn-primary")]),t._v(" "),n("span",{staticClass:"text-info"},[t._v("rounded-full")]),t._v('">DaisyUI Button</button>')])])])]),t._v(" "),n("div",{staticClass:"w-full my-2"},[n("button",{staticClass:"rounded-full btn btn-primary"},[t._v("DaisyUI Button")])]),t._v(" "),n("div",{staticClass:"py-6 mb-4 text-content-700"},[n("p",{staticClass:"prose"},[t._v("\n        Repeating all those low-level classes all over your code base makes it hard to manage, hard to edit and hard to scale.\n        "),n("br"),t._v("\n        If you decide to change the padding of every button on your project, you need to find all your buttons and edit the class names. You will never know if all your buttons are using the the exact same style because a class might have changed in a file and that button might not have hover style for instance.\n        "),n("br"),t._v("\n        If you use DaisyUI, you will be focusing on your design system only, not tons of class names you need on every project.\n        "),n("br"),t._v("\n        Instead of using lots of utility classes for all elements, use component classes like "),n("span",{staticClass:"badge"},[t._v("btn")]),t._v(", "),n("span",{staticClass:"badge"},[t._v("card")]),t._v(", "),n("span",{staticClass:"badge"},[t._v("navbar")]),t._v(", etc... for your common elements to make sure all your elements use same style.\n      ")])]),t._v(" "),n("div",{staticClass:"mt-4 prose"},[n("blockquote",[t._v("- But I'm using a templating system (vue, blade, hbs, ...) "),n("br"),t._v("and I use one component for all my buttons.")])]),t._v(" "),n("div",{staticClass:"py-6 mb-4 text-content-700"},[n("p",{staticClass:"prose"},[t._v("\n        Yes, That might be solution in some cases but then again, you need to define every variant for your component by mixing design decisions inside your logic code. You need diffrent variants of almost all your components, that can be handled in CSS (unless you want to make your job harder)\n        "),n("br"),t._v("\n        You just need to use a "),n("span",{staticClass:"badge"},[t._v("btn")]),t._v(" or a "),n("span",{staticClass:"badge"},[t._v("btn-primary")]),t._v(" for a variant.\n      ")])]),t._v(" "),n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      2. Tailwind CSS plugin\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      DaisyUI is a Tailwind CSS plugin so you can simply add it to your "),n("span",{staticClass:"badge badge-info"},[t._v("tailwind.config.js")]),t._v(" file.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      3. Based on design system\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      DaisyUI applies design system concepts to Tailwind CSS. Every component on your page is committed to a single design system.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      4. Customizable\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      You can customize the design of components with Tailwind utility classes and CSS variables.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      5. Semantic color names\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n    Tailwind CSS provides a wide range of colors and it won't limit your choice when you're styling your page. DaisyUI however, is focusing on design system concepts and if you're creating a design system, you need to define your brand colors and create your layout commited to that color palette.\n    "),n("br"),t._v("\n      Instead of using general-purpose color names like "),n("span",{staticClass:"badge badge-warning"},[t._v("blue-600")]),t._v(" or "),n("span",{staticClass:"badge badge-warning"},[t._v("gray-100")]),t._v(" use semantic role names like "),n("span",{staticClass:"badge badge-success"},[t._v("primary")]),t._v(", "),n("span",{staticClass:"badge badge-success"},[t._v("content-300")]),t._v(" or "),n("span",{staticClass:"badge badge-success"},[t._v("info")]),t._v(". This way, you can change primary color of your whole project using a single CSS variable. No need to replace all color classes in all files. You can also define multiple themes (not just dark-mode) using CSS variables.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      6. RTL support\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      Enable "),n("span",{staticClass:"badge badge-info"},[t._v("rtl")]),t._v(" config for right to left layouts.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      7. Themeable\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      Using semantic color names and CSS variables makes theming easy and fun. Every theme is just a set of CSS variables so you can add multiple themes (not just light/dark) and you can change the colors by changing a CSS variable.\n      "),n("br"),t._v("\n      You can also use DaisyUI default themes if you enabe "),n("span",{staticClass:"badge badge-info"},[t._v("themes")]),t._v(" config.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      8. Designer-friendly\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      DaisyUI separated the skeleton style of every component from its visual style. You can disable "),n("span",{staticClass:"badge badge-info"},[t._v("styled")]),t._v(" config and components won't have visual style. Now you can set colors or other visual styles based on a skeleton.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 text-4xl font-bold"},[t._v("\n      9. No striction on layout or typography\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      Tailwind utility classes gives you ultimate flexibility for spacing and layout It's easy to create any layout with flexbox or grid. Also for spacing (margins, paddings, etc...), Tailwind classes are perfect.\n      "),n("br"),t._v("\n      So, there is no grid system or strict layout rules. You can create any layout with "),n("span",{staticClass:"badge badge-info"},[t._v("flexbox")]),t._v(" or "),n("span",{staticClass:"badge badge-info"},[t._v("CSS gird")]),t._v(" using Tailwind's utility classes.\n      "),n("br"),t._v("\n      For typography, you should use the official "),n("a",{attrs:{href:"https://twitter.com/Saadeghi",target:"_blank"}},[t._v("Tailwind Typography plugin ↗︎")]),t._v(".\n    ")])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-content-200"},[n("NuxtLink",{staticClass:"btn-lg btn btn-outline text-xs lg:text-lg",attrs:{to:"/core/colors"}},[t._v("\n      Next: Colors\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"my-6 text-5xl font-bold"},[e("span",{staticClass:"text-primary"},[this._v("Features")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(109).default,Wrapper:n(404).default,Icon:n(156).default})}}]);