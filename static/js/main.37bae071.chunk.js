(this["webpackJsonpredux-basic-practice"]=this["webpackJsonpredux-basic-practice"]||[]).push([[0],{1071:function(e,a,t){},1072:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(6),c=t.n(i),m=t(2),l="ADD_TITULAR",u="ADD_SUBSTITUTE",s="REMOVE_TITULAR",o="REMOVE_SUBSTITUTE",f=Object(m.b)((function(e){return{players:e.manager.players}}),(function(e){return{addTitular:function(a){return e(function(e){return{type:l,player:e}}(a))},addSubstitute:function(a){return e(function(e){return{type:u,player:e}}(a))}}}))((function(e){var a=e.players,t=e.addTitular,i=e.addSubstitute,c=Object(n.createRef)();Object(n.useEffect)((function(){m(),document.addEventListener("click",m)}),[]);var m=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=c.current;if(a){var t=function(){var e=a.getElementsByClassName("player").length,t=window.matchMedia("(min-width: 640px)").matches?window.matchMedia("(min-width: 1024px)").matches?4:2:1;return"\n                display: grid;\n                grid-template-columns: repeat(".concat(e,", 225px);\n                grid-gap: 1rem;\n                width : ").concat(e/(t+(e>t?.3:0))*100,"%;\n              ")},n=!e&&window.matchMedia("(min-width: 1024px)").matches?"display: grid; grid-row-gap: 1rem;":t();a.setAttribute("style",n)}};return r.a.createElement("section",null,r.a.createElement("h2",null,"Jugadores"),r.a.createElement("div",{className:"player-container"},r.a.createElement("div",{ref:c,onClick:function(){return m.bind(void 0)}},a.map((function(e){return r.a.createElement("article",{className:"player",key:e.id},r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("h3",null,e.name),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t(e)}},"Titular"),r.a.createElement("button",{onClick:function(){return i(e)}},"Suplente")))})))))})),d=t(13),p=t.n(d),g=Object(m.b)((function(e){return{titulars:e.manager.titulars}}),(function(e){return{removeTitular:function(a){return e(function(e){return{type:s,player:e}}(a))}}}))((function(e){var a=e.titulars,t=e.removeTitular;return r.a.createElement("section",null,r.a.createElement("h2",null,"Titulares"),r.a.createElement("div",{className:"field"},a.map((function(e){return r.a.createElement("article",{className:"titular",key:e.id},r.a.createElement("div",null,r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("button",{onClick:function(){return t(e)}},"X")),r.a.createElement("p",null,e.name))})),r.a.createElement("img",{src:p.a,alt:"Soccer Field"})))})),E=Object(m.b)((function(e){return{substitutes:e.manager.substitutes}}),(function(e){return{removeSubstitute:function(a){return e(function(e){return{type:o,player:e}}(a))}}}))((function(e){var a=e.substitutes,t=e.removeSubstitute;return r.a.createElement("section",null,r.a.createElement("h2",null,"Suplentes"),r.a.createElement("div",{className:"substitutes"},a.map((function(e){return r.a.createElement("article",{className:"substitute",key:e.id},r.a.createElement("div",null,r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("button",{onClick:function(){return t(e)}},"X")),r.a.createElement("p",null,e.name))}))))})),b=function(){return r.a.createElement("section",null,r.a.createElement(g,null),r.a.createElement(E,null))},v=t(3),y=t(4),N=t(5),h=t(1),O=t.n(h),T={players:[{id:1,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:2,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:3,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:4,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:5,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:6,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:7,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:8,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:9,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:10,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:11,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:12,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:13,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()},{id:14,name:"".concat(O.a.name.firstName()," ").concat(O.a.name.firstName()),img:O.a.image.avatar()}],titulars:[],substitutes:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l:return Object(N.a)({},e,{titulars:[].concat(Object(y.a)(e.titulars),[a.player]),players:e.players.filter((function(e){return e.id!==a.player.id}))});case s:return Object(N.a)({},e,{titulars:e.titulars.filter((function(e){return e.id!==a.player.id})),players:[].concat(Object(y.a)(e.players),[a.player])});case u:return Object(N.a)({},e,{substitutes:[].concat(Object(y.a)(e.substitutes),[a.player]),players:e.players.filter((function(e){return e.id!==a.player.id}))});case o:return Object(N.a)({},e,{substitutes:e.substitutes.filter((function(e){return e.id!==a.player.id})),players:[].concat(Object(y.a)(e.players),[a.player])});default:return e}},w=Object(v.b)({manager:j}),S=Object(v.c)(w),k=(t(1071),function(){return r.a.createElement(m.a,{store:S},r.a.createElement("main",null,r.a.createElement("h1",null,"Manager"),r.a.createElement(f,null),r.a.createElement(b,null)))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},13:function(e,a,t){e.exports=t.p+"static/media/cancha.aa6d54bf.svg"},14:function(e,a,t){e.exports=t(1072)}},[[14,1,2]]]);
//# sourceMappingURL=main.37bae071.chunk.js.map