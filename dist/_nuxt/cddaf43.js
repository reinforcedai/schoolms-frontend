(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{494:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return n}));r(72),r(30);function n(e){return e.startsWith("/")?"".concat(t.env.baseUri).concat(e):e}}).call(this,r(231))},500:function(t,e,r){"use strict";r(9),r(10),r(11),r(4),r(14),r(8),r(15);var n=r(2),o=r(113),c=r(52),l=r(102),d=r(7),f=r(0);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(o.a,c.a).extend({name:"VLazy",directives:{intersect:l.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(f.m)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,r){this.isActive||(this.isActive=r)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},514:function(t,e,r){"use strict";r.r(e);var n=r(494),o={props:{posts:{type:Array,default:function(){return{}}}},methods:{getMedia:n.a}},c=r(29),l=r(63),d=r.n(l),f=r(235),v=r(221),h=r(183),y=r(485),m=r(181),O=r(500),j=r(482),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center","fill-height":""}},t._l(t.posts,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",md:"6"}},[r("v-lazy",[r("v-card",{staticClass:"info",attrs:{to:{name:"article-slug",params:{slug:e.slug}},link:"",flat:"",outlined:"","min-height":"500"}},[e.image.url?r("v-img",{attrs:{src:t.getMedia(e.image.url),height:"300"}}):t._e(),t._v(" "),e.title?r("v-card-title",{staticClass:"primary--text text-capitalize"},[t._v(t._s(e.title))]):t._e(),t._v(" "),e.description?r("v-card-subtitle",{staticClass:"accent--text"},[t._v(t._s(e.description))]):t._e(),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{to:{name:"article-slug",params:{slug:e.slug}},tile:"",text:"",color:"success"}},[t._v("\n            Read More\n          ")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VCard:v.a,VCardActions:h.a,VCardSubtitle:h.b,VCardTitle:h.d,VCol:y.a,VImg:m.a,VLazy:O.a,VRow:j.a})}}]);