(window.webpackJsonpchatbot=window.webpackJsonpchatbot||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a(14),o=a(12),l=a(29),i=a.n(l),u=a(1),m=a(8),p=a(30),g=a.n(p),f=function(e){return{type:"SIGNIN_USER_SUCCESS",payload:{email:e.email}}},b=(a(114),a(35)),d=a(18);a(115);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.key,n=t.value,r=t.type;switch(r){case"inputChange":return O({},e,Object(d.a)({},a,n));case"setError":return O({},e,{errorMsg:n});default:throw new Error}},h=function(e){var t=Object(n.useReducer)(v,{email:"",password:""}),a=Object(b.a)(t,2),s=a[0],c=a[1],o=e.history,l=e.userEmail;Object(n.useEffect)(function(){l&&o.push("/home")},[l,o]);var i=function(e){var t=e.target,a=t.value,n=t.name;c({key:n,value:a,type:"inputChange"})},u=s.errorMsg,m=s.password,p=s.email;return r.a.createElement("div",{className:"sign-in"},r.a.createElement("div",{className:"sign-in-container"},r.a.createElement("h3",{className:"title"},"Sign in with your email and password"),r.a.createElement("h5",{className:"error-text"},u),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=s.email,n=s.password;"test@gmail.com"===a&&"test"===n?e.signInUserSuccess({email:a}):c({value:"Password or User Name is incorrect!",type:"setError"})}},r.a.createElement("div",{className:"group"},r.a.createElement("input",{name:"email",label:"Email",type:"email",value:p,onChange:function(e){return i(e)},required:!0,className:"form-input"}),r.a.createElement("label",{className:"".concat(p.length?"shrink":""," form-input-label")},"Email")),r.a.createElement("div",{className:"group"},r.a.createElement("input",{name:"password",label:"Password",type:"password",value:m,onChange:function(e){return i(e)},className:"form-input",required:!0}),r.a.createElement("label",{className:"".concat(m.length?"shrink":""," form-input-label")},"Password")),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"submit"},"Sign in")))))},y=Object(c.g)(Object(o.b)(function(e){var t=e.userState;return{userEmail:g()(t,"user.email","")}},function(e){return{signInUserSuccess:Object(m.bindActionCreators)(f,e)}})(function(e){var t=Object(u.a)({},e);return r.a.createElement("div",{className:"homepage"},r.a.createElement("div",{className:"intro-text"},r.a.createElement("h2",{className:"main-text"},"BUDDY"),r.a.createElement("h4",{className:"sub-text"},"Just another chatbot!")),r.a.createElement(h,Object.assign({className:"sign-in"},t)))})),S=a(31),j=a(144),w=a(147),C=a(149),M=a(145),N=function(e){var t=e.serverMessages,a=e.clientMessages;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"You: "),r.a.createElement(M.a,{show:!0,style:{width:"50%"}},r.a.createElement(M.a.Body,null,a[t])),r.a.createElement("span",{style:{width:"50%",marginLeft:"55%"}},"Bot: "),r.a.createElement(M.a,{show:!0,style:{width:"50%",marginLeft:"55%"}},r.a.createElement(M.a.Body,null,e)))}))};N.defaultProps={};var P=N,D=function(e){return{type:"SEND_MESSAGE_REMOTE_SUCCESS",payload:{message:e.message}}},_=function(e){return{type:"SEND_MESSAGE_CLIENT_SUCCESS",payload:{message:e.message}}},k=a(148),x=(a(123),function(e){var t=e.placeholder,a=e.disabled,n=e.value,s=Object(S.a)(e,["placeholder","disabled","value"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,Object.assign({className:"input-container",disabled:a,placeholder:t,value:n,type:"text"},s)))});x.defaultProps={placeholder:"",disabled:!1,value:""};var U=x,B=(a(125),Object(o.b)(function(e){var t=e.messageState;return{serverMessages:t.serverMessages,clientMessages:t.clientMessages}},function(e){return{sendMessageToBot:Object(m.bindActionCreators)(D,e),sendClientMessage:Object(m.bindActionCreators)(_,e)}})(function(e){var t=e.serverMessages,a=e.clientMessages,s=Object(S.a)(e,["serverMessages","clientMessages"]),c=Object(n.useState)(""),o=Object(b.a)(c,2),l=o[0],i=o[1],u=Object(n.useRef)();Object(n.useEffect)(function(){u.current=new WebSocket("wss://echo.websocket.org/"),u.current.onopen=function(e){u.current,console.log("connected")},u.current.onclose=function(e){},u.current.onmessage=function(e){!function(e,t){t({message:e}),console.log("onmess",e)}(e.data,s.sendMessageToBot)}},[]);var m=function(){s.sendClientMessage({message:l}),function(e,t){t.send(e)}(l,u.current);var e=document.getElementById("chat-container");e.scrollTop=e.scrollHeight+e.offsetHeight,i("")};return r.a.createElement(j.a,{className:"homepage"},r.a.createElement(w.a,{style:{width:"60vw",display:"flex",flexDirection:"column",height:"80%",top:"10%"}},r.a.createElement(w.a.Body,{id:"chat-container",style:{color:"black",flexBasis:"88%",maxHeight:"70vh",overflowY:"auto"}},r.a.createElement(P,{clientMessages:a,serverMessages:t})),r.a.createElement(j.a,{style:{color:"black",flexBasis:"12%",flexDirection:"row",display:"flex",padding:"1rem 1rem"}},r.a.createElement(U,{style:{flexBasis:"70%",height:"100%"},value:l,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&m()},placeholder:"Type here and press Enter"}),r.a.createElement(C.a,{style:{flexBasis:"30%"},variant:"primary",onClick:m},"Send"))))})),T=Object(c.g)(Object(o.b)(function(e){var t=e.userState;return{userEmail:g()(t,"user.email",null)}},{})(function(e){if(e.userEmail){var t=e.component;return r.a.createElement(t,e)}return r.a.createElement(c.a,{to:{pathname:"/"}})})),I=a(61),R=a.n(I),A=a(146),G=function(){return{type:"LOGOUT_USER_SUCCESS"}},L=(a(126),function(e){var t=Object(u.a)({},e);return"/"===t.location.pathname?null:r.a.createElement(A.a,{className:"navigation-container",collapseOnSelect:!0,expand:"lg",variant:"light",style:{padding:".5rem 1.5rem .5rem 1.5rem"}},r.a.createElement(R.a.Link,{onClick:function(){t.logout()},as:"div",className:"right-side-navigation_navlink"},"Sign out"))});L.defaultProps={location:{pathname:""},history:{}};var F=Object(c.g)(Object(o.b)(function(){return{}},function(e){return{logout:Object(m.bindActionCreators)(G,e)}})(L)),H=a(62),J=a(63);a(140);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var W={user:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNIN_USER_SUCCESS":return q({},e,{user:t.payload});case"LOGOUT_USER_SUCCESS":return q({},e,{user:null});default:return e}},z=a(49);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var X={serverMessages:[],clientMessages:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE_REMOTE_SUCCESS":return V({},e,{serverMessages:[].concat(Object(z.a)(e.serverMessages),[t.payload.message])});case"SEND_MESSAGE_CLIENT_SUCCESS":return V({},e,{clientMessages:[].concat(Object(z.a)(e.clientMessages),[t.payload.message])});default:return e}},$=Object(m.combineReducers)({userState:K,messageState:Z}),ee=[H.a],te=Object(m.createStore)($,Object(J.composeWithDevTools)(m.applyMiddleware.apply(void 0,ee)));a(141);i.a.render(r.a.createElement(function(){return r.a.createElement(o.a,{store:te},r.a.createElement(s.a,{basename:"/"},r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:y}),r.a.createElement(T,{exact:!0,path:"/home",component:B})))))},null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(142)}},[[64,1,2]]]);
//# sourceMappingURL=main.d33b1d4a.chunk.js.map