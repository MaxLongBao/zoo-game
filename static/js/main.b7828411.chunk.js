(this["webpackJsonpzoo-game"]=this["webpackJsonpzoo-game"]||[]).push([[0],{57:function(e,t,a){e.exports=a.p+"static/media/card_back.521923bb.png"},71:function(e,t,a){e.exports=a(87)},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(62),l=a.n(r),i=(a(76),a(45)),o=a(46),m=a(60),u=a(26),s=a(63),d=a(56),f=a(61),v=(a(77),function(e){var t=e.cards,a=e.handleClick,n=t.map((function(e){return c.a.createElement("div",{key:e.key,onClick:function(){a(e.id,e.key)},className:"card",style:e.style},c.a.createElement("img",{src:e.activeImage,alt:"animal"}))}));return c.a.createElement("div",{className:"card-container"},n)}),E=(a(78),function(e){var t=e.cards,a=Object(n.useState)(t),r=Object(u.a)(a,2),l=r[0],i=(r[1],Object(n.useState)({id:null,key:null})),o=Object(u.a)(i,2),m=o[0],s=o[1],d=Object(n.useState)(0),f=Object(u.a)(d,2),E=f[0],g=f[1];Object(n.useEffect)((function(){}),[E]);return console.log(t),console.log(l===[]),c.a.createElement("div",{className:"container"},c.a.createElement(v,{cards:l,handleClick:function(e,t){null!==m.id?e===m.id&&t!==m.key?(l[t].activeImage=l[t].image,g(E-1),setTimeout((function(){l[t].style={visibility:"hidden"},l[m.key].style={visibility:"hidden"},g(E+2)}),1e3),s({id:null,key:null})):(l[t].activeImage=l[t].image,console.log("card is visible"),setTimeout((function(){l[t].activeImage=l[t].flipped,l[m.key].activeImage=l[m.key].flipped,console.log("card is flipped back"),g(E+1)}),1e3),console.log(E),s({id:null,key:null})):(s({id:e,key:t}),l[t].activeImage=l[t].image)}}))}),g=(a(79),function(e){var t=e.handleStart,a=Object(n.useState)(""),r=Object(u.a)(a,2),l=r[0],i=r[1];return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Name"),c.a.createElement("input",{type:"name",className:"form-control",onChange:function(e){return i(e.target.value)}}),c.a.createElement("small",{className:"form-text text-muted"},"This is a memory game")),c.a.createElement("button",{onClick:function(){t(l)}},"Submit")))}),h=function(e){var t=e.name;return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"hidden"},c.a.createElement("h1",null,t)),c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"NIGHT ZOOKEEPER")),c.a.createElement("div",{className:"name"},c.a.createElement("h1",null,"Player: ",t)))},p=a(57),b=a.n(p),k=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}};a(80);function y(){var e=Object(s.a)(["\n  {\n    topAnimals {\n      _id\n      name\n      artwork {\n        url\n      }\n    }\n  }\n"]);return y=function(){return e},e}var O=Object(d.a)(y()),j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),o=i[0],m=i[1],s=Object(f.a)(O),d=s.loading,v=s.error,p=s.data;if(d)return c.a.createElement("p",null,"Loading...");if(v)return c.a.createElement("p",null,"Error :(");var y=[];p.topAnimals.forEach((function(e){return y.push(e)}));return c.a.createElement("div",null,c.a.createElement(h,{name:o}),""===o?c.a.createElement(g,{handleStart:function(e){!function(e){k(y);var t=y.slice(0,8),a=t.concat(t);k(a),r(a.map((function(e,t){return{id:e._id,name:e.name.toLowerCase(),image:e.artwork.url,flipped:b.a,activeImage:b.a,key:t}}))),m(e)}(e)}}):c.a.createElement(E,{cards:a}))},w=(a(85),new i.a({uri:"https://graphql.nightzookeeper.com/graphql",cache:new o.a}));var N=function(){return c.a.createElement(m.a,{client:w},c.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.b7828411.chunk.js.map