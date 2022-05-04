"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[350],{8350:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-login"},[a("div",{staticClass:"account-container"},[a("div",{staticClass:"account-header"},[a("div",{staticClass:"company"},[a("i",[a("icon-polygon")],1),a("span",[e._v("Filet")])]),a("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),a("div",{staticClass:"account-card"},[a("div",{staticClass:"account-greeting"},[e._v("Welcome back ~")]),a("b-form-group",{attrs:{"label-for":"email",label:"Email"}},[a("b-form-input",{attrs:{id:"email",type:"email",placeholder:"example@example.com",state:e.loginState},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("b-form-group",{attrs:{"label-for":"password",label:"Password"}},[a("b-form-input",{attrs:{id:"password",type:"password",placeholder:"Type your password",state:e.loginState},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("router-link",{attrs:{to:"forgot-password"}},[e._v("Forgot Password?")])],1),a("b-form-checkbox",{attrs:{name:"checkbox-1",value:!0,"unchecked-value":!1},model:{value:e.keepLogIn,callback:function(t){e.keepLogIn=t},expression:"keepLogIn"}},[e._v(" Keep me logged in ")]),a("button",{attrs:{type:"button",disabled:e.isLoginDisabled},on:{click:e.handleLogin}},[e._v(" Login ")]),a("div",{staticClass:"note"},[a("span",[e._v("Don’t have an account?")]),a("router-link",{attrs:{to:"register"}},[e._v("Create a free account")])],1)],1),e._m(0)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"account-footer"},[a("a",{attrs:{href:"#"}},[e._v("Privacy Policy")]),a("a",{attrs:{href:"#"}},[e._v("User Notice")])])}],s=a(6198),r=a(4367),i=(a(8975),a(4916),a(5306),a(4665)),l=a(641),c={name:"AppLogin",components:{IconPolygon:l.Z},data:function(){return{email:null,password:null,keepLogIn:!0,loginState:null,isLoading:!1}},computed:{isLoginDisabled:function(){return!this.email||!this.password||this.isLoading}},methods:(0,r.Z)((0,r.Z)((0,r.Z)({},(0,i.nv)(["login","getUserInfo"])),(0,i.OI)(["setToken","setUserInfo","showAlert","hideAlert"])),{},{handleLogin:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var a,o,n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loginState=null,e.isLoading=!0,t.prev=2,t.next=5,e.login({email:e.email,password:e.password});case 5:return a=t.sent,o=a.data.token,e.setToken(o),e.keepLogIn?e.$cookies.set("token",o):e.$cookies.remove("token"),t.next=11,e.getUserInfo({token:o});case 11:n=t.sent,e.setUserInfo(n.data),e.$router.replace("/"),t.next=21;break;case 16:t.prev=16,t.t0=t["catch"](2),e.loginState=!1,e.showAlert({text:null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.message}),setTimeout((function(){e.hideAlert()}),3e3);case 21:return t.prev=21,e.isLoading=!1,t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[2,16,21,24]])})))()}})},u=c,d=a(1001),p=(0,d.Z)(u,o,n,!1,null,"64993a32",null),m=p.exports}}]);
//# sourceMappingURL=350-legacy.365c1d2e.js.map