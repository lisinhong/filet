"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[70],{6070:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-register"},[r("div",{staticClass:"account-container"},[r("div",{staticClass:"account-header"},[r("div",{staticClass:"company"},[r("i",[r("icon-polygon")],1),r("span",[e._v("Filet")])]),r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),1===e.step?r("div",{staticClass:"account-card step-1"},[r("div",{staticClass:"account-greeting"},[e._v("Create Account")]),r("b-form-group",{attrs:{"label-for":"email",label:"Email"}},[r("b-form-input",{attrs:{id:"email",type:"email",state:e.emailState,placeholder:"example@example.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("b-form-checkbox",{attrs:{name:"checkbox-1",value:!0,"unchecked-value":!1},model:{value:e.agree,callback:function(t){e.agree=t},expression:"agree"}},[e._v(" I agree to the "),r("a",{attrs:{href:"#"}},[e._v("Terms of Services.")])]),r("button",{attrs:{type:"button",disabled:e.isVerifyEmailDisabled},on:{click:e.handleVerifyEmail}},[e._v(" Verify your email ")]),r("div",{staticClass:"note"},[r("span",[e._v("Already have an account?")]),r("router-link",{attrs:{to:"login"}},[e._v("Login")])],1)],1):e._e(),2===e.step?r("div",{staticClass:"account-card step-2"},[r("div",{staticClass:"account-greeting"},[e._v("Enter the code we sent to your email")]),r("label",[e._v("Enter the 4-digit code to verify your email")]),r("b-input-group",e._l(4,(function(t,a){return r("b-form-input",{key:a,ref:"otp",refInFor:!0,attrs:{state:e.otpState},on:{input:function(t){return e.handleOtpInput(a)}},model:{value:e.otp[a],callback:function(t){e.$set(e.otp,a,t)},expression:"otp[index]"}})})),1),r("button",{attrs:{type:"button",disabled:e.isVerifyOtpDisabled},on:{click:e.handleVerifyOtp}},[e._v(" Continue ")])],1):e._e(),3===e.step?r("div",{staticClass:"account-card step-3"},[r("div",{staticClass:"account-greeting"},[e._v("Fill out login information")]),r("b-form-group",{attrs:{"label-for":"firstName",label:"First Name"}},[r("b-form-input",{attrs:{id:"firstName",type:"text",state:e.registerState,placeholder:"Type your first name"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),r("b-form-group",{attrs:{"label-for":"lastName",label:"Last Name"}},[r("b-form-input",{attrs:{id:"lastName",type:"text",state:e.registerState,placeholder:"Type your last name"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),r("div",{staticClass:"password-container"},[r("b-form-group",{staticClass:"half",attrs:{"label-for":"password",label:"Password"}},[r("b-form-input",{attrs:{id:"password",type:"password",state:e.registerState,placeholder:"Type your password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("b-form-group",{staticClass:"half",attrs:{"label-for":"confirmPassword",label:"Confirm Password"}},[r("b-form-input",{attrs:{id:"confirmPassword",type:"password",state:e.registerState,placeholder:"Confirm Password"},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1)],1),r("div",{staticClass:"note"},[e._v(" * At least 8 characters with 1 upper case, 1 lower case, and 1 number. ")]),r("b-form-group",{attrs:{"label-for":"referrer",label:"Referrer"}},[r("b-form-input",{attrs:{id:"referrer",type:"text",state:e.registerState,placeholder:"Type your referrer"},model:{value:e.referrer,callback:function(t){e.referrer=t},expression:"referrer"}})],1),r("button",{attrs:{type:"button",disabled:e.isRegisterDisabled},on:{click:e.handleRegister}},[e._v(" Continue ")])],1):e._e(),e._m(0)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"account-footer"},[r("a",{attrs:{href:"#"}},[e._v("Privacy Policy")]),r("a",{attrs:{href:"#"}},[e._v("User Notice")])])}],i=r(6198),n=r(4367),o=(r(9600),r(2479),r(4916),r(5306),r(8975),r(4665)),l=r(641),c={name:"AppRegister",components:{IconPolygon:l.Z},data:function(){return{isLoading:!1,email:null,agree:!1,step:1,otp:{0:"",1:"",2:"",3:""},emailState:null,otpState:null,registerState:null,firstName:null,lastName:null,password:null,confirmPassword:null,referrer:null}},computed:{isVerifyEmailDisabled:function(){return!this.email||!this.agree||this.isLoading},isVerifyOtpDisabled:function(){return""===this.otp[0]||""===this.otp[1]||""===this.otp[2]||""===this.otp[3]||this.isLoading},isRegisterDisabled:function(){return!this.firstName||!this.lastName||!this.password||!this.confirmPassword||this.isLoading}},methods:(0,n.Z)((0,n.Z)((0,n.Z)({},(0,o.nv)(["verifyEmail","verifyOTP","register"])),(0,o.OI)(["showAlert","hideAlert"])),{},{handleVerifyEmail:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.emailState=null,t.prev=2,t.next=5,e.verifyEmail({email:e.email});case 5:e.step=2,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),e.emailState=!1,e.handleError(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message);case 12:return t.prev=12,e.isLoading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,8,12,15]])})))()},handleVerifyOtp:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.otpState=null,t.prev=2,t.next=5,e.verifyOTP({email:e.email,otpCode:Object.values(e.otp).join("")});case 5:e.step=3,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),e.otpState=!1,e.handleError(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message);case 12:return t.prev=12,e.isLoading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,8,12,15]])})))()},handleRegister:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.registerState=null,e.password!==e.confirmPassword&&e.handleError("Passwords are different. Please re-type your password."),t.prev=3,t.next=6,e.register({email:e.email,password:e.password,firstName:e.firstName,lastName:e.lastName,referralFrom:e.referrer});case 6:e.$router.replace("login"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](3),e.registerState=!1,e.handleError(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message);case 13:return t.prev=13,e.isLoading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,9,13,16]])})))()},handleOtpInput:function(e){e<3?this.$refs.otp[e+1].focus():this.$refs.otp[e].blur()},handleError:function(e){var t=this;this.showAlert({text:e}),setTimeout((function(){t.hideAlert()}),3e3)}})},u=c,d=r(1001),p=(0,d.Z)(u,a,s,!1,null,"70b03675",null),f=p.exports}}]);
//# sourceMappingURL=70-legacy.99d0fe47.js.map