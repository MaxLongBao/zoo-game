(this["webpackJsonpzoo-game"]=this["webpackJsonpzoo-game"]||[]).push([[0],{58:function(e,t,a){e.exports=a.p+"static/media/zoo.f27b4497.mp3"},59:function(e,t,a){e.exports=a.p+"static/media/card_back.521923bb.png"},73:function(e,t,a){e.exports=a(96)},78:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(64),l=a.n(r),o=(a(78),a(45)),i=a(46),s=a(62),m=a(14),u=a(65),d=a(56),f=a(63),E=a(57),v=a.n(E),g=(a(84),function(e){var t=e.cards,a=e.handleClick,n=t.map((function(e){return c.a.createElement("div",{key:e.key,onClick:function(){a(e.id,e.key)},className:"card",style:e.style},c.a.createElement("img",{src:e.activeImage,alt:"animal"}))}));return c.a.createElement("div",{className:"card-container"},n)}),h=a(58),b=a.n(h),p=(a(85),function(e){var t=e.cards,a=e.handleEnd,r=Object(n.useState)(t),l=Object(m.a)(r,2),o=l[0],i=(l[1],Object(n.useState)({id:null,key:null})),s=Object(m.a)(i,2),u=s[0],d=s[1],f=Object(n.useState)(0),E=Object(m.a)(f,2),h=E[0],p=E[1],O=Object(n.useState)(16),y=Object(m.a)(O,2),k=y[0],j=y[1],N=Object(n.useState)(0),S=Object(m.a)(N,2),w=S[0],I=S[1];Object(n.useEffect)((function(){}),[h]);var A={transform:"rotateY(180deg)",transition:"transform 0.8s"},C={id:null,key:null};return console.log(k),0===k&&setTimeout((function(){return a(w)}),1e3),console.log(b.a),c.a.createElement("div",{className:"container"},c.a.createElement(g,{cards:o,handleClick:function(e,t){setTimeout((function(){o[t].activeImage=o[t].image,p(h+1)}),200),o[t].style=A,I(w+.5),null!==u.id?e===u.id&&t!==u.key?(setTimeout((function(){o[t].style={visibility:"hidden"},o[u.key].style={visibility:"hidden"},p(h-1)}),1e3),j(k-2),d(C)):(setTimeout((function(){o[t].activeImage=o[t].flipped,o[u.key].activeImage=o[u.key].flipped,o[t].style={},o[u.key].style={},p(h-1)}),1e3),console.log(h),d(C)):d({id:e,key:t})}}),c.a.createElement(v.a,{url:b.a,playStatus:v.a.status.PLAYING,loop:!0}))}),O=(a(86),function(e){var t=e.handleStart,a=Object(n.useState)(""),r=Object(m.a)(a,2),l=r[0],o=r[1];return c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"form-background"}),c.a.createElement("div",{className:"form-card"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-text"},c.a.createElement("h1",null,"WELCOME!")),c.a.createElement("input",{type:"name",className:"form-control",placeholder:"Insert your name",onChange:function(e){return o(e.target.value)}}),c.a.createElement("button",{className:"form-button",onClick:function(){t(l)}},"PLAY!"))))}),y=(a(87),function(e){var t=e.name;return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"hidden"},c.a.createElement("h1",null,t)),c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"NIGHT ZOOKEEPER")),c.a.createElement("div",{className:"name"},c.a.createElement("h1",null,"Player: ",t)))}),k=(a(88),function(e){var t=e.guesses;return c.a.createElement("div",{className:"endgame-container"},c.a.createElement("div",{className:"endgame-card"},c.a.createElement("div",{className:"endgame-text"},c.a.createElement("h1",null,"GAME OVER!"),c.a.createElement("div",{className:"endgame-guesses"},c.a.createElement("h1",null,"You guessed in"),c.a.createElement("div",{className:"endgame-guesses-num"},c.a.createElement("h1",null,t)),c.a.createElement("h1",null,"attempts!"))),c.a.createElement("a",{href:"https://maxlongbao.github.io/zoo-game/"},c.a.createElement("button",{className:"endgame-button"},"PLAY AGAIN!"))))}),j=a(59),N=a.n(j),S=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}};a(89);function w(){var e=Object(u.a)(["\n  {\n    topAnimals {\n      _id\n      name\n      artwork {\n        url\n      }\n    }\n  }\n"]);return w=function(){return e},e}var I=Object(d.a)(w()),A=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),E=d[0],v=d[1],g=Object(n.useState)(0),h=Object(m.a)(g,2),b=h[0],j=h[1],w=Object(f.a)(I),A=w.loading,C=w.error,x=w.data;if(A)return c.a.createElement("p",null,"Loading...");if(C)return c.a.createElement("p",null,"Error :(");var L=[];x.topAnimals.forEach((function(e){return L.push(e)}));return c.a.createElement("div",{className:"main-container"},c.a.createElement(y,{name:i}),""===i?c.a.createElement(O,{handleStart:function(e){!function(e){S(L);var t=L.slice(0,8),a=t.concat(t);S(a),r(a.map((function(e,t){return{id:e._id,name:e.name.toLowerCase(),image:e.artwork.url,flipped:N.a,activeImage:N.a,key:t}}))),s(e)}(e)}}):c.a.createElement(p,{cards:a,handleEnd:function(e){j(e),v(!0)}}),E?c.a.createElement(k,{guesses:b}):null)},C=(a(94),new o.a({uri:"https://graphql.nightzookeeper.com/graphql",cache:new i.a}));var x=function(){return c.a.createElement(s.a,{client:C},c.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.0cf5ab18.chunk.js.map