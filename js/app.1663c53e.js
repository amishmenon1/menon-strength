(function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],s=0,b=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1d8c8cf5":"2c295fea","chunk-202dce4b":"c37746eb","chunk-6839ba67":"26c9135d","chunk-d37ba228":"1f58f4a2"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1d8c8cf5":1,"chunk-202dce4b":1,"chunk-6839ba67":1,"chunk-d37ba228":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1d8c8cf5":"0a8c8429","chunk-202dce4b":"8cfdcee7","chunk-6839ba67":"88a0438a","chunk-d37ba228":"8b47a40f"}[e]+".css",c=l.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===c))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){u=b[i],s=u.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var b=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",b.name="ChunkLoadError",b.type=r,b.request=a,n[1](b)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/menon-strength/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"089e":function(e,t,n){"use strict";n("c136")},"491e":function(e,t,n){"use strict";n("6833")},5378:function(e,t,n){"use strict";n("942f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"main-background"};function c(e,t,n,c,o,i){var l=Object(r["x"])("Navbar"),u=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["h"])(l),Object(r["h"])(u)])}var o={class:"navbar navbar-expand-lg"},i={class:"container-fluid"},l=Object(r["e"])("a",{class:"navbar-brand nav-main-title",href:"/"},"MENON STRENGTH",-1),u=Object(r["e"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["e"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav me-auto mb-2 mb-lg-0"},d={class:"nav-item"},f=Object(r["g"])("About Me"),p=Object(r["e"])("li",null,"  ",-1),h={class:"nav-item"},v=Object(r["g"])("Reviews"),g=Object(r["e"])("li",null,"  ",-1),O={class:"nav-item"},m=Object(r["g"])("Gallery"),j=Object(r["e"])("li",null,"  ",-1),k={class:"nav-item"},y=Object(r["g"])("Pricing"),w={class:"nav-item"},S=Object(r["g"])("Start Training");function N(e,t,n,a,c,N){var C=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["d"])("nav",o,[Object(r["e"])("div",i,[l,u,Object(r["e"])("div",s,[Object(r["e"])("ul",b,[Object(r["e"])("li",d,[Object(r["h"])(C,{class:"nav-link",to:"/about"},{default:Object(r["C"])((function(){return[f]})),_:1})]),p,Object(r["e"])("li",h,[Object(r["h"])(C,{class:"nav-link",to:"/reviews"},{default:Object(r["C"])((function(){return[v]})),_:1})]),g,Object(r["e"])("li",O,[Object(r["h"])(C,{class:"nav-link",to:"/gallery"},{default:Object(r["C"])((function(){return[m]})),_:1})]),j,Object(r["e"])("li",k,[Object(r["h"])(C,{class:"nav-link",to:"/pricing"},{default:Object(r["C"])((function(){return[y]})),_:1})]),Object(r["e"])("li",w,[Object(r["h"])(C,{class:"nav-link",to:"/start-training"},{default:Object(r["C"])((function(){return[S]})),_:1})])])])])])}var C={name:"Navbar",props:{}};n("491e");C.render=N;var T=C,E={name:"App",components:{Navbar:T}};n("5378");E.render=c;var _=E,A=n("9483");Object(A["a"])("".concat("/menon-strength/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var P=n("6c02"),x={class:"home row"};function M(e,t,n,a,c,o){var i=Object(r["x"])("Profile");return Object(r["q"])(),Object(r["d"])("div",x,[Object(r["h"])(i,{msg:"MENON STRENGTH"})])}Object(r["t"])("data-v-a1beab78");var q={class:"main-title highlight"},L=Object(r["e"])("div",{class:"profile profile-pic-1"},null,-1),H=Object(r["e"])("p",{class:"main-subtext highlight"}," CUSTOM FITNESS SOLUTIONS TO MAKE YOU REACH YOUR GOALS ",-1);function G(e,t,n,a,c,o){return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["e"])("h1",q,Object(r["z"])(n.msg),1),L,H])}Object(r["r"])();var R={name:"Profile",props:{msg:String}};n("089e");R.render=G,R.__scopeId="data-v-a1beab78";var U=R,B={name:"Home",components:{Profile:U}};B.render=M;var F=B,I=[{path:"/",name:"Home",component:F},{path:"/about",name:"About Me",component:function(){return n.e("chunk-d37ba228").then(n.bind(null,"f820"))}},{path:"/gallery",name:"Gallery",component:function(){return n.e("chunk-202dce4b").then(n.bind(null,"0d77"))}},{path:"/pricing",name:"Pricing",component:function(){return n.e("chunk-1d8c8cf5").then(n.bind(null,"dbc9"))}},{path:"/start-training",name:"StartTraining",component:function(){return n.e("chunk-6839ba67").then(n.bind(null,"abce"))}}],D=Object(P["a"])({history:Object(P["b"])(),routes:I}),J=D;n("ab8b"),n("7b17");Object(r["c"])(_).use(J).mount("#app")},6833:function(e,t,n){},"942f":function(e,t,n){},c136:function(e,t,n){}});
//# sourceMappingURL=app.1663c53e.js.map