(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"styles_container__1k_MH",skip:"styles_skip__RSVxP",generate:"styles_generate__2tRGL"}},12:function(e,t,n){e.exports={container:"styles_container__38Ztw",copy:"styles_copy__IKXB0",home:"styles_home__2P03Q"}},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(18),r=n.n(o),s=(n(25),n(8)),i=n(11),u=n.n(i),j=n(2),l=n(1),h=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(0),r=Object(s.a)(o,2),i=r[0],h=r[1],m=Object(c.useState)([]),b=Object(s.a)(m,2),p=b[0],d=b[1],f=Object(j.f)();return Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){e.json().then((function(e){var t=e.data.memes;!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*t),c=e[t];e[t]=e[n],e[n]=c}}(t),a(t)}))}))}),[]),Object(c.useEffect)((function(){n.length&&d(Array(n[i].box_count).fill(""))}),[i,n]),n.length?Object(l.jsxs)("div",{className:u.a.container,children:[Object(l.jsx)("button",{onClick:function(){var e=n[i],t=new FormData;t.append("username","portexe"),t.append("password","abc123"),t.append("template_id",e.id),p.forEach((function(e,n){return t.append("boxes[".concat(n,"][text]"),e)})),fetch("https://api.imgflip.com/caption_image",{method:"POST",body:t}).then((function(e){e.json().then((function(e){f.push("/generated?url=".concat(e.data.url))}))}))},className:u.a.generate,children:"Generate"}),Object(l.jsx)("button",{onClick:function(){return h(i+1)},className:u.a.skip,children:"Skip"}),p.map((function(e,t){return Object(l.jsx)("input",{onChange:function(e){return function(e,t){var n=e.target.value||"";d(p.map((function(e,c){return t===c?n:e})))}(e,t)}},t)})),Object(l.jsx)("img",{alt:"meme",src:n[i].url})]}):Object(l.jsx)(l.Fragment,{})},m=n(12),b=n.n(m),p=n(20),d=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(p.useClipboard)(),r=Object(j.f)(),i=Object(j.g)(),u=new URLSearchParams(i.search).get("url");return Object(l.jsxs)("div",{className:b.a.container,children:[Object(l.jsx)("button",{onClick:function(){return r.push("/")},className:b.a.home,children:"Make More Memes"}),u&&Object(l.jsx)("img",{alt:"meme",src:u}),Object(l.jsx)("button",{onClick:function(){o.copy(u),a(!0)},className:b.a.copy,children:n?"Link copied!":"Copy link"})]})},f=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Meme Creator"}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{})}),Object(l.jsx)(j.a,{path:"/generated",children:Object(l.jsx)(d,{})})]})]})},O=n(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O.a,{children:Object(l.jsx)(f,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.e9972022.chunk.js.map