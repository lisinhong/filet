"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[264],{8264:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-forgot-password"},[a("div",{staticClass:"account-container"},[a("div",{staticClass:"account-header"},[a("div",{staticClass:"company"},[a("i",[a("icon-polygon")],1),a("span",[t._v("Filet")])]),a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("div",{staticClass:"account-card"},[a("div",{staticClass:"account-greeting"},[t._v("Forgot Password?")]),a("b-form-group",{attrs:{"label-for":"email",label:"Email"}},[a("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Type your email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("button",{attrs:{type:"button",disabled:t.isSendDisabled},on:{click:t.handleSend}},[t._v(" Send Recovery Link ")]),a("div",{staticClass:"note"},[a("router-link",{attrs:{to:"login"}},[t._v("Return to Login")])],1)],1),t._m(0)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-footer"},[a("a",{attrs:{href:"#"}},[t._v("Login Help")]),a("a",{attrs:{href:"#"}},[t._v("Contact Support")])])}],n=a(4665),o=a(641),l={name:"AppForgotPassword",components:{IconPolygon:o.Z},data(){return{email:null,isLoading:!1}},computed:{isSendDisabled(){return!this.email||this.isLoading}},methods:{...(0,n.nv)(["sendRecoverLink"]),...(0,n.OI)(["showAlert","hideAlert"]),async handleSend(){this.isLoading=!0;try{await this.sendRecoverLink({email:this.email}),this.showAlert({variant:"success",text:"Email has been sent."})}catch(t){this.showAlert({text:t?.response?.data?.message})}finally{this.isLoading=!1,setTimeout((()=>{this.hideAlert()}),3e3)}}}},r=l,c=a(1001),d=(0,c.Z)(r,s,i,!1,null,"1b0ba666",null),u=d.exports}}]);
//# sourceMappingURL=264.409d6c96.js.map