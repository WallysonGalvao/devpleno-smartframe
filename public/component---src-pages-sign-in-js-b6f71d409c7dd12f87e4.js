(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BW8L:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r);a.a=function(e){var a=e.isValid,t=void 0!==a&&a,r=e.successMessage,s=void 0===r?"":r,l=e.errorMessage,c=void 0===l?"":l;return n.a.createElement("li",{className:"flex items-center py-1"},n.a.createElement("div",{className:"rounded-full p-1 fill-current "+(t?"bg-green-200 text-green-700":"bg-red-200 text-red-700")},n.a.createElement("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"}),n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))),n.a.createElement("span",{className:"font-medium text-sm ml-3 "+(t?"text-green-700":"text-red-700")},t?s:c))}},lPWI:function(e,a,t){"use strict";t.r(a);t("91GP"),t("f3/d");var r=t("q1tI"),n=t.n(r),s=t("Wbzz"),l=t("6QdR"),c=t("Zttt"),o=t("BW8L"),m=t("r0Us");a.default=function(){var e=Object(r.useState)({message:""}),a=e[0],t=e[1],i=Object(r.useState)({email:"",password:""}),d=i[0],u=i[1],f=function(e){var a,t=e.target,r=t.name,n=t.value;u(Object.assign(Object.assign({},d),{},((a={})[r]=n,a)))},g=d.email,p=d.password;return n.a.createElement(c.a,null,n.a.createElement("div",{className:"container max-w-full mx-auto md:py-24 px-6"},n.a.createElement("div",{className:"max-w-sm mx-auto px-6"},n.a.createElement("div",{className:"relative flex flex-wrap"},n.a.createElement("div",{className:"w-full relative"},n.a.createElement("div",{className:"md:mt-6"},n.a.createElement("div",{className:"text-center font-semibold text-black"},"Sign In"),n.a.createElement("div",{className:"text-center font-base text-black"},"You can start using SmartFrame for free."),n.a.createElement("form",{className:"mt-8"},n.a.createElement("div",{className:"mx-auto max-w-lg"},n.a.createElement(m.a,{field:"Email",name:"email",onChange:f,value:g,type:"email"}),n.a.createElement(m.a,{field:"Password",name:"password",onChange:f,value:p,type:"password"}),n.a.createElement("div",{className:"flex justify-start mt-3 ml-4 p-1"},n.a.createElement("ul",null,n.a.createElement(o.a,{isValid:p.length>7,successMessage:"The minimum length is reached",errorMessage:"At least 8 characters required"}),a.message&&n.a.createElement(o.a,{errorMessage:a.message}))),n.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),l.a.auth().signInWithEmailAndPassword(d.email,d.password).then((function(){return Object(s.b)("/app")})).catch((function(e){var a=e.code,r=e.message;return t({code:a,message:r})}))},className:"mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"},"Sign In"))),n.a.createElement("div",{className:"text-sm font-semibold block  py-6 flex justify-center"},n.a.createElement(s.a,{to:"/create-account",className:"text-black font-normal border-b-2 border-gray-200 hover:border-teal-500"},"Don't have a account?"," ",n.a.createElement("span",{className:"text-black font-semibold"},"Create one here.")))))))))}},r0Us:function(e,a,t){"use strict";t("f3/d");var r=t("q1tI"),n=t.n(r);a.a=function(e){var a=e.field,t=e.name,r=e.value,s=e.type,l=e.onChange,c=e.placeholder,o=void 0===c?"":c;return n.a.createElement("div",{className:"py-1"},n.a.createElement("span",{className:"px-1 text-sm text-gray-600"},a),n.a.createElement("input",{name:t,onChange:l,value:r,placeholder:o,type:s,className:"text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"}))}}}]);
//# sourceMappingURL=component---src-pages-sign-in-js-b6f71d409c7dd12f87e4.js.map