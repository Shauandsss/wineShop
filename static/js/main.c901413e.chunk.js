(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(38)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(6),c=a.n(o),m=(a(23),a(4)),r=(a(24),a(25),function(e){var t=e.black;return i.a.createElement("div",null,i.a.createElement("header",{className:t?"black":"header"},i.a.createElement("div",{className:"logo"},"Veneza"),i.a.createElement("div",{className:"buttons"},i.a.createElement("div",null,"Buy from us"),i.a.createElement("div",null,"Contact us"),i.a.createElement("div",null,"About us"))))}),s=a(7),l=a.n(s),u=a(8),d=a(13),p=(a(28),a(3)),v=a(1),g=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){(function(){var e=Object(d.a)(l.a.mark(function e(){var t,a,n,i,o,c,m,r,s,d,g,w,E,h,f,b,N,R,A,S,y,T,L,V,k,B,M;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(c in M=function(e){p.a.to(h,{scale:1}),p.a.to(f,{scale:1}),V=e.clientY||V,k&&L&&Math.abs(L-V)>=40&&(w(Math.min(0,L-V)?-1:1),k=!1,L=null,V=null)},B=function(e){p.a.to(h,{scale:4.5}),p.a.to(f,{scale:.4}),k=!0,L=e.clientY||e.touches[0].clientY||e.targetTouches[0].clientY},T=function(){b=E(b,R,y),N=E(N,A,y),f.style.top=N-S/2+"px",f.style.left=b-S/2+"px",requestAnimationFrame(T)},E=function(e,t,a){return(1-a)*e+a*t},w=function(e){if(!o){var t=function(e,t){e.appendChild(t),p.a.to(e,Object(u.a)({},g,{y:-window.innerHeight})).then(function(){e.children[0].remove(),p.a.to(e,{duration:0,y:0})})},c=function(e,t){e.prepend(t),p.a.to(e,{duration:0,y:-window.innerHeight}),p.a.to(e,Object(u.a)({},g,{y:0})).then(function(){e.children[1].remove(),o=!1})};for(var m in o=!0,i+e<0?i=n.length-1:i+e>=n.length?i=0:i+=e,a){var r=a[m],s=document.createElement("div");s.className="section";var l=document.createElement("img");l.src=n[i],s.appendChild(l),(m-Math.max(0,e))%2?c(r,s):t(r,s)}}},3,t=document.getElementById("main"),a=[],i=0,o=!1,n=["https://wallpapercave.com/wp/wp2878153.jpg","https://wallpaper.dog/large/5518832.jpg","https://images6.alphacoders.com/360/thumb-1920-360937.jpg","https://i.pinimg.com/originals/9b/83/70/9b837048fab048e423d5f47d40c82b11.jpg"])(new Image).src=n[c];for(m=0;m<3;m++)(r=document.createElement("div")).className="part",(s=document.createElement("div")).className="section",(d=document.createElement("img")).src=n[i],s.appendChild(d),r.style.setProperty("--x",-100/3*m+"vw"),r.appendChild(s),t.appendChild(r),a.push(r);g={duration:2.3,ease:v.b.easeInOut},window.addEventListener("keydown",function(e){["ArrowDown","ArrowRight"].includes(e.key)?w(1):["ArrowUp","ArrowLeft"].includes(e.key)&&w(-1)}),(h=document.createElement("div")).className="cursor",(f=document.createElement("div")).className="cursor-f",b=0,N=0,R=0,A=0,8,S=36,y=.16,document.body.appendChild(h),document.body.appendChild(f),"ontouchstart"in window&&(h.style.display="none",f.style.display="none"),h.style.setProperty("--size","8px"),f.style.setProperty("--size",S+"px"),window.addEventListener("mousemove",function(e){R=e.clientX,A=e.clientY,h.style.left=e.clientX-4+"px",h.style.top=e.clientY-4+"px"}),T(),k=!1,window.addEventListener("mousedown",B,!1),window.addEventListener("touchstart",B,!1),window.addEventListener("touchmove",function(e){k&&(V=e.touches[0].clientY||e.targetTouches[0].clientY)},!1),window.addEventListener("touchend",M,!1),window.addEventListener("mouseup",M,!1),document.getElementById("go-1").addEventListener("click",function(){w(-1)},!1),document.getElementById("go1").addEventListener("click",function(){w(1)},!1);case 41:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),Object(n.useEffect)(function(){var e=function(){window.scrollY>0?o(!0):o(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),i.a.createElement("div",{id:"main"},i.a.createElement("div",{className:"Background--vertical"},i.a.createElement("div",{className:"Background--horizontal"},i.a.createElement("h1",null,"Veneza"),i.a.createElement("div",{style:{transition:"0.5s",visibility:a?"hidden":"visible",opacity:a?0:1},class:"buttons"},i.a.createElement("button",{class:"next",id:"go-1"}),i.a.createElement("button",{class:"prev",id:"go1"})))))},w=(a(29),a(30),function(e){return i.a.createElement("div",{className:"Card"},i.a.createElement("div",{className:"Img--Card"},i.a.createElement("div",{className:"square"}),i.a.createElement("img",{src:e.img,alt:"bottle of wine"})),i.a.createElement("h3",null,e.name),i.a.createElement("h4",{className:"Value"}," R$ ",e.price),i.a.createElement("div",{className:"Promo"},i.a.createElement("h4",{className:"Promo--Value"},"R$ ",Math.round(.8*e.price))))}),E=a(14),h=a.n(E),f=a(16),b=a.n(f),N=function(e){var t=e.title,a=Object(n.useState)(0),o=Object(m.a)(a,2),c=o[0],r=o[1];return i.a.createElement("div",{className:"movieRow"},i.a.createElement("h2",null,t),i.a.createElement("div",{className:"Line"}),i.a.createElement("div",{className:"movieRow--left",onClick:function(){var e=c+220;e>0&&(e=0),r(e)}},i.a.createElement(h.a,{style:{fontSize:50}})),i.a.createElement("div",{className:"movieRow--right",onClick:function(){var e=c-Math.round(window.innerWidth/2);window.innerWidth-3740>e&&(e=window.innerWidth-3740-60),r(e)}},i.a.createElement(b.a,{style:{fontSize:50}})),i.a.createElement("div",{className:"movieRow--listarea"},i.a.createElement("div",{className:"movieRow--list",style:{marginLeft:c,width:3740}},i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Ros\xe9 Pinot Noir Santa Augusta",img:"https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png",price:299.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png",price:349.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Tinto Pinot Noir MAESTRIA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png",price:129.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Branco Sauvignon Blanc SANTA AUGUSTA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png",price:99.99})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Ros\xe9 Pinot Noir Santa Augusta",img:"https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png",price:299.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png",price:349.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Tinto Pinot Noir MAESTRIA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png",price:129.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Branco Sauvignon Blanc SANTA AUGUSTA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png",price:99.99})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Ros\xe9 Pinot Noir Santa Augusta",img:"https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png",price:299.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png",price:349.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Tinto Pinot Noir MAESTRIA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png",price:129.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Branco Sauvignon Blanc SANTA AUGUSTA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png",price:99.99})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Branco Sauvignon Blanc SANTA AUGUSTA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png",price:99.99})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Ros\xe9 Pinot Noir Santa Augusta",img:"https://santaaugusta.com.br/wp-content/uploads/2020/11/Rose_editado.png",price:299.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Tinto Cabernet Sauvignon/Merlot MAESTRIA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-cabernet-sauvignon-merlot.png",price:349.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Tinto Pinot Noir MAESTRIA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/vinho-maestria-pinot-noir.png",price:129.9})),i.a.createElement("div",{id:"movieRow--item",className:"movieRow--item"},i.a.createElement(w,{name:"Vinho Branco Sauvignon Blanc SANTA AUGUSTA",img:"https://santaaugusta.com.br/wp-content/uploads/2019/08/sauvignon_blanc_santaugusta.png",price:99.99})))))},R=(a(36),function(){return i.a.createElement("div",{className:"Main",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:'url("https://i.pinimg.com/originals/cb/d5/50/cbd550d4f42345e536a864def7faff15.jpg")'}},i.a.createElement("div",{className:"Background--vertical"},i.a.createElement("div",{className:"Background--horizontal"},i.a.createElement("img",{alt:"Bottle of wine",className:"Main--Image",src:"https://i.pinimg.com/originals/a3/89/da/a389da305889146c139d48780d4549b5.png"}),i.a.createElement("div",{className:"Text"},i.a.createElement("div",{className:"Title"},"Lallier Laborie"),i.a.createElement("div",{className:"Content"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At accusantium aut suscipit rem placeat odit perspiciatis earum? Ullam quae facilis illum. Culpa, porro magni! Libero architecto perferendis tempora velit ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At accusantium aut suscipit rem placeat odit perspiciatis earum? Ullam quae facilis illum. Culpa, porro magni! Libero architecto perferendis tempora velit ducimus.")))))});var A=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){var e=function(){window.scrollY>100?o(!0):o(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),i.a.createElement("div",{className:"App"},i.a.createElement(r,{black:a}),i.a.createElement(g,null),i.a.createElement(N,{title:"Promotion"}),i.a.createElement(R,null))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c901413e.chunk.js.map