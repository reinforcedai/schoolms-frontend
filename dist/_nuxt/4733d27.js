(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{608:function(t,e,l){"use strict";l.r(e);var r=l(35),n=(l(103),l(28),{layout:"auth",data:function(){return{error:null,valid:!1,title:"",email:"",password:null,emailRules:[function(t){return!!t||"Email is required"},function(t){return/.+@.+/.test(t)||"Email must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}]}},methods:{handleSignup:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}}),c=l(18),o=l(24),d=l.n(o),v=l(240),m=l(229),f=l(190),x=l(497),w=l(588),C=l(494),h=l(583),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-row",{staticClass:"my-16 mx-5",attrs:{justify:"center"}},[l("v-col",{attrs:{cols:"12",md:"6"}},[l("v-card",{staticClass:"info pa-5"},[l("v-form",{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-row",{attrs:{justify:"center",align:"center"}},[l("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[l("h3",{staticClass:"primary--text text-center mb-10"},[t._v("Create An Account")])]),t._v(" "),l("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[l("v-text-field",{staticClass:"accent--text",attrs:{label:"Email",dark:"",required:"",outlined:"",placeholder:"email address",rules:t.emailRules,color:"accent"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),l("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[l("v-text-field",{staticClass:"accent--text",attrs:{label:"Password",dark:"",required:"",outlined:"",placeholder:"Enter Password",rules:t.passwordRules,color:"accent"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),l("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[l("v-btn",{staticClass:"accent text-uppercase font-weight-bold",attrs:{block:"",large:"",elevation:"10"},on:{click:t.handleSignup}},[t._v("\n                Submit\n              ")])],1)],1)],1),t._v(" "),l("v-card-text",{staticClass:"primary tex-center"},[l("nuxt-link",{staticClass:"text-decoration-none grey--text",attrs:{to:"/auth/login"}},[t._v("\n          You have an account already?\n          "),l("span",{staticClass:"light-blue--text text--lighten-2"},[t._v("\n            login\n          ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardText:f.c,VCol:x.a,VForm:w.a,VRow:C.a,VTextField:h.a})}}]);